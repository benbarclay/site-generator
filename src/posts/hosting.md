---
title: Hosting
date: 2015-03-11
---

Having used GitHub pages in the past, I initially got this blog up and running on it pretty quickly. Over time though, I wanted to start hosting it myself, so I started the transition to AWS.

Domain + DNS
---
The first stage was migrating my DNS from the free Namecheap servers to Route 53. This was pretty easy, mostly creating some hosting zones and then copy pasting some strings around. At this point I still had Route 53 directing traffic through to GitHub pages.

The second stage involved migrating my domains from Namecheap to AWS as well. Route 53 makes this pretty easy, though you get charged again for domain registration (with domain expiry reset to the date you transferred).

Once the domains are transferred, I pointed the new domains at the the DNS records and everything kept working as per normal.

Hosting
---
As this blog is a simple static site, I just uploaded the contents into an S3 bucket I created. Once uploaded I turned on the Static Website Hosting, setting the homepage to index.html.

Hooking it up
---
The final stage was to point the Route 53 hosting zones at the S3 bucket. This is a simple A name alias record that points straight at the bucket. Wait for the DNS entries to expire and watch the site go live!
