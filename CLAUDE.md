# CLAUDE.md

Guidance for Claude Code and other AI tools working in this repo.

## 🔐 Secrets, Tokens & API-Keys — Handhabung (verbindlich)

Diese Regeln gelten verbindlich — für Claude/AI-Tools **und** für Menschen. Hintergrund: Im Juni 2026 lagen über mehrere Projekte verstreut Live-Credentials im Klartext in Git (service_role-Keys, DB-Passwörter, Stripe `sk_live`, Clerk `sk_live`, GitHub-PATs, GCP-Private-Keys, AI-Provider-Keys u.a.). Das darf **nie wieder** passieren.

### Die 4 goldenen Regeln
1. **Secrets gehören NIE ins Git-Repo** — kein `sk_live`, service_role-Key, DB-Passwort, PAT, Private-Key oder API-Key — weder in `.env*`, `.bat`/`.ps1`/`.sh`-Skripten, `.mcp.json`, JSON-Configs, Markdown-Docs, Tests noch Kommentaren. Auch nicht „kurz zum Testen".
2. **Secrets gehören NIE in den Chat / zu einem AI-Tool** — der Wert landet im Transcript und gilt damit als **kompromittiert**. Werte werden per CLI in den Secret-Store geschrieben (ohne Chat-Wert) oder vom Menschen direkt im Provider-UI eingetragen.
3. **Löschen ≠ Entwerten** — ein geleakter Key wird durch Datei-Löschen **nicht** ungültig. Nur **Rotation/Revoke beim Provider** entwertet ihn. Datei-Cleanup ist nur Hygiene.
4. **Secrets leben in Secret-Stores, nicht im Code** — Vercel/Netlify Env Vars, GitHub Actions **Secrets** (nicht Variables — die sind Klartext!), Supabase Function Secrets, Cloud Secret Manager. Im Repo steht höchstens eine `.env.example` mit **Platzhaltern**.

### Dateien, die NIE committed werden dürfen (gitignore-Pflicht)
`.env`, `.env.local`, `.env.*.local`, `*.mcp.json` (mit echten Werten), `set-*-env.bat`/`.ps1`, Service-Account-JSONs (`gsc.json`, `*-key.json`), `*.pem`/`*.key`, jedes Skript mit hardcodierten `sk_live`/`whsec`/`ghp_`/`sbp_`/`eyJ…`-Werten. `.gitignore` bei jedem neuen Repo **vor** dem ersten Commit prüfen.

### Wenn ein Secret leakt — Playbook
1. **Sofort rotieren/revoken** beim Provider (nicht zuerst die Datei löschen).
2. Neuen Wert in den **Secret-Store** (per UI/CLI, nie in den Chat).
3. **Verifizieren**, dass App/CI mit dem neuen Wert läuft, **bevor** der alte expired wird.
4. **Datei aus Git** entfernen (`git rm --cached` für getrackte `.env*`, sonst `git rm`) + gitignoren, per PR.
5. History-Scrub (filter-repo/BFG) optional/sekundär — nach Schritt 1 ist der Wert ohnehin tot.

### Pre-Commit-Secret-Scan
Vor jedem Commit die staged Changes auf Secret-Muster prüfen: `sk_live`, `sk-ant-`, `sk-proj-`, `ghp_`, `sbp_`, `whsec_`, `service_role`, `eyJ…`-JWTs, `-----BEGIN … PRIVATE KEY-----`, `AIza…`, `GOCSPX-`. Treffer → **nicht committen**, Wert in einen Secret-Store auslagern.

### ⛔ Alt-Verstoß entdeckt → STOPPEN & MELDEN
Wird **während irgendeiner Arbeit** bemerkt, dass eine dieser Regeln in der Vergangenheit missachtet wurde — ein **Altbestand an Sicherheitslücken** (committed Secret, geleakter Key, offener anon-/public-Zugriff, fehlende Auth/RLS, hardcodiertes Credential in einer Binary) — dann gilt:
1. **NICHT stillschweigend weiterarbeiten** und die Lücke liegen lassen.
2. **Sofort aufzeigen:** was, wo (Datei/Tabelle/Repo), welche Regel verletzt, wie kritisch (Exploit-Szenario in einem Satz).
3. **Konkreten Fix-Vorschlag** machen: Schritte, Reihenfolge, was dabei bricht, sofort gefahrlos vs. gestaffelt.
4. **User aktiv entscheiden lassen** (sofort fixen / Backlog / bewusst zurückstellen) — die Entscheidung wird getroffen, **nie durch Schweigen**.

Gilt unabhängig davon, ob die Lücke zur aktuellen Aufgabe gehört. Ein gefundenes Leck wird **nie** kommentarlos übergangen.
