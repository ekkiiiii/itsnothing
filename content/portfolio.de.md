---
title: "Portfolio"
date: 2026-03-09
author: "Jan-Erik"
customCss: "/css/stuff-i-built.css"
---

Ich baue gerne Dinge. Am meisten Spaß macht mir dabei der praktische Teil der Entwicklung: Code schreiben, Prototypen bauen und eine Idee in die Realität umsetzen, um zu sehen, was funktioniert (und was nicht). 

Da ich die letzten 8+ Jahre überwiegend in kleinen, selbstorganisierten Teams gearbeitet habe, bin ich es gewohnt, auch die strukturelle Seite zu übernehmen. Ich mag es, darüber nachzudenken, wie Systeme „verkabelt“ sind und wie Teams im Alltag damit arbeiten können. Aktuell liegt mein Fokus auf C# (Unity/Desktop) und dem modernen Web-Stack (React/TypeScript).

---

## Aktuelle Projekte

### Modulare Management-Simulation (Unity / C#)
Eine Wirtschaftssimulation im Pixel-Art-Stil, die einen Videospiel-Verleih simuliert. Sie verfügt über semi-autonome Agenten für Mitarbeiter und Kunden, die den Laden eigenständig führen können, aber auch vom Spieler manipuliert werden können.

{{< tech-insight >}}
**Architektur & Tests**
Ich nutze Service-Patterns, um Subsysteme zu entkoppeln. Die Logik läuft unabhängig und wird über eine automatisierte Headless-Testsuite validiert. Diese beinhaltet eine „Vollsimulation“, die wie das eigentliche Spiel abläuft – inklusive vordefinierter Strategien, die Nutzerinteraktionen über Zeit simulieren. Dies ermöglicht die Verifizierung komplexer ökonomischer Systeme, ohne das Spiel manuell durchspielen zu müssen.
{{< /tech-insight >}}

![Simulation Preview](/img/sim-preview.gif#center)

### matchpicks.de (React / TypeScript)
Eine Fullstack-Webplattform für die Spieltags-Auswahl in kleineren Sport- und Amateurligen. Von Grund auf eigenständig entwickelt – von der initialen Systemarchitektur über das State-Management bis hin zum Deployment.

{{< tech-insight >}}
**Scraping & Verifizierung**
Ich habe ein System zum Scraping von Spieldaten und Ergebnissen aus verschiedenen Quellen aufgebaut. Da die Datenverfügbarkeit und -integrität bei Amateur-Ligen eine ständige Herausforderung darstellt, habe ich Tools implementiert, um die Datenqualität über automatisierte Abgleiche und Nutzer-Feedback kontinuierlich zu verifizieren.
{{< /tech-insight >}}

[Besuche matchpicks.de](https://matchpicks.de)

---

## Beruflicher Weg

### Enterprise XR & Interface Engineering
**2022 – 2024**
Entwicklung von industriellen Monitoring-Anwendungen und XR-Systemen (VR/AR) im Consulting-Umfeld.

{{< tech-insight >}}
**UI-Performance & UX**
Aufbau modularer Interfaces mit Unity UI Toolkit und UGUI. Fokus auf Performance-Optimierung für Standalone-VR-Headsets (Draw-Call-Reduktion, UI-Batching) und intuitive Interaktionsmuster für komplexe Daten.
{{< /tech-insight >}}

### Indie-Games & Web-Tools (Gentleforge)
**2021 – 2022**
Programmierung und Game-Design für kommerzielle Releases und interne Tools.

* **Fairyfail (Steam):** Gameplay-Systeme und UI-Komponenten.
* **Editor-Backend:** Entwurf und Implementierung eines Level-Editor-Backends mit Node.js für die Content-Verwaltung.

{{< youtube 1cjGxvTlWjE >}}

---

## Hintergrund & Interaktive Wurzeln

### Escape-Room-Logik (GG Productions / Portalstation)
**2017 – 2020**
Konzeption und Aufbau der technischen Infrastruktur für interaktive Logik-Rätsel in Düsseldorf.

{{< tech-insight >}}
**Embedded-Logik**
Programmierung der Software für mikrocontrollerbasierte Rätsel-Komponenten (Arduino). Entwicklung eines zentralen Session-Management-Systems zur Koordination von Sensoren und Aktoren im Raum.
{{< /tech-insight >}}

---

## Game Jams & Side Projects

### Shiba Rush (Side Project)
{{< youtube GOiULWwWgfg >}}
Persönliches Projekt mit Fokus auf Code und Design. [Den Post-Mortem findest du hier.](http://www.itsnothing.de/post/shiba-rush-post-mortem/)

### Deeper Learning (Ludum Dare 2021)
![Deeper Learning Gif](/img/deeperlearning.gif#center)
Ein Sammel-Spiel rund um Bücher, entstanden in drei Tagen. Ein Experiment in Scope-Management und komplexer Logik unter Zeitdruck.

### Was War Es Einmal (2021)
![Was War Es Einmal Gif](/img/waswareseinmal.gif#center)
Entwickelt für den Manasoup Game Jam (2 Tage). Fokus auf einen schlanken Scope und Mobile-Kompatibilität.

### Mildly Entertaining Games & Archiv
Eine Sammlung älterer Game-Jam-Experimente und Langzeit-Projekte wie *The Side Effects of Life in Space* findest du auf [mildlyentertaining.games](https://mildlyentertaining.games).

![Mildly Entertaining Games Collage](/img/mildlyentertaininggames_collage_bg_color.png#center)

---

### Tech-Stack (Zusammenfassung)
* **Sprachen:** C#, TypeScript, JavaScript, C++ (Arduino)
* **Frameworks:** Unity, React, Angular, Node.js
* **Fokus:** Service-Patterns, Unit-Testing, UI/UX-Implementierung