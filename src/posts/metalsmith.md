---
title: "Getting started with Metalsmith"
date: 2014-07-12
---
Metalsmith is a simple little static site generator, which acts a lot like gulp, piping a series of input file through a series of transformations (which are provided by plugins), and then outputs a directory with the resulting site.

I ended up deciding to use Metalsmith due to it's simple design, ease of getting started and the ability to eventually create whatever kind of site I want. I may end up revisiting the decision, but having all my posts in markdown files should make it fairly easy to transition between any other systems I may want to play with in the future.

Create a new project: `npm init`, `npm install metalsmith --save-dev`

From there on, the [getting started docs](http://www.metalsmith.io/#install-it) get a little more hazy.

Your best bet is to have a look at the [examples](https://github.com/segmentio/metalsmith/tree/master/examples) in the GitHub repository to get an idea of a few different ways you can configure it. I used the [static site](https://github.com/segmentio/metalsmith/tree/master/examples/static-site), [Wintersmith](https://github.com/segmentio/metalsmith/tree/master/examples/wintersmith) and [Jekyll](https://github.com/segmentio/metalsmith/tree/master/examples/jekyll) examples to get going.

Metalsmith has two options for configuring it's behaviour:

1. As a JS file (that is somewhat reminiscent of [Gulp](http://gulpjs.com/))
2. As a metalsmith.json file that is parsed by the CLI tool

I am using the JS file approach, and you can see the [repository](https://github.com/benbarclay/site-generator) that contains the source code.

So far, it's working pretty well.
