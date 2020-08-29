+++
title = "Revisiting old unity projects - Part 2"
date = "2020-08-29"
author = "Ekki"
cover = "/img/revisiting-old-unity-projects.png"
description = "Time to take a look at an even older project."
tags = ['Unity','Game Dev']
+++

Last time I revisited Potion Shift from April 2016 to make a 64-bit-version for Android. That went pretty well, so this time I'll go back to the first jam game I did. It is called Affectionate Armament, made for Ludum Dare 32 with the theme "An Unconventional Weapon". The idea we went with was to have a weapon with feelings. It's a two player action game with one weapon, and once a player grabs it they can start shooting the other player. The second player tries to avoid the bullets, while attempting to use their "sweettalking" ability to persuade the weapon to switch players. I hope you get the gist of it. While the gameplay has some major design flaws, it is still one of the most interesting design ideas we ever came up with during game jams. If I ever continued to really sink some work into one of them it would probably be this one.  
That was reason number one to revisit it. But wait, there is more! This game is from April 2015, and we only have a Unity Web Player build of it online. That is largely not supported anymore and Unity now has a technically superior way of building for the Web based on WebGL.
So, enough reasons to see what it takes to get a 6 year old Unity game running again.

## Finally, some issues!
Okay, first I have to update Assets to Asset database V2. The same as the last project since the breaking changes there come from version 2019.3. Next up is reimporting assets again because the project was built 
This time things did not go as smoothly. I got greeted by a large list of errors, basically Unity could not find any of the scripts referenced on my gameobjects.  
  
![Unity broken UI references](/img/unity-broken-UI-references.PNG)  
  
This was a nasty type of error to google for, because it can appear in a large variety of different contexts. I clicked through a bunch of forum threads until I saw something that looked like it would help with [this post](https://forum.unity.com/threads/missing-unityengine-ui.735755/#post-6092235). And voilá, that's the solution. Either the .csproj files did not exist before or changed over time (enlighten me if you know it I am too lazy to research that after I got it working :P), either way we need to (re-?)generate them.  

## Resolving the issues with broken script references in old Unity projects

![Unity Regenerate Project Files Menu](/img/Unity-regenerate-project-files.PNG)

So, if you run into this type of error on a old Unity project that you try to revive:  

1) Go to Edit>Preferences>External Tools
2) Check all boxes that apply for your project so that the corresponding .csproj files get generated
3) Click "Regenerate project files"
4) Restart Unity

At least that is what worked for me. The forum thread also says to delete the existing .csproj files during the restart, that wasn't necessary for my old project. 

## Everything is working again
I noticed that I might not need to add another part to this series, so to be sure to check out the other jam games. First, I checked out "My Superhero", our first 3D game, from about the same time. As expected, the same issues arose and could be solved with the same solution. "Here Be Fish" from Ludum Dare 38 was the last jam game I did before fully comitting to escape room stuff for a while. It's not that old, basically fresh, from April 2017. And that one did not require any fixes, just worked out of the box. So all our old game jams can run again in Unity. I might go through them to fix the links to our website in the games, we lost the domain at some point and now have a new one. But before that I want to do a small showreel video that shows some gameplay from Mildly Entertaining Games' early works, so people can get an overview without having to play them all. I'll post it here when I'm done.  
Thanks for reading, until next time.