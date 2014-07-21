---
title: "Metalsmith Part 3: Permalinks"
date: 2014-07-12
---
So now its time to implement a url system, using the Metalsmith Permalink plugin.

This is also where the deployment target will have an effect on the implementation.

Currently, when we do a build, the entire site is generated in the build directory. This completely isolated build is great if you are going to push that directory to a remote service as the hosted website.

Where this gets slightly more tricky, is that if you want to deploy to GitHub pages, you need the entire site in the root of the git repository. Unfortunately this means that you mix your build tools, source files and final built artefacts all at the root of the repository.

So the simple build process would give you an ideal directory structure that looks like:

```
|- src/
    |- index.md
    |- post1.md
    |- post2.md
|- build/
    |- index.html
    |- post1/
        |- index.html
    |- post2/
        |- index.html
|- templates/
    |- index.mustache
    |- post.mustache
|- metalsmith.json
|- package.json
```

Which allows you deploy the self contained build directory.

For the GitHub pages scenario though, we end up with something looking like this:

```
|- src/
    |- index.md
    |- post1.md
    |- post2.md
|- index.html
|- post1/
    |- index.html
|- post2/
    |- index.html
|- templates/
    |- index.mustache
    |- post.mustache
|- metalsmith.json
|- package.json
```

As the blog has more content added the number of posts at the root level would grow much larger.

This could be partially solved by putting all the posts in a directory such as posts, that would change the url to `/posts/post-name/index.html` and give a directory structure a bit like:

```
|- src/
    |- index.md
    |- post1.md
    |- post2.md
|- index.html
|- posts/
    |- post1/
        |- index.html
    |- post2/
        |- index.html
|- templates/
    |- index.mustache
    |- post.mustache
|- metalsmith.json
|- package.json
```

One important note to make is that if you choose either of the last two build styles, disable the clean before build flag or you will destroy the entire repository.

So, on to actually getting Metalsmith configured to generate some permalinks.

`npm install metalsmith-permalinks --save-dev`

Then we add the plugin to the metalsmith.json file:

```
{
  "clean": true,
  "plugins": {
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

The plugin needs to be after the metalsmith-markdown plugin, but other than that it doesn't seem to matter where it goes in the build chain.

We provide a key `pattern` that specifies how the permalink address is generated. In this case I use a common key from all my posts, `title` to generate directories that correspond to the post title. Each directory then contains an index.html file that corresponds to the template output.

To modify the output to match the format required for GitHub pages, I modify the metalsmith.json file to include the `destination` key like this:

```
{
  "clean": true,
  "destination": ".",
  "plugins": {
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

As for transforming it to contain all the posts inside a separate directory named posts, you require the Metalsmith Collections plugin, which I will set up in my next post.
