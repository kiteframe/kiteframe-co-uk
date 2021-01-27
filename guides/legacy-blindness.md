---
title: "What is legacy blindness, and how can I avoid it?"
description: Legacy software has a strong influence over the way that we think about a domain; it is crucial to not fall into the trap of reimplementing the same solutions, by employing tactics to learn from its models and improve upon them.
author: Joe Reed
date: "2021-01-27"
commentoId: 165f56fa-2842-4060-b250-5f5e7c5188a8
---

Legacy blindness is a term coined by Eric Evans - the first time I heard it was when watching [his talk at DDD Europe 2018](https://youtu.be/T29WzvaPNc8?t=432). In the talk, Eric defines legacy blindness as the state of the models and language of legacy software being so ingrained in the way that we think about a domain that we are unable to see other options. He also notes that this is a particularly strong force when the legacy is a good one.

On the past few software projects I've worked on, I've observed exactly this phenomenon, and have witnessed first hand the effect it can have on a project.

Part of our job as software developers is to talk to business experts, and drill down into the domain, the events that occur, the objects that we might model, and the rules that govern the way that the business works. In doing so, we learn the vocabulary that the business uses to talk about their processes. We can then use that to create useful models in the software that are able to evolve and accommodate new requirements as they come up by closely mirroring the real world processes.

To quote Eric Evans again (this time from [his talk at DDD Europe 2019](https://youtu.be/pMuiVlnGqjk?t=291)):

> In almost every project we are working in a problem space where there is already a lot of software; our software will have to coexist with that software.
Perhaps we're talking about a refinement of the existing software. Perhaps we're talking about some new piece of software that will integrate with another piece of software. Or maybe we're talking about a new piece of software that is replacing a piece of existing software. But there is always existing software.

Often, the business processes are themselves defined (and constrained) by the existing software, and hence so is the language used. This can cause issues for us as developers: It's safe to assume that if we are here, it is because the software is being improved, or redeveloped, and so we wish the new software to be a better fit for the business use cases, and solve the problems caused by the incumbent software.

However, if the way that the business thinks about the problem space is tightly linked to the current solution, it can be difficult to solve these problems, and the team can find themselves effectively reimplementing the existing system.

# How do we avoid the trap of legacy blindness?

## Educating ourselves on the domain

It's easy as a developer to treat all problems the same - implement the logic, satisfy the acceptance criteria, and never really worry whether you're working in ice cream distribution or car insurance.

However, to make your model truly useful and maintainable, and to also write the best software that you can, you ultimately have to educate yourself in the domain in which you are working.

This will allow you to have more productive conversations with the domain experts, help you ask more specific questions, and find edge cases or new requirements more efficiently.

If there is literature available in your domain, read it, and form your own mental models of the domain. You can align these with the specific ones from the company,  prod and probe your own understanding, and identify which aspects of the vocabulary are driven by the domain, and which are purely constructs in the existing software.

## Discussing how the problem would be solved without software

If everything happens in the existing software, then rather than asking how things are done at the business, it's often a useful technique to take a step back and ask how the problem would be solved in the days before software, or if software weren't available to us now.

You'll find new words and concepts, identify different contexts (through physical hand off of paperwork for example), and cut through the model imposed on the business processes by existing software.

## Event storming

If you're looking for a framework to base workshops around, event storming may be useful to you. It's a lightweight and flexible way of investigating a business domain, and can also help get you out of the mindset of the existing software's UI, getting back to the fundamentals with events, users, commands, external systems - universal truths of the business that exist outside the existing software.

## Decouple ourselves from the existing software

It's usually dangerous to attempt to replace existing software all at once. As a result, there will be a time when our software coexists alongside the existing software. Often, we will need to integrate the two.

It's important to decouple the new software from the existing wherever we can, so that the structures and language of the existing system doesn't leak into our new software and affect our judgement and model.

An anticorruption layer is a technical solution that we can use to help us do this. We can isolate the code for integration with the existing software within a separate module, and leverage infrastructure such as queues or event streams to keep the old system up to date. Once we have replaced the existing software, the module can be unplugged, leaving no sign in our new application that the replaced software ever existed.

# Learn from the existing software

While it is important to avoid the pitfall of accidentally rewriting legacy software line for line, the legacy software is legacy for a reason - it will solve a lot of the business problems, and often get a lot of the modelling right.

Watch and question users using the existing software, and see which bits work well and which bits are causing the issues. Keep an eye out for any workarounds or 'hacks' that users use to fit their business processes into the system. Listen for any words used by the users or domain experts that aren't present in the software. Take note of these translations - it's gold when a user points at a form field and says 'well this is *really* the...'

By making yourself familiar with the legacy software, you can also spot language that is legacy software specific, and gently nudge the team towards using more useful and more accurate domain language when talking about requirements or user stories, and when writing the UI.

# Summary

Step one of avoiding legacy blindness is to learn to recognise it. Try to get back to the fundamental business concepts, and where the business wants to go, rather than getting hung up on how things are currently done.

Learn about the domain, collaborate closely with domain experts, and learn the lessons that are to be learned from the existing software, while always refining your model to be the best it can be at reaching the goals of the project.
