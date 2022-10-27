+++
title = "(Mini) Post Mortem: Shiba Rush"
date = "2022-10-27"
author = "Ekki"
description = "We were working on a game with cute dogs. Then we stopped working on that prototype, to start working on another game with cute dogs."
cover = "/img/shiba-rush-screenshot-august-small.png"
+++
Yo, quick update about what I am currently working on with [@VeFroh](https://mobile.twitter.com/ArtVefroh)!

A bit of background on the project first: we had two attempts of building something under the title SHIBA RUSH at Gentleforge earlier this year with a few external people. Long story short, the company had to let everyone go. Two of us wanted to keep in touch by working on a common project, so we started to work on a concept Vero had been working on before. We spent a couple of days in total during the past two months fleshing out the design documentation, with a big focus on finding out what the core vision for this game actually should entail. We discussed a couple of ideas while doing that and came up with a (still rather barebone) game loop that we wanted to try and iterate on. We since moved on to build another prototype from scratch, which created this perfect opportunity for a quick post mortem for the first version.

But first let's get you in on the project by showing you what we built:

{{< youtube GOiULWwWgfg >}}

So, it's a casual action/puzzle game for mobile with a cute shiba theme, colorful graphics and a kind of housesitting backstory.  
Personally not really my cup of tea gameplay-wise but a very nice challenge. Since our main goals were to stay in contact and to develop some ways of working together this should be a good opportunity and those goals were definetely achieved.  

Production for me was a lot of working with 2D features in Unity that I either got deeper in on than before (tilemaps) or started working with for the first time (2D lighting). Collaboratively we achieved a lot of improvements communicating requirements in the design/art/tech-loop, especially how to iterate things. I am very happy with how the characters and interactive objects turned out as a result of these processes. :)  

Building the mechanics was not that hard of a challenge since I was able to find a lot of pre-built solutions, so for every issue I had a lot of sources to cherrypick from. Obviously some of the things are not "production-ready" like that but building them this way also produces a big chunk of research material to use when re-designing features for that purpose.   

But obviously we were also not really happy with a few things about this concept:  

- unclear in which direction we want to go gameplay wise (we had ideas for action/evasion concepts and puzzle/thinking gameplay and it would likely have been very challenging balancing those out since in my experience they often end up working against each other)
- hard to integrate any narrative elements (which we had at least some ideas for, and would have been so nice for the theme)
- kind of boring, stated bluntly, not that bad of course but there were concerns about how far the gameplay would carry (also connected to the first point) and also some doubts about distinguishing the "cute dog game" from other "cute dog games" which are unsurprisingly not a rare occurence
- we showed it to some people and nobody got that excited (that would not be so important if the other aspects were not already an issue)

While trying to adress these things we figured it would be easier to just decide which things to keep and which should be completely re-thought from the ground up. With the learnings from that protoype we developed a design that aims to adress the issues and cater more to what the feel are the strengths of the theme. It should also allow us to profit from the technical learnings and give us an opportunity to re-use or at least build upon pre-existing assets. But more about that in a bit when we actually have built something that we can show based on that new concept.
