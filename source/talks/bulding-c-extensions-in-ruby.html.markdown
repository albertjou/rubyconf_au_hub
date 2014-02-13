---
type: talk
title: Building C Extensions in Ruby
date: 2014-02-21
day: Friday
session: 11:00am
room: Ted Hopkins
time: 11.00am to 11:45am
tags: talk
speaker: André Medeiros
location: Luna Park Crystal Place
---

From time to time, when building Ruby apps, you realise there are no libraries available for what you need. Even worse, Ruby doesn't quite perform as quickly as we would expect in certain areas. There are, however, a lot of high performance, mature technologies built in C that can easily be ported to be used with Ruby. By doing this, we get to keep using our favourite language, opening it to a plethora of applications that were not possible before, and still keep things snappy.

In this talk, I will walk you through the ins and outs of building Spyglass, an OpenCV binding for Ruby. I will also talk in detail about some gotchas (memory management, lack of threading), good practices (C objects as first class citizens, how to properly test extensions), why mkmf needs to be retired and some great examples of extensions you probably already use and should be looking at.
