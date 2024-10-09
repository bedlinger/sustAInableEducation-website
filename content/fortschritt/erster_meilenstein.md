---
title: Erster Meilenstein
date: 24.09.2024
description: Bericht der Ergebnisse der Machbarkeitsstudien für die Frontend-, Backend- und KI-Komponenten des Projekts und beschreibt die getroffenen Technologieentscheidungen.
---

## Ausgangslage

Schon am Ende der Projektwoche wurde begonnen die Machbarkeitsstudien zu erstellen, um so die jeweiligen Technologien zu fixieren. Dies war auch der erste Meilenstein, welcher einen reibungslosen Start in die ermöglichen sollte.

## Machbarkeitsstudie Frontend

Im Rahmen der Machbarkeitsanalyse für das Frontend wurde intensiv untersucht, welche Technologien die Benutzeroberfläche für die Web-App am besten unterstützen. Nach Abwägung mehrerer Optionen wie Nuxt, Next.js, SvelteKit und Angular wurde sich für Nuxt entschieden, da es durch die enge Anbindung an Vue.js sowie das serverseitige Rendering optimale Ladezeiten und Benutzerfreundlichkeit gewährleistet. Für die Gestaltung und Implementierung von UI-Komponenten fiel die Wahl auf PrimeVue, welches mit seiner Vielseitigkeit und der Möglichkeit, Komponenten effizient zu integrieren, überzeugt. Ergänzt wird das Styling der Website durch TailwindCSS, das durch seine einfache Nutzbarkeit und Flexibilität eine zügige Entwicklung ermöglicht

## Machbarkeitsstudie Backend

Für das Backend wurde eine umfassende Machbarkeitsstudie erstellt, die sich auf die Evaluierung geeigneter Technologien konzentriert. Nach einer Analyse verschiedener Backend-Frameworks, darunter ASP.NET, Express, Flask und Django, fiel die Wahl auf ASP.NET aufgrund seiner hohen Skalierbarkeit, Performance und der starken Integration in das Microsoft-Ökosystem. Für das Datenbanksystem wurde Microsoft SQL Server festgelegt, da es optimal mit dem ASP.NET-Framework und dem zugehörigen Entity Framework zusammenarbeitet. Zudem wurde beschlossen, die Benutzer-Authentifizierung über externe Dienste, insbesondere Microsoft, zu realisieren, um die Integration zu erleichtern und die Benutzerfreundlichkeit zu erhöhen.

## Machbarkeitsstudie KI-Story

Die Machbarkeitsstudie zur KI-gestützten Story-Generierung diente dazu, die optimale Lösung zur Erstellung immersiver Geschichten mit dem Schwerpunkt Nachhaltigkeit zu finden. Verschiedene große Sprachmodelle (LLMs) wurden untersucht, um herauszufinden, welches Modell nicht nur eine hohe Qualität bei der Erstellung von Inhalten bietet, sondern auch Entscheidungspunkte in die Geschichten einbindet, die den Verlauf beeinflussen. Ein zentrales Kriterium war dabei das Wissen über Nachhaltigkeitsthemen, die Anpassungsfähigkeit des Modells sowie die Fähigkeit, die Ergebnisse der Geschichten auswerten zu können.

Nach einem umfassenden Test mehrerer LLMs – darunter GPT-4o, Claude 3.5 Sonnet, Mistral Large 2, Gemini 1.5 Pro, Gemma 2 und Llama 3.1 – zeigte sich, dass Gemini 1.5 Pro aufgrund seiner Vielseitigkeit und der Fähigkeit, komplexe Entscheidungspunkte detailliert darzustellen, die beste Option ist. Bei der Story-Generierung konnten verschiedene nachhaltigkeitsbezogene Szenarien, wie Recycling, Energieeinsparungen und Stadtentwicklung, erfolgreich mit klaren Entscheidungen und deren Auswirkungen umgesetzt werden. Das Modell erwies sich als anpassbar und flexibel, jedoch bleibt die Frage, ob eine zusätzliche Schulung des Modells mit fachspezifischen Inhalten notwendig sein wird, um noch tieferes Wissen zu Nachhaltigkeit zu gewährleisten.

## Machbarkeitsstudie KI-Quiz

Im Rahmen der Machbarkeitsstudie zur KI-gestützten Quiz-Generierung wurde untersucht, welches Sprachmodell in der Lage ist, inhaltlich präzise und immersive Quizfragen zu erstellen, die auf den KI-generierten Geschichten basieren. Neben der Bewertung verschiedener Fragetypen (z.B. Ja-Nein-, Multiple-Choice-Fragen) wurde besonderer Wert auf die inhaltliche Qualität der Quizze und ihre Anpassungsfähigkeit an die generierten Geschichten gelegt. Nach der Evaluation von Modellen wie GPT-4o, Claude 3.5 Sonnet, Mistral Large 2, Gemini 1.5 Pro und Llama 3.1 zeigte sich Mistral Large 2 als die geeignetste Option. Es ermöglichte nicht nur die Erstellung sinnvoller und ansprechender Fragen, sondern integrierte auch Entscheidungspunkte aus der Geschichte, was zu einer höheren Interaktivität führte. Dabei wurde auch die Wichtigkeit einer benutzerfreundlichen und ethisch verantwortungsvollen Namensgenerierung für Benutzerkonten analysiert, um die Anonymität und Nachhaltigkeitsorientierung zu wahren​.

## Fazit

Die Machbarkeitsstudien haben geholfen, die optimalen Technologien für die Umsetzung des Diplomprojekts zu ermitteln. Durch die intensive Prüfung der verschiedenen Optionen konnten der erste Meilenstein erfolgreich erreicht werden. Die Entscheidungen zugunsten von Nuxt, PrimeVue, TailwindCSS, ASP.NET und Microsoft SQL Server bilden die Grundlage für die weitere Entwicklung und Umsetzung. Allerdings stellt sich noch die Frage, welches LLM zum Einsatz kommen soll, da sich in den Bereichen KI-Story und KI-Quiz nicht dieselben Modelle als die beste Option herausgestellt haben. Es wurde sich daher für Llama 3.1 entschieden, da es in beiden Bereichen gute Resultate lieferte.

## Kommentar des Teams

Wir sind zuversichtlich, dass wir mit diesen Technologien und Lösungen unsere Ziele erreichen und unser Projekt zu einem erfolgreichen Abschluss bringen können. Jetzt können wir mit der konkreten Entwicklung beginnen. Der nächste Meilenstein ist am 15.10. fällig, in dem das Mockup für das Frontend erstellt, die Datenbank für das Backend eingerichtet und die Erstellung der anonymen Benutzernamen abgeschlossen werden soll.