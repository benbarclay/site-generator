---
title: Choosing a static site generator
date: 2014-07-10
---
So, given that I want to use GitHub Pages (for now), I have been looking into static site generators.

In the past I have used Jekyll/Octopress, but they felt a little too cumbersome to me. From memory, they were relatively slow to generate a site and (Octopress at least) involved you cloning a repository to get started, which left your git history for the site full of non-content commits.

Starting over I had a quick think about the main things that would be important to me in terms of choosing a static site generator.

- JavaScript powered
- Fast
- Simple to understand
- Uses Markdown
- Just create a file and run the build

JavaScript because it's what I do most of my work in these days, and I find it pretty easy to read and understand.

Fast because I want to reduce the amount of friction involved in writing.

Needs to be simple to understand, so that I can control the build process and tailor it to my needs without much aggravation.

Markdown should be a usable post language, because I am used to it and it is fairly ubiquitous.

Simple to create files, I don't really want to remember more CLI commands to create files. I just want to touch a file then open in vim to edit. Build it with some standard process then commit and done.

So I started looking around at site generators with these criteria in mind and stumbled on [Staticgen](http://www.staticgen.com/), which [JokeyRhyme](http://jokeyrhy.me/) had mentioned to me a little while ago.

Narrowing down my search to the top three JS site generators I ended up with

- [Hexo](http://hexo.io/)
- [Metalsmith](http://www.metalsmith.io/)
- [Harp](http://harpjs.com/)

Being lazy here I discounted [Harp](http://harpjs.com/) as serving needs way more complex than mine, with a built in web server that compiles on the fly, optionally making a static site.

I had a quick look through the [Hexo Documentation](http://hexo.io/docs/) and decided that it too had way more power than I needed. Plus it had a cli tool that I would forget how to use.

[Metalsmith](http://www.metalsmith.io/) seemed to be just about right. Very simple to use. It doesn't provide all the functionality of the other two, but allows me to pull in plugins to provide that sort of functionality if/when I want to introduce that complexity.