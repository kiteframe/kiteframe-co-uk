---
title: "Aggregate Design Part 1: Transactional Consistency"
description: Drawing well-defined boundaries around clusters of objects within your codebase is vital to reducing contention between users and optimising the availability of your system. Understanding the invariants within your domain is key to understanding where these boundaries can be drawn.
author: Tim Mortimer
---

# Aggregate Design Part 1: Transactional Consistency

When getting started with the tactical patterns of Domain-Driven Design, you soon come across the concepts of Entities and Value Objects.

Entities are objects with an identity, and are objects whose state we want to keep track of over time.

A client inside your accounting software would be a good example of an Entity. If a client informed you that they have changed their name, you wouldn't want the system to lose track of the fact that they are still the same client just because their name has changed. Indeed, if that were the case, clients would have a very simple way to get out of paying unpaid invoices!

Value Objects on the other hand are immutable, meaning they never change. They can simply just be created or wholly replaced.

A client's phone number could very reasonably be modeled as a Value Object. Once the number has changed, you probably no longer care about the previous number. You would probably just overwrite it.

After a few good examples, you start to feel as if you have a good grasp on what exactly Entities and Value Objects are.

However, you later come across the concept of an Aggregate, and all of a sudden the picture becomes a bit less clear.

If Entities are objects that can change, and Value Objects are objects that can never change, where do Aggregates fit into all of this? What exactly is an Aggregate?

The answer isn't as clear cut, but I will try and answer this question for you in the remainder of this guide.

The short answer is that Aggregates are neither Entities nor Value Objects, but are instead a cluster of Entities and Value Objects that form a consistency boundary.

"What is a consistency boundary?", I hear you ask. It is a good question, and one that gets to the heart of the misunderstanding that many of those new to DDD encounter.

To answer this question, let us first consider why we would cluster Entities and Aggregates together in the first place.

Imagine you are building the aforementioned accounting application, and you are designing the `Client` class. Here is how an initial attempt may look:

```php
<?php

namespace Accounting\Domain;

class Client
{
    private string $clientId;
    private string $name;
    private string $email;
    private string $phoneNumber;
    
    public function __construct(string $clientId, string $name, string $email, string $phoneNumber)
    {
        $this->clientId = $clientId;
        $this->name = $name;
        $this->email = $email;
        $this->phoneNumber = $phoneNumber;
    }

    public function changeName(string $name)
    {
        $this->name = $name;
    }

    public function changeEmail(string $email)
    {
        $this->email = $email;
    }

    public function changePhoneNumber(string $phoneNumber)
    {
        $this->phoneNumber = $phoneNumber;
    }
}
```

**This guide is about Aggregate design, and deliberately leaves out extraneous details to allow us to focus on the topic at hand. I also don't work in the domain of accounting, so please forgive any incorrect modelling.**

It is a good start! With not much domain code at all, you have supported four use cases:

1. Creating a client
2. Changing the name of a client
3. Changing the email address of a client
4. Changing the phone number of a client

However, a new requirement has just come in. The business have very reasonably requested that they want to be able to raise invoices against a client. You take a look at your code, and implement the following changes:

```php
<?php

namespace Accounting\Domain;

class Client
{
    private string $clientId;
    private string $name;
    private string $email;
    private string $phoneNumber;
    private array $invoices;

    public function __construct(string $clientId, string $name, string $email, string $phoneNumber)
    {
        $this->clientId = $clientId;
        $this->name = $name;
        $this->email = $email;
        $this->phoneNumber = $phoneNumber;
        $this->invoices = [];
    }
    
    public function invoice(int $invoiceNumber, float $amount, string $dueDate)
    {
        $this->invoices[$invoiceNumber] = new Invoice($invoiceNumber, $amount, $dueDate);
    }

    ...
}
```

At a glance, this all looks very sensible! After all, if the business says that a client can have multiple invoices, why wouldn't you put an `$invoices` property on the `Client` class?

However, what is the value of issuing invoices if you can't then later mark them as paid? The business had that thought too, and now you have got a new requirement on your desk. Following the Law of Demeter, you create a new method on the `Client` class that allows you to mark an invoice as paid.

```php
<?php

namespace Accounting\Domain;

class Client
{
    ...

    public function invoice(int $invoiceNumber, float $amount, string $dueDate) {
        $this->invoices[$invoiceNumber] = new Invoice($invoiceNumber, $amount, $dueDate);
    }

    public function markInvoiceAsPaid(int $invoiceNumber) {
        $this->invoices[$invoiceNumber]->markAsPaid();
    }

    ...
}
```

