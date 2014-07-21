---
title: "Metalsmith Part 4: Collections and an Index"
date: 2014-07-12
---
So after writing a few posts you probably want to create a few pages to link everything together, such as a homepage, archive, etc.

This is where the Metalsmith Collections plugin comes in.

`npm install metalsmith-collections --save-dev`

Then we need to modify out metalsmith.json file to include the plugin and configure it:

```
{
  "clean": true,
  "plugins": {
    "metalsmith-collections": {
      "posts":  {
        "pattern": "*.md",
        "sortBy": "date",
        "reverse": true
      }
    },
    "metalsmith-markdown": {},
    "metalsmith-permalinks": {
      "pattern": ":title"
    },
    "metalsmith-templates": {
      "engine": "mustache",
      "default": "post.mustache"
    }
  }
}
```

One thing that took me a while to work out before I got everything working is that you want this (and presumably any plugin that adds metadata) to the beginning of the chain. If it is placed after the markdown plugin, no other plugins will be able to consume the output of it.

The `pattern` parameter is a globbing pattern to choose which files will be added to the collection (`posts` in this example), `sortBy` determines the sorting order (by date in the example) and finally `reverse` sets the output to be in reverse chronological order.

Now we need to create something to consume this plugin's output. In this example, I will create a basic homepage that will list the posts in reverse chronological order.

To do this, we create a template for the index page: `templates/index.mustache` and fill it in with a template that Metalsmith can consume:

```
<html>
  <body>
    <h1>Blog!</h1>
    {{#collections.posts}}
      <h2>{{title}}</h2>
    {{/collections.posts}}
  </body>
</html>

```

Then, to actually use this template, we need to create a page that uses the template. In this case I created `/src/pages/index.md`:

```
---
title: Index
template: index.mustache
---

```
We don't need to fill any content in on the page, we just need to provide the metadata header to generate the page using the template we want.

Now when you run the build you will find that you have another page in your build directory named index.html that contains a list of the titles of your posts.