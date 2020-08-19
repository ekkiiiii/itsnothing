+++
title = "Creating websites with hugo"
date = "2020-08-19"
author = "Ekki"
cover = "/img/hugo-ssg.png"
description = "It's fun, fast and you don't have to worry about updating stuff all the time."
tags = ['Hugo','Static Site Generator']
+++

For the longest time, I used to build websites with Wordpress. It's easy, performance was never that much of an issue for me and it enabled me to give non-technical users the opportunity to create content. But if you ever had a wordpress blog with a handful of plugins running unattended for a while you know that, well you can't leave it unattended actually. Even though wordpress has an automatic updating mechanism by now, keeping up interoperability of plugins/theme and the base wordpress install requires attention from time to time. Even more problematic: if updates fail you are left with security issues and every month it'll become more likely that someone exploits your Wordpress install to distribute spam e-mails.

## Static site generators
I like new paradigms! A few years ago I did a project in [Docpad](https://docpad.bevry.me/), a now discontinued, early static site generator. I immediately fell in love with the idea of leaving dynamic stuff (TM) offline, and just pushing HTML/CSS to the server. Plain HTML on a server is as robust as it get's in the web, hard to argue with that. So if you don't want to tinker with your projects every few weeks or months anyway, your requirements don't go too overboard (there is probably a Wordpress plugin for any given use case) and you value speed, security and reliability give static site generators a try.

## Why Hugo
To be honest I just stumbled upon it by chance and gave it a try. There is a bunch of different SSGs: [A nice overview of JAMStack SSGs](https://www.staticgen.com/). You will likely find something that fits your own favourite flavour of templating (based on React,Vue,Angular,Svelte,...), or programming language if you want to write your own plugins. 
Back to Hugo: I like to check out new languages too, I saw it's written in Go, which I have filed somewhere under "one of the programming languages the cool kids who are really into languages seemed to like". So I was mildly interested because of that, found themes I liked (I had two projects in mind, this page and [Mildly Entertaining Games](https://mildlyentertaining.games)) and tried building the pages.

## Actually making and deploying the pages
Since the post has gotten way longer than I initially anticipated and I'm too lazy too redact it as a whole (Sorry :P), I'll save the actual building experience for another post. If you are already intrigued there is no need to wait, the [Hugo Quick Start Guide](https://gohugo.io/getting-started/quick-start/) is pretty straight-forward and you can have a simple page running in fifteen minutes.

## The advantages
You know what's faster than querying a database for your content to dynamically generate HTML based on a layouting engine on your server? Not querying the database and just having everything pre-generated. As mentioned before, static HTML on your webserver is an advantage in itself. I also mentioned the security advantages. Obviously the security of your deployment environment remains an issue, but if you are not by principal against using any of the big corporate cloud-hosting services this is not as big of an issue. And if you are I'd assume you have your own setup under control.
These two things are the core arguments for SSGs as a whole and I am definetly not capable of performing a complete comparison of different SSGs, so if you like the paradigm check out which one might be a good fit for you.

## Open issues
Formatting using markdown and using git is a big hurdle for non-technical users. I am still thinking about ways to adress this issue. Obviously, a WYSIWYG markdown editor would solve the the first issue, but the way of updating the website still remains a bit complicated. I found a full-fledged solution in [Forestry](https://forestry.io/), but unfortunately it's proprietary, paid and can't be self-hosted. I'll keep a look out for other solutions and write an update once I have a working solutions. I'm also open to suggestions, just contact me on Twitter (@ekkiiiii) or send me an e-mail.