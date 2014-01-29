---
type: talk
title: Hacking Sidekiq for Fun and Profit
date: 2014-02-21
day: friday
time: 11:45am to 12:30pm
tags: talk
speaker: Darcy Laycock
location: Luna Park Crystal Place
---

It's almost inevitable in any Ruby Project - you hit that stage where your logic starts getting more complex, you start doing more stuff that needs to happen but doesn't have to happen in the foreground - or you just want things to be faster.

You move your logic out into workers and do the work in the background.

This talk is going to be all about Sidekiq - a threaded background job implementation written in Ruby - and, in two parts: How you can use it and how you can bend it to your will.

Part 1: Intro to Sidekiq

The boring: a brief introduction to sidekiq, how it works - what it's advantages are. The stuff you need to know about it, why it's useful to consider - even if you're using CRuby / MRI.

Part 2: Hacking Sidekiq

The cooler part - once you know what Sidekiq is, I'm going to show how you can use Sidekiq in your product, how you can extend it and bend it to your will. I'll go into how it implements itself in ruby land and how it interacts with the Redis.

I'll show how you can use the existing middleware (and write your own) to add behaviour to your code, patterns we've found useful for implementing and testing workers as well as the even more interesting side - using Lua support in Redis to implement stuff in Sidekiq.

I want to encourage developers to look at extending their tool set to work better with not just ruby - to become comfortable with how they work internally (e.g. you should really learn how to love redis) and what you really need to be careful of (e.g. bugs that manifest when the site is under less load than usual - a real world example of going too far).

Finally, I'll end with an important question: Why not just use a proper message queue?