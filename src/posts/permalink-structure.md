---
title: Permalink structure
date: 2014-07-12
---
So, whilst working through my Metalsmith setup, I was faced with the choice of how to structure my permalinks.

The example given in the docs shows the of of just `/postName`, which works, but gives me a vague concern about having post title conflicts.

In the past I had also seen and used `/YYYY/MM/DD/postName`.

Getting my OCD on I decided to research the topic a little and see what the current best practices are.

A basic search turns up a ton of results for people configuring Wordpress. The advice given is mostly anecdotal and specified for Wordpress speed reasons firstly and SEO secondly.

Generally the Wordpress community seemed to settle on including the date in the URL, then several years later, decided to drop it as unnecessary and possibly damaging SEO.

Good arguments were given both ways, so I decided to ignore it all and go straight to the predominant indexer of links on the web, Google.

The best resource is the [Google SEO Starter Guide](http://static.googleusercontent.com/media/www.google.com/en//webmasters/docs/search-engine-optimization-starter-guide.pdf) which also links to a [support article](https://support.google.com/webmasters/answer/76329) that has additional information.
 
General notes from the SEO Starter Guide:

- Simple-to-understand URLs will convey content information easily
- Creating descriptive categories and filenames for the documents on your website can not only help you keep your site better organized,but it could also lead to better crawling of your documents by search engines
- If your URL contains relevant words, this provides users and search engines with more information about the page than an ID - or oddly named parameter would
- remember that the URL to a document is displayed as part of a search result in Google, below the document's title and snippet

SEO Starter Guide URL best practices:

- Use words in URLs
- Create a simple directory structure
- Provide one version of a URL to reach a document
- Plan out your navigation based on your homepage
- Allow for the possibility of a part of the URL being removed
- Create a naturally flowing hierarchy

Notes from the Webmaster Support Article:

- A site's URL structure should be as simple as possible
- Consider using punctuation in your URLs
  - We recommend that you use hyphens (-) instead of underscores (_) in your URLs
- Whenever possible, shorten URLs by trimming unnecessary parameters

So given that the shorter the URL the better, the ideal url structure would be something along the lines of `/post-name`.

