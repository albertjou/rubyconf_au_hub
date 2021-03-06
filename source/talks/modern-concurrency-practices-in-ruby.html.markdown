---
type: talk
title: Modern Concurrency Practices in Ruby
date: 2014-02-20
day: Thursday
session: 2:40pm
room: Crystal Ballroom
time: 2:40pm to 3:20pm
tags: talk
speaker: Arnab Deka
location: Luna Park Crystal Place
---

So you think that concurrency is a subject lost in the Ruby world? That it's not practical because of the GVL? That the concurrency paradigm that's bundled with Ruby (a.k.a threading) is not the best way to do concurrency? Or that you already have multi-processes and don't need multi-threading concurrency.

Think again. The Ruby concurrency story has advanced a lot in the last couple of years. Have you heard of people talking about actor-based concurrency, using futures, Software Transactional Memory etc. and want to know more about those?

This talk is a primer on these different paradigms of concurrency, briefly touching on the traditional threads-based model, but focusing more on modern paradigms like actors/futures/STM, with examples and live-demos. Along the way we'll also see what's already possible in Ruby (and in other implementations like JRuby and Rubinius, using gems like Celluloid and friends)
