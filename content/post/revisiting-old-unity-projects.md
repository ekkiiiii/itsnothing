+++
title = "Revisiting old unity projects"
date = "2020-08-20"
author = "Ekki"
cover = "/img/revisiting-old-unity-projects.png"
description = "Time to check out some old projects and see what it takes to get them to build."
tags = ['Unity','Game Dev']
+++

I have a bunch of old Unity projects lying around, mostly from gamejams. Instant learning, just looking at the menu for our 2016
Ludum Dare Game "Potion Shift": Don't be too ambitious with announcing features/content, especially don't put them in your main menu:

![Potion Shift Menu Screenshot](/img/potionshift_unity_game.PNG)
Coming, Coming Soon... I don't think so :P

From now on I'll just put things in blogposts that I can silently delete later to undo any unfulfilled announcements ;)

I initally got the idea of revisiting this project because I got an e-mail from Google telling me that they'd remove non 64-bit compliant apps for 64-bit devices, and apparently I only built a 32-bit-version. I should have known better even back then, I know, but I'll file it under game jam specific problems. So, here I am trying to get a build running and my to-do-list seems to automatically grow while delving deeper into the scenes since I graciously abandoned the project in the midst of a bunch of things.

## About the game

So it's time to also embed my new policy of building the game, as small/broken/weird as it may be. No promises of further development since I know I have ten other projects I'd rather get to work on before I spent more time with this one.
No complaints please, it's only a match-three-game. The game jam goals for this one was to just make a match-three-game, to cross that of the bucket list of touching any genre eventually. It was also about making something with touch-screen support and eventually getting it on the play store. That all worked out in the end, so no need to hang onto this one for too long. 

The Ludum Dare ratings weren't too bad:

#171	Humor(Jam)  	3.35  
#362	Graphics(Jam)	3.66  
#396	Audio(Jam)	    3.15  
#451	Theme(Jam)	    3.46  
#474	Fun(Jam)	    3.21  
#496	Mood(Jam)	    3.16  
#524	Overall(Jam)	3.26  
#972	Innovation(Jam)	2.44  

[Here is the link to our Ludum Dare entry from April 2016](http://ludumdare.com/compo/ludum-dare-35/?action=preview&uid=50154)  
[Here is a short post mortem I wrote after the jam](http://ludumdare.com/compo/2016/04/21/post-mortem-potion-shift/)

Since I already wrote a post mortem I should actually call this reviving instead of revisiting...  

## Getting it to work
Turns out I just had to revert a few commits with the beforementioned half-finished changes and remove some non-crucial lines related to the now discontinued Web Player. They have had the opportunity to create WebGL-based builds for deploying games directly on websites which worked pretty well for quite a while. It does not matter anyway since I want an Android build. I had to change the scripting backend from Mono to IL2CPP to get the ability to create a 64-bit build. Reading about that relieved me from the guilt of not having built with 64-bit, it has just not been possible before the 2017 LTS version of Unity.  
Am I lucky*, is 4 years just not old enough for stuff to have changed to break things or is the game simple enough that the project can be worked on in future unity versions forever? Well, I might find out next time when I revisit another, even older Unity project.

*I feel super relieved that I started used a password manager before 2016 and have all the passphrases for the signing keys backed up! *phew*

## Plot twist (HINT: PROPERLY BACK UP YOUR KEYSTORES)
I got a little ahead of myself and forgot that I needed the keystore file. I already thought it was lost, I checked my backup locations and it seemed to be gone, that would have meant that I can't update the play store entry. I had to dig a little bit and found a stack of old hard drives, searched through them and and the last one (ultimate suspense) had the keystore file on it. Far from a proper backup, but at least it is not lost and I have since made sure this won't happen again. Overhead for backing up stuff is always worth it, if you have not yet done it for crucial files like keystores DO IT NOW, RIGHT NOW, NO EXCUSES! You will thank yourself later.

## Oooh Play Console has changed 
*Obviously* lots of things in the Google Play backend that I don't recall, but that is another story. I was able to upload the app bundle and it is being reviewed, if it succeeds the whole endeavour has been successful (yay!) and Potion Shift will be available on 64-bit devices after August 2021. I have gotten a few pointers about how build processes and deployment for Android changed during this one-day-project. It was worth it, even if the game has no installations at all. This way I could gain the knowledge without having to read or watch videos about it, learning-by-doing at it's best. 