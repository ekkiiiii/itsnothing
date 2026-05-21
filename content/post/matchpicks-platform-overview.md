+++
title = "Matchpicks: Sports Picking Platform"
date = "2026-02-01"
author = "Jan-Erik"
description = "A React-based web platform for creating and joining picking leagues across different sports."
cover = "/img/matchpicks-picks-page.png"
customCss = "/css/post-matchpicks.css"

[articleSeries]
title = "MatchPicks Article Series"

[[articleSeries.items]]
title = "Part 1: Matchpicks: Sports Picking Platform"
url = "/post/matchpicks-platform-overview/"
description = "project overview and product context"

[[articleSeries.items]]
title = "Part 2: From Service Locator to Composition Root"
url = "/post/from-service-locator-to-composition-root/"
description = "backend architecture and dependency injection refactor"
+++

Over the last months I've been working on **Matchpicks**, a web platform for creating and joining picking leagues around sports games.

The core idea is simple: instead of being tied to a single big league or a single sport, Matchpicks is built to **support many small, custom leagues** – perfect for niche sports and tight‑knit communities.

## What it is

Matchpicks focuses on a simple loop:

1. Create a league.
2. Invite players.
3. Submit picks before the matches start.
4. Score the results and keep the standings moving.

That sounds straightforward, but the interesting part is that the platform is meant to work for a lot of small leagues rather than one large, fixed competition. That means the system has to stay flexible around sports, seasons, and league-specific rules.

## A few practical details

**Tech stack:** React and TypeScript on the frontend, with a Node.js/Express backend.

**Leagues & picks:** Users can create their own leagues, invite friends, and submit picks for upcoming matches.

**Multiple sports:** The system is designed to handle different leagues and competition formats, so it can be reused for a variety of sports.

**Origin story:** The first real-world use case was European semi-professional and amateur American Football, where there are lots of smaller leagues but very few tools to run structured prediction games around them.

## Current screens

The screenshots below show the current state of the main flows I use most often.

{{< figure position="center" src="/img/matchpicks-dashboard-overview.png" caption="Dashboard overview: the main landing page for players, with active leagues and the number of picks still missing." >}}

### League detail view

This is the league workspace where players move between picks, standings, my picks, and settings.

{{< figure position="center" src="/img/matchpicks-picks-page.png" caption="Picks page: the main league workspace where players move between picks, standings, my picks, and settings." >}}

### League command center

This is the operational view for keeping leagues moving.

{{< figure position="center" src="/img/matchpicks-league-command-center.png" caption="League command center: an admin-oriented overview for checking progress and moving each league forward week by week." >}}

### Integrity dashboard

This is where I review conflicting data and decide what to accept, flag, or dismiss.

{{< figure position="center" src="/img/matchpicks-integrity-dashboard.png" caption="Integrity dashboard: a conflict review screen for comparing data sources and resolving mismatches." >}}

### Sports data management

This is the section for managing leagues, seasons, schedules, results, and sync activity.

{{< figure position="center" src="/img/matchpicks-sports-data-management.png" caption="Sports data management: the back-office area for leagues, seasons, schedules, results, scrapers, and activity logs." >}}

## What I wanted from it

The initial goal was to prototype the core functionality and get a better feel for a modern web stack after spending most of my time in Unity/C# for a while.

As the project evolved, it also became a place to think through architecture in this context bit by bit and try out different solutions without starting from scratch every time.

That is why the platform was built around a straightforward data model, a frontend that can grow with the feature set, and enough structure in the backend to support additional sports and league types later.

There is still plenty to refine, both in UX and in feature depth, but the current version already supports the main loop: create a league, join as a player, and submit weekly picks.


