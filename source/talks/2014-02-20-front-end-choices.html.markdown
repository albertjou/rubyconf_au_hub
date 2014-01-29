---
type: talk
title: Front End Choices
date: 2014-02-20
day: thurs
time: 2:00pm to 2:40pm
tags: talk
speaker: Alex Coles
location: Luna Park Crystal Place
---

Should we be building our user interfaces the "Rails Way"?

Rails was born in 2004, the time of the ‘Ajax revolution.’ With the help of a little bit of prototype, scriptaculous and RJS, Rails made its mark in part because it facilitated creating beautiful and highly interactive web user interfaces in no time at all.

Fast forward to 2013. Frameworks like Meteor and Hoodie are capturing increasing mindshare. Are we now in the decade of JavaScript? Is the "Rails Way" still relevant to the Front End?

This talk will explore three approaches in two parts to build a front end for your Rails application:

1) In the first approach - ‘the Rails Way’ - I exploit all the parts of the default Rails stack, as blessed by DHH himself. This includes jquery-ujs, Turbolinks and Sprockets. Fundamentally with this technique, most HTML is still generated server-side.

Included in this part of the talk is a discussion if Progressive Enhancement makes sense, and a demonstration of the techniques involved.

2) The second approach is the "Angular Way," exposed together with the 3) third approach, the "Ember Way." With both perspectives, I show how to build "full" client-side web applications.

Included in this part of the talk, in particular, are:

* a discussion about which of the two popular frameworks fits the Rails mindset best, and which brings the steepest learning curve,
* ‘to pipeline or not to pipeline’: does it still makes sense to stick with Sprockets or is more meaningful to use a separate build toolchain (e.g. grunt and bower) in the front end?