Unlike the other methods we have written thus far, `markInvoiceAsPaid()` is the first to reach into the Client Entity, and mutate the state of an Entity held within it.

We have only focussed on the domain for now, but let's consider how this use case would appear from the application layer's perspective.

Since the `markInvoiceAsPaid()` method belongs on the `Client` class, we must retrieve the client by its identifier, allowing us to invoke `markInvoiceAsPaid()` before persisting the client instance back to the repository.

```php
<?php

namespace Accounting\Application;

class MarkInvoiceAsPaidCommandHandler extends TransactionalUseCase
{
    private ClientRepository $clientRepository;

    public function __construct(ClientRepository $clientRepository) {
        $this->clientRepository = $clientRepository;
    }

    public function handle(string $clientId, int $invoiceNumber) {
        $client = $this->clientRepository->clientOfId($clientId);
        
        $client->markInvoiceAsPaid($invoiceNumber);

        $this->clientRepository->save($client);
    }
}
```

But is all that really necessary? We only want to update the state of the invoice itself. Do we really need to go through the hassle of retrieving the client from the Repository in the first place? Why can't we just retrieve the invoice from an invoice Repository, and mark the invoice as paid directly?

```php
<?php

namespace Accounting\Application;

class MarkInvoiceAsPaidCommandHandler extends TransactionalUseCase
{
    private InvoiceRepository $invoiceRepository;

    public function __construct(InvoiceRepository $invoiceRepository) {
        $this->invoiceRepository = $invoiceRepository;
    }

    public function handle(int $invoiceNumber) {
        $invoice = $this->invoiceRepository->invoiceOfNumber($invoiceNumber);
        
        $invoice->markAsPaid();

        $this->invoiceRepository->save($invoice);
    }
}
```

Is there a downside to this approach? In this case, it appears not. Despite being contained within the Client Entity, the Invoice Entities are not bound to the Client Entity by any business rule. It is possible to update them both independently without having to worry about unwanted side effects or race conditions.

With this in mind, we could change our approach to invoicing clients. Before, the application layer mutated the Client Entity directly. Instead, we could change the `invoice()` method on `Client` class to be a factory method, remove the `$invoices` property, and save the invoice in its own separate Repository.

```php
<?php

namespace Accounting\Domain;

class Client
{
    ...

    public function invoice(int $invoiceNumber, float $amount, string $dueDate) {
        return new Invoice($this->clientId, $invoiceNumber, $amount, $dueDate);
    }

    ...
}
```

```php
<?php

namespace Accounting\Application;

class InvoiceClientCommandHandler extends TransactionalUseCase
{
    private ClientRepository $clientRepository;
    private InvoiceRepository $invoiceRepository;

    public function __construct(ClientRepository $clientRepository, InvoiceRepository $invoiceRepository) {
        $this->clientRepository = $clientRepository;				
        $this->invoiceRepository = $invoiceRepository;
    }

    public function handle(float $amount, string $dueDate) {
        $client = $this->clientRepository->clientOfId($clientId);
        
        $invoice = $client->invoice(
                $this->invoiceRepository->nextInvoiceNumberForClient($clientId),
                $amount,
                $dueDate
        );

        $this->invoiceRepository->save($invoice);
    }
}
```

With our new design, an invoice can be created without any state changes required on the client itself. This gives us a few key benefits:

- Less contention - the independence of the Client and Invoice Entities means that they could both be retrieved and updated simultaneously.
- Greater encapsulation - the `markInvoiceAsPaid()` method no longer clutters the `Client` class.
- Improved cache-ability - changes to the client no longer invalidates cached invoices.

**The key take away here is that separating the Entities has not prevented the system from remaining in a consistent state at all times.**

The bad news is that it is not always possible to make such a separation. What happens when the creation of an invoice depends on some state held directly on the Client Entity? For argument's sake, suppose there is an outstanding invoice limit set at the client level that puts a cap on how many outstanding (unpaid) invoices can be raised against the client at any one time.

