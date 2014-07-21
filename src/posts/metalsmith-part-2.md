---
title: "Metalsmith Part 2: Templates"
date: 2014-07-11
---
The next stage of getting set up with Metalsmith is sorting out permalinks and wrapping the content with a template.

I'll go into permalinks in my next post, but wanted to outline the basic process of getting set up with templates here.

First you need to add the Metalsmith Templates plugin: `npm install metalsmith-templates --save-dev`

This is a general template language wrapper, based on Swig?????

To actually use it, you need to install one of the supported template languages. In my case, I chose to use Mustache due to familiarity and it's simplicity: `npm install mustache --save-dev`

Now we insert the template processor into the build chain, making the metalsmith.json file look like this:

```
{
  "clean": true,
  "plugins": {
    "metalsmith-markdown": {},
    "metalsmith-templates": "mustache"
  }
}
```

If you are happy to use the default settings, you just pass in the name of the template language I plan to use. You can also pass in an object with more configuration as I show below.

By default the plugin will look in the ./templates directory for any files that end in the default file extension for your template language. In the case of Mustache it looks for the `.mustache` file suffix.

For blog posts I created a `post.mustache` template and for the (to be implemented) blog index page I created an `index.mustache` template.

A super basic, but functional template in Mustache looks a bit like:

```
<html>
  <body>
    <h1>{{title}}</h1>
    <div>
      {{{contents}}}
    </div>
  </body>
</html>
```

From here on out there are two ways to specify the template to apply to a markdown file in the source folder.

The first is to add the key `template` to the source file metadata and give it the value `templateName.mustache`. An example could be:

```
---
name: The universal internet birthday
date: 1900-01-01
template: post.mustache
---
Funny how everybody on the internet uses this birthday when registering for, uh, content.
```

This type of template specification is fine for one off pages such as an index, portfolio, about page, etc, but are a bit too likely to be forgotten for a common page type (such as a post on a blog).

For the second method I am going to set a default template type for my blog, so that unless specified otherwise all markdown files get rendered as a blog post.

To do this I modify the metalsmith.json file above to look like this:

```
{
  "clean": true,
  "plugins": {
    "metalsmith-markdown": {},
    "metalsmith-templates": {
      "engine": "mustache",
      "default": "post.mustache"
    }
}
```

Now all my posts render out using the `post.mustache` template and I can override the behaviour for other pages.
