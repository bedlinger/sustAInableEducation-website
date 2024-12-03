---
title: Fortschrittsbericht KW49
date: 03.12.2024
description: Bericht über die Fortschritte in den Bereichen Frontend, Backend, KI-Story und KI-Quiz für die Kalenderwoche 49, einschließlich der Erstellung von Konzepten für die Bereiche KI-Story und KI-Quiz, der Implementierung von neuen Backend-Funktionen und der Entwicklung des Frontends.
---
## Ausgangslage

Dieser Bericht behandelt die Fortschritte im Zeitraum vom 19.11.2024 bis 03.12.2024 in den Bereichen Frontend, Backend, KI-Story und KI-Quiz. Im Frontend wurde die Entwicklungsumgebung eingerichtet und erste Funktionen implementiert. Im Backend wurden neue Services und Endpunkte zur Verwaltung von Lernumgebungen eingeführt. Für KI-Story wurde das Feedback aus der Prototyp-Präsentation ausgewertet und mit der Implementierung von Konfigurationsfunktionen begonnen. Im Bereich KI-Quiz wurde die Literatursuche verfeinert und erste Konzepte für interaktive Quiz-Prompts entwickelt.

## Themenstellung Frontend

Die Arbeiten am Frontend haben begonnen. Zunächst wurde die Entwicklungsumgebung erfolgreich eingerichtet, um eine stabile Basis für die Umsetzung zu schaffen. Anschließend wurde mit der Implementierung der ersten Funktionalitäten begonnen, wobei ein besonderer Fokus auf einer benutzerfreundlichen und intuitiven Oberfläche liegt.

## Themenstellung Backend

Die Backend-Entwicklung hat wesentliche Fortschritte gemacht. Der anonymisierte Username Generator des Bereichs KI-Quiz wurde als Service implementiert, der neuen Benutzern automatisch zufällige Benutzernamen zuweist. Für die Verwaltung von Lernumgebungen wurden mehrere Endpunkte erstellt:

- Umgebungen können mit einem zeitlich begrenzten Zugangscode geöffnet werden, der von Nutzern verwendet wird, um beizutreten oder diese zu verlassen.
- Eine SignalR-Integration ermöglicht Echtzeitkommunikation und prüft Zugriffsrechte der Nutzer. Benutzerstatus (online/offline) wird dabei dynamisch aktualisiert.
- Pro Umgebung werden Gruppen eingerichtet, die gezielte Nachrichtenübermittlung innerhalb der Gruppe erlauben.

Zusätzlich wurde eine Schnittstelle für die Kommunikation zwischen Backend und KI vorbereitet. Aktuell simuliert ein Testservice Wartezeiten und generiert Platzhalternachrichten. Eine echte Implementierung zur API-Kommunikation mit der KI ist geplant.

Die Funktionalität wurde mit Postman getestet, insbesondere die Websocket-Verbindungen und Authentifizierungen. Eine umfassende Dokumentation der SignalR-Kommunikation wurde ebenfalls erstellt

## Themenstellung KI-Story

Nach dem präsentieren des Prototypen für den Themenbereich KI-Story, wurde das gesammelte Feedback, welches die Proband*innen gegeben haben, analysiert. Da die Besucher nur begrenzt Zeit hatten, testeten nur wenige den Prototypen. Die Probanden (14–15 Jahre alt) fielen grundsätzlich in die Zielgruppe, jedoch lassen sich keine Aussagen über Technikaffinität oder Nachhaltigkeitsinteresse treffen. Die Bewertung der Kriterien ergab folgende NPS-Werte:

- Immersivität: -22%
- Verständlichkeit: 34%
- Interaktivität: 11%
- Thematische Relevanz: -11%
- Lerneffekt: -23%

Während die Verständlichkeit positiv bewertet wurde, schnitten die anderen Kriterien eher schlecht ab. Mögliche Gründe sind die Begrenzungen des aktuellen Modells (Llama 3.1) sowie unpräzise Prompts. Diese Aspekte sollen im weiteren Entwicklungsprozess durch bessere Prompts und leistungsfähigere Modelle optimiert und erneut getestet werden. Positiv ist, dass der aufgesetzte Server sich als funktional erwies und im Entwicklungsprozess weiterverwendet werden kann. Allerdings reicht seine Rechenleistung nicht aus, um ein besseres Modell zu betreiben und das Endprodukt zu unterstützen.

Auf die Auswertung des Feedbacks folgte die eigentliche Umsetzung der geplanten Funktionen im Bereich KI-Story. Dies hat begonnen mit der Visualisierung des gesamten Ablaufs, mittels eines Aktivitätsdiagramms. Dieses dient als Grundlage für die Implementierung der einzelnen Funktionen und soll die Interaktionen zwischen den Komponenten verdeutlichen.

![Aktivitätsdiagramm KI-Story](img/kw49/Activity_Diagram_KI-Story.png)

Das erste Feature welches umgesetzt wird ist das Aufnehmen einer Konfiguration einer Lernumgebung (/LF205/). Hierfür wurde bereits ein Konzept verfasst, welches die notwendigen Konfigurationen beschreibt. Die Konfiguration der Lernumgebung umfasst Themenwahl, Dauer, Kreativität und optionales Zielgruppen-Targeting. Um unangemessene Inhalte zu vermeiden, werden vorgefertigte Themen (17 SDGs) genutzt oder Lückentexte mit KI-basierter Prüfung eingesetzt. Die Dauer wird durch Entscheidungspunkte gesteuert, unterstützt von Zeitschätzungen, um dem Benutzer eine grobe Idee für die Dauer zu geben. Kreativitätsparameter wie Temperature und Top-P werden über benutzerfreundliche Voreinstellungen angepasst. Zielgruppen können definiert werden, um Stil und Inhalt der KI-generierten Geschichten anzupassen. Ein Aktivitätsdiagramm visualisiert auch hier den Ablauf der Konfiguration und bildet die Grundlage für die Entwicklung des Features.

![Aktivitätsdiagramm Konfiguration Lernumgebung](img/kw49/Activity_Diagram_LF205_Konfiguration_aufnehmen.png)

## Themenstellung KI-Quiz

Im Bereich KI-Quiz wurden die bisherigen Ergebnisse der Literatursuche weiter verfeinert, um die darauffolgende State-of-the-Art-Analyse anzufertigen. Parallel dazu wurde ein Konzept für die Gestaltung der Prompts entwickelt, die es ermöglichen werden, ein dynamisches und lehrreiches Quiz über eine durchlebte Lernumgebung mit der Unterstützung von KI zu erstellen.

## Fazit

Die Entwicklungen der letzten beiden Wochen zeigen Fortschritte in allen Bereichen. Mit der geschaffenen Basis in Frontend, Backend und beiden KI-Bereichen ist das Projekt gut für die nächsten Schritte vorbereitet. Der nächste Meilenstein ist am 10.12.2024 und betrifft die Bereiche Frontend und KI-Quiz.

## Kommentar des  Teams

Nachdem im November alle Schularbeiten und großen Tests abgeschlossen wurden, kann nun unser Fokus fast vollständig auf das Projekt gelegt werden.