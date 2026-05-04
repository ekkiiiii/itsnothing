---
title: "Portfolio"
date: 2026-03-09
author: "Jan-Erik"
customCss: "/css/stuff-i-built.css"
---

I like to build things. What I enjoy most is the practical side of development: writing code, building prototypes, and taking an idea into the real world to see what works (and what doesn't). 

Having spent over 8 years in small, self-organized teams, I'm used to handling the structural side as well. I like thinking about how systems are wired together and how teams can work with them day to day. My current focus lies in C# (Unity/Desktop) and the modern web stack (React/TypeScript).

---

## Current Projects

### Modular Management Simulation (Unity / C#)
A economic simulation in pixel-art style, simulating a video game rental store. It has semi-autonomous agents for employees and customers that can "run the store" on their own as well as being manipulated by players.

{{< tech-insight >}}
**Architecture & Testing**
I'm using Service Patterns to decouple sub-systems. The logic runs independently and is validated via an automated headless test suite, including a "full simulation" which runs like the full game, including pre-defined strategies that simulate user interactions over time. This enables verification of complex economic systems without having to play through the game manually.
{{< /tech-insight >}}

![Simulation Preview](/img/sim-preview.gif#center)

### matchpicks.de (React / TypeScript)
A full-stack web platform for picking games for minor and amateur sports leagues. Built from the ground up—covering everything from the initial system architecture and state management to deployment. 

{{< tech-insight >}}
**Scraping & Verifying**
I set up a system to scrape game data and results from various sources. Since data availability and integrity are on-going concerns with minor and amateur sports leagues, I implemented tools to verify integrity over time via automatic scraping and user submitted feedback.
{{< /tech-insight >}}

[Visit matchpicks.de](https://matchpicks.de)

---

## Professional Journey

### Enterprise XR & Interface Engineering
**2022 – 2024**
Developing industrial monitoring applications and XR systems (VR/AR) in a consulting environment.

{{< tech-insight >}}
**UI Performance & UX**
Built modular interfaces using Unity UI Toolkit and UGUI. Key focus was on performance optimization for standalone VR headsets (draw call reduction, UI batching) and creating intuitive interaction patterns for complex data.
{{< /tech-insight >}}

### Indie Games & Web Tools (Gentleforge)
**2021 – 2022**
Programming and game design for commercial releases and internal tools.

* **Fairyfail (Steam):** Gameplay systems and UI components.
* **Editor Backend:** Designed and built a level-editor backend using Node.js for content management.

{{< youtube TKAHszC510Q >}}

---

## Background & Interactive Roots

### Escape Room Logic (GG Productions / Portalstation)
**2017 – 2020**
Designed and built the technical infrastructure for interactive logic puzzles in Düsseldorf.

{{< tech-insight >}}
**Embedded Logic**
Programmed the software for microcontroller-based puzzle components (Arduino). Developed a central session management system to coordinate sensors and actuators across the room.
{{< /tech-insight >}}

---

## Game Jams & Side Projects

### Shiba Rush (Side Project)
{{< youtube GOiULWwWgfg >}}
Personal project focused on coding and design. [Read the post-mortem here.](http://www.itsnothing.de/post/shiba-rush-post-mortem/)

### Deeper Learning (Ludum Dare 2021)
![Deeper Learning Gif](/img/deeperlearning.gif#center)
A collectible book game built in three days. An experiment in scope management and complex logic under time pressure. 

### Was War Es Einmal (2021)
![Was War Es Einmal Gif](/img/waswareseinmal.gif#center)
Developed for Manasoup Game Jam (2 days). Focused on a tight scope and mobile compatibility.

### Mildly Entertaining Games & Archive
A collection of earlier game jam experiments and long-term projects like *The Side Effects of Life in Space* can be found at [mildlyentertaining.games](https://mildlyentertaining.games).

![Mildly Entertaining Games Collage](/img/mildlyentertaininggames_collage_bg_color.png#center)

---

### Tech Stack Summary
* **Languages:** C#, TypeScript, JavaScript, C++ (Arduino)
* **Frameworks:** Unity, React, Angular, Node.js
* **Focus:** Service Patterns, Unit Testing, UI/UX Implementation

