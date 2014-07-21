---
title: "Metalsmith Part 1 Starting with Metalsmith"
date: 2014-07-11
---
So Metalsmith is pretty easy to get started with.

Create a new project: `npm init`, `npm install metalsmith --save-dev`

From there on, the [getting started docs](http://www.metalsmith.io/#install-it) get a little more hazy.

Your best bet is to have a look at the [examples](https://github.com/segmentio/metalsmith/tree/master/examples) in the GitHub repo to get an idea of a few different ways you can configure it. I used the [static site](https://github.com/segmentio/metalsmith/tree/master/examples/static-site), [Wintersmith](https://github.com/segmentio/metalsmith/tree/master/examples/wintersmith) and [Jekyll](https://github.com/segmentio/metalsmith/tree/master/examples/jekyll) examples to get going.

Metalsmith has two options for configuring it's behaviour:

1. As a JS file (that is somewhat reminiscent of [Gulp](http://gulpjs.com/))
2. As a metalsmith.json file that is parsed by the CLI tool

After having a look through both approaches, I decided to settle on the JSON/CLI version, despite my distaste for another highly specialised CLI tool. Thankfully the CLI tool is extremely basic, it takes no options and just runs a build.

Taking the [Makefile from the static-site example](https://github.com/segmentio/metalsmith/blob/master/examples/static-site/Makefile), I also don't need to worry about even remembering what the CLI command is.

At the moment I have a metalsmith.json file that looks like this:

```
{
  "clean": true,
  "plugins": {
    "metalsmith-markdown": {}
  }
}

```

The clean directive informs the build process to wipe out the contents of the build location. Leaving this on while getting set up with the process, but I imagine I would disable it once I have settled on URL structure, etc.

By omitting a `"source"`  or `"destination"` key from the JSON file, I elect to use the defaults, which are `./src` and `./build` respectively.

By running a build, my markdown files in the src folder get parsed and converted into HTML in the build folder.

Still need to get an index page sorted, along with RSS, but that can wait until later.
