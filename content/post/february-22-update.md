+++
title = "February 22 Update"
date = "2022-02-19"
author = "Ekki"
description = "Just a quick update"
+++

Oh, hey, the first update in *checks notes* years. I am currently working on a project with some motion controls, if it works out I will write a post about it.

Here is a sneak peak using the [Nuitrack SDK](https://nuitrack.com/) to get some live skeleton data in Unity:

{{< video label="virtual skeleton moving in unity" mp4="/video/updown.mp4" >}}

Since the last update I started working at [https://www.gentleforge.com/](Gentleforge) and updated the page info accordingly. I already mentioned what I am currently working on, most of the time last year I spent helping to ship [Fairyfail](https://fairyfailgame.com/). The game launch could have gone better but it was a great learning experience and I am looking forward to improving with the next title.

Also some technical info about the page:

To scale the image of my face on the about me page I tinkered for a minute and got custom CSS working for the pages here, so that I can create a custom stylesheet file per page, almost like in angular. It really is just this line in the template:

```html
{{ with .Params.customcss }}<link rel="stylesheet" href="{{ . }}" />{{ end }}
```

and then setting the custom css file in the header of the page/post:

```md
customCss = "/css/aboutme.css"
```

The video above is working thanks to the [tutorial found here](https://sunbro.dev/posts/2020-05-20-adding-video-support-to-hugo-terminal/) about adding video support to the terminal theme for hugo. Thanks for that!

That's it for now, until next time!
