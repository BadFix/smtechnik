# SMTechnik — Unternehmenswebsite

Website für SMTechnik GmbH & Co. KG in Schwäbisch Hall.

## Online ansehen

https://badfix.github.io/smtechnik/

## Inhalte

Leistungen, Maschinenpark, Unternehmensinformationen, Fotogalerie, Karriere, Ausbildung und Kontakt. Auf der Startseite lassen sich Leistungen direkt aufklappen. Der Bereich für Privatkunden zeigt individuelle Metallarbeiten für Haus und Garten.

Die Anfrage übernimmt die gewählte Leistung oder Fertigungstechnik. Material, Stückzahl und Maße sind optional. Anfragen können als E-Mail-Entwurf geöffnet oder kopiert werden.

## Lokal starten

Node.js ab Version 18; keine zusätzlichen Pakete erforderlich.

```sh
npm start
```

Anschließend http://127.0.0.1:4173/ öffnen. Die vollständige statische Website liegt in `dist/`.

## Veröffentlichung

GitHub Pages veröffentlicht die Inhalte von `dist/` über den Workflow in `.github/workflows/pages.yml`. Änderungen auf `main` aktualisieren die Website automatisch.

## Hinweise zum Projekt

- Das Kontaktformular bereitet eine E-Mail vor. Der Besucher versendet sie selbst in seiner Mail-Anwendung.
- Datenschutz- und Cookieinformationen verweisen auf die bestehende Unternehmenswebsite und sind vor einem endgültigen Firmenauftritt auf den gewählten Betrieb abzustimmen.
- Unternehmensdaten, technische Angaben und Zertifizierungshinweise stammen von der bestehenden Website. Neue Privatkundenleistungen wurden für diesen Entwurf ergänzt.
- Fotos und Firmenlogo bleiben Eigentum der jeweiligen Rechteinhaber. Dieses Repository erteilt keine Lizenz zur Weiterverwendung.