```php
<?php

namespace Accounting\Domain;

class Client
{
    private string $clientId;
    private string $name;
    private string $email;
    private string $phoneNumber;
    private array $invoices;
    private int $outstandingInvoiceLimit;

    public function __construct(string $clientId, string $name, string $email, string $phoneNumber)
    {
        $this->clientId = $clientId;
        $this->name = $name;
        $this->email = $email;
        $this->phoneNumber = $phoneNumber;
        $this->invoices = [];
        $this->outstandingInvoiceLimit = 10;
    }
    
    public function invoice(int $invoiceNumber, float $amount, string $dueDate)
    {
        $outstandingInvoiceCount = 0;
        
        foreach($this->invoices as $invoice) {
            if ($invoice->isUnpaid()) {
                $outstandingInvoiceCount++;
            }
        }

        if ($outstandingInvoiceCount === $this->unpaidInvoiceLimit) {
            throw new OutstandingInvoiceLimitReachedException();
        }
				
        $this->invoices[] = new Invoice($invoiceNumber, $amount, $dueDate);
    }

    public function changeOutstandingInvoiceLimit(int $invoiceLimit) {
        $this->oustandingInvoiceLimit = $invoiceLimit;
    }

    ...
}
```

There is now an invariant in place - a business rule that can never be breached: the number of outstanding invoices raised against a client at any given moment can never be greater than the outstanding invoice limit set for the client.

Let's consider what separating the Client and Invoice Entities would look like under this new constraint.

Since invoices would no longer be part of the Client Entity, the code in the `invoice()` factory method that is responsible for enforcing the invariant will need to be adjusted.

One such solution would be to hand the invoices for the client in as a dependency. There are arguably a few good approaches here, but I have opted to retrieve the outstanding invoices ahead of time.

```php
<?php

namespace Accounting\Application;

class InvoiceClientCommandHandler extends TransactionalUseCase
{
    private ClientRepository $clientRepository;
    private InvoiceRepository $invoiceRepository;

    public function __construct(ClientRepository $clientRepository, InvoiceRepository $invoiceRepository)
    {
        $this->clientRepository = $clientRepository;				
        $this->invoiceRepository = $invoiceRepository;
    }

    public function handle(float $amount, string $dueDate) {
        $client = $this->clientRepository->clientOfId($clientId);
        $outstandingInvoices = $this->invoiceRepository->outstandingInvoicesForClient($clientId);
        
        $invoice = $client->invoice(
            $this->invoiceRepository->nextInvoiceNumberForClient($clientId),
            $amount,
            $dueDate,
            $outstandingInvoices
        );

        $this->invoiceRepository->save($invoice);
    }	
}
```

```php
<?php

namespace Accounting\Domain;

class Client
{
    ...
    
    public function invoice(int $invoiceNumber, float $amount, string $dueDate, array $outstandingInvoices) {
        if (count($outstandingInvoices) === $this->outstandingInvoiceLimit) {
                throw new OutstandingInvoiceLimitReachedException();
        }
				
        return new Invoice($this->clientId, $invoiceNumber, $amount, $dueDate);
    }

    ...
}
```

Now that the Invoice Entities are no longer contained within the Client Entity, we have added a parameter for the `$clientId` to the constructor of the Invoice Entity. If we did not do this, there would be no way of linking a given invoice back to the client that it relates to.

Nothing inherent about separating the Client and Invoice Entities means that we have to break the invariant. After all, we can always just wrap the entire operation in one large atomic database transaction and consistency is guaranteed.

However, our need to hold a lock on the Client and the Invoices Entities has diminished our one great advantage of separating the Entities in the first place. We can no longer update the Entities independently of each other. No matter what, the consistency of the model must be protected.

We could improve the situation a little by setting the isolation level to allow for non-repeatable reads, which would reduce the time read locks are held on the Client and Invoice Entities. Nonetheless, concurrent updates would lead to the transaction being aborted and rolled back.

Unlike before when the invariant did not exist and there were advantages to treating Client and Invoice as disconnected Entities, it now makes more sense to model them as a coherent whole.

**By placing the Invoice Entities back into the Client Entity, the Client Entity can enforce our business invariant, and maintain the consistency of the model from within the domain layer. Such a cluster of Entities and Value Objects that enforces an invariant, in this case the Client Entity and the contained Invoice Entities, is referred to as an Aggregate.** 

If separating Entities to be disjoint is a way to reduce contention, an Aggregate answers the question of "how far do we go in separating Entities?" Separating Entities reduces contention, and thus improves the availability of your system, just as long as you don't go so far as to break apart properties that are needed to enforce real business invariants.

If you have correctly identified your Aggregate boundaries, you should be able to retrieve any Aggregate and call any of its methods without ever leaving the system in an inconsistent state. For this reason, **an Aggregate is often referred to as a consistency boundary.**

## What's next?

I hope that has helped you to understand what an Aggregate is, and how you can utilize Aggregates to improve the usability and availability of your systems.

In the next blog post I'll be taking a step away from transactional consistency to talk about *eventual consistency* - a tool that lets us further improve the availability of our systems by taking advantage of business rules that don't need to be immediately up-to-date at all times.