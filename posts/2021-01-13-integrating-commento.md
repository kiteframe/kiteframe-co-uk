---
title: "Integrating Commento.io into the new KiteFrame site"
description: Commento.io is a platform for integrating visitor comments with your site, without invading the privacy of those commenting.
author: Tim Mortimer
date: "2021-01-13"
---

As regular attendees on the London technology Meetup scene, we have always enjoyed the various conversations we have had
with fellow Meetup goers over the years. They form a good part of how we grow as developers, providing us with insights
and opinions from a broader range of experiences.

Approaching the redesign of our site, we naturally wanted it to also foster discussions about the topics that we are
interested in, namely domain-driven design, continuous delivery and product development. Needless to say, we needed a
commenting solution.

## Disqus

The most ubiquitous standalone commenting platform out there is most likely Disqus. However, if you think you are
getting Disqus for free, think again. As is the way, it turns out that they have a little side business selling the data
on your commenters to advertisers: [http://data.disqus.com/](http://data.disqus.com/). At the time of writing, this
subdomain was not even secured with HTTPS. If I worked at Disqus, I'd probably be a little insecure too. They have no
shame in quoting "Every 30 days, Disqus collects 1.6 trillion data points across 2 billion monthly unique visits to our
audience platform."

Furthermore, after reading a damning indictment on David
Calhoun's [blog](https://www.davidbcalhoun.com/2020/ditching-disqus-migrating-away-since-it-has-become-a-monster/), I
learned that Disqus makes nearly one hundred additional HTTP requests. It turns out that not only is Disqus bad for your
privacy, it is bad for your site and the planet too.

## Evaluating Commento

Keen to find an alternative solution to Disqus, I started to review some of my favourite blogs for inspiration. The
answer came from Marco Behler's [blog](https://www.marcobehler.com/), which I have always found instructional. Its
clean, no-nonsense writing is backed by great commenting functionality, powered by [Commento](https://commento.io/). I
signed up to the trial and got to work.

## Local Development

An immediate frustration with Commento was the lack of support for local development. The hosted version of Commento is
configured with the domain at which you host your site, which is obviously not localhost:3000.

The solution to this conundrum came from [Remy Sharp](https://remysharp.com/2019/06/11/ejecting-disqus), who pointed out
that the Commento script inspects the `window.parent.location` object. The fix is simple - simply update the object to
point to your site's domain. Since our site is built with [Next.js](https://nextjs.org/), this involved using
a `useEffect()` hook in our guide page's component.

```javascript
useEffect(() => {
  window.parent = {
    location: {
      host: "www.kiteframe.co.uk",
      pathname: meta.commentoId,
    },
  };
});
```

## Consistent IDs

By default, Commento uses the browser's URL to determine which page's comments should be loaded. This sounds ideal,
until you want to change the page's URL as part of a site restructure or an SEO optimisation. In the event that you do
change a page's URL, you must update the div element containing the comments to include a `data-page-id` attribute as
follows:

```javascript
<div id="commento" data-page-id="/original/path/to/page"/>
```

Maintaining and keeping track of those URLs was going to be pain, and so I opted for a more robust solution.

The more eagle-eyed amongst you may have noticed that I set the pathname on the `window.parent.location` object
to `meta.commentoId`. With all our posts written in Markdown, we opted to include an UUID4 identifier in the Front
Matter of each guide, which is explicitly set as the page id. This conveniently decouples the Commento comments from the
page's URL, making future URL changes much simpler.

## Conclusion

Overall, I have found Commento to be a pretty straightforward way to support user commenting on the KiteFrame site. The
$10 / month ($99 / year) pricing is a great value for money given that we don't have to worry about the servers involved
in hosting it, not to mention that we also do not have to compromise our commenter's privacy in the process.

Have you, or are you considering using Commento on your site? Comment with Commento below, and let us know what you
think!
