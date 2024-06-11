---
title: Can you imagine your team deploying to production every day?
description: Deploying in smaller batch sizes makes deployments safer and rollbacks easier. Could you achieve this with your team?
author: Tim Mortimer
date: "2024-06-04"
---

Can you imagine your team deploying to production every day?

I’ve worked in some teams that deploy to production multiple times a day, and some teams that do it as many times in a
quarter.

The former teams:

👫 fostered a collaborative culture where all developers were responsible for to speaking to users, and paired and mobbed
relentlessly

🚦 had repeatable and reliable deployment pipelines that could verify any change’s suitability for deployment in minutes

🧐 maintained robust monitoring and observability setups that helped them quickly diagnose issues

Do you know what they also did?

They decoupled deployment from release.

Thanks to their highly collaborative culture, the teams were only ever working on one or two things at a time. There was
a sustainable and steady flow of work through the teams. They all clocked off at 5pm having achieved a lot.

Often, work in progress was deployed to production 😮

But most of the time it was entirely hidden. The new code just wasn’t externally accessible.

Other times the code was visible, but some of the legacy code was yet to be migrated to the new interface.

Seldomly, they used feature flags to hide the functionality. This was less preferable though as it complicates testing.
Which combination of feature flags settings do you test with?

Have you ever worked in such a team? If so, reach out to let me know!️ 
