---
title: "Portfolio"
date: 2026-03-09
author: "Jan-Erik"
---

I like to build things. What I enjoy most is the practical side of development: writing code, building prototypes, and taking an idea into the real world to see what works (and what doesn't). 

Having spent over 8 years in small, self-organized teams, I'm used to handling the structural side as well. I like thinking about how systems are wired together and how teams can work with them day to day. My current focus lies in C# (Unity/Desktop) and the modern web stack (React/TypeScript).

---

## Current Projects

### matchpicks.de (React / TypeScript)

A full-stack web platform for picking games for minor and amateur sports leagues. Built from the ground up, covering everything from the initial system architecture and state management to deployment.

[Visit matchpicks.de](https://matchpicks.de) · [Try the demo](https://matchpicks.de/demo/launch)

{{< screenshot-gallery title="Matchpicks Screenshot Gallery" src1="/img/matchpicks-dashboard-overview.png" caption1="Dashboard overview: the main landing page for players, with active leagues and the number of picks still missing." src2="/img/matchpicks-picks-page.png" caption2="Picks page: the main league workspace where players move between picks, standings, my picks, and settings." src3="/img/matchpicks-league-command-center.png" caption3="League command center: an admin-oriented overview for checking progress and moving each league forward week by week." src4="/img/matchpicks-integrity-dashboard.png" caption4="Integrity dashboard: a conflict review screen for comparing data sources and resolving mismatches." src5="/img/matchpicks-sports-data-management.png" caption5="Sports data management: the back-office area for leagues, seasons, schedules, results, scrapers, and activity logs." >}}

{{< article-series series="matchpicks" >}}
{{< /article-series >}}

### Video Store Manager (Unity / C#)
Personal Unity project: a small management simulation about running a VHS rental shop, built as a playground for architecture and automated testing rather than a shipped product.

{{< tech-insight >}}
**Technical overview**
The codebase separates simulation logic from presentation so economy, staffing, inventory, and customer behaviour can evolve without growing a tangle of scene references. Game rules live in plain C# with narrow service boundaries; Unity handles rendering, input, and the pixel-art front end. The same core runs in the editor and in headless integration tests that advance full sessions programmatically, which makes it easier to catch regressions in balancing and flow before playing through builds by hand.
{{< /tech-insight >}}

---

## Professional Journey

### Enterprise XR & Interface Engineering
**2022 – 2024**
Developing industrial monitoring applications and XR systems (VR/AR) in a consulting environment.

{{< tech-insight >}}
**Architecture & Refactor**
Helped redesign a complex VR scene-editing platform from the ground up. That work pushed me toward writing more pure C#/.NET and toward an architecture that stayed as independent from MonoBehaviour as possible, with the goal of improving SOLID compliance and keeping the code easier to test and reason about.
{{< /tech-insight >}}

### Indie Games & Web Tools (Gentleforge)
**2021 – 2022**
Programming and game design for commercial releases and internal tools.

* **Fairyfail (Steam):** Gameplay systems and UI components.
* **Editor Backend:** Designed and built a level editor backend using Node.js for content management.

{{< youtube 1cjGxvTlWjE >}}
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
Personal project focused on coding and design. [Read the post-mortem here.](/post/shiba-rush-post-mortem/)

### Deeper Learning (Ludum Dare 2021)
![Deeper Learning Gif](/img/deeperlearning.gif#center)
A collectible book game built in three days. An experiment in scope management and complex logic under time pressure. 

### Was War Es Einmal (2021)
![Was War Es Einmal Gif](/img/waswareseinmal.gif#center)
Developed for Manasoup Game Jam (2 days). Focused on a tight scope and mobile compatibility.

### Mildly Entertaining Games & Archive
A collection of earlier game jam experiments and long-term projects like *The Side Effects of Life in Space* can be found at [mildlyentertaining.games](https://mildlyentertaining.games).

![Mildly Entertaining Games Collage](/img/mildlyentertaininggames_collage_bg_color.png#center)

