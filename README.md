# Germo Eismann – rätseplahendused tööprotsessidele

Reacti ja Vitega tehtud personaalne veebileht, mis tutvustab tööprotsesside
automatiseerimist, andmelahendusi ja praktilisi sisemisi tööriistu.

## Käivitamine

Vajalik on Node.js 20.19 või uuem (või 22.12+).

```powershell
npm.cmd install
npm.cmd run dev
```

Vite näitab terminalis lokaalse aadressi, tavaliselt `http://localhost:5173`.

## Tootmisversiooni ehitamine

```powershell
npm.cmd run build
npm.cmd run preview
```

Valmis ehitus luuakse kausta `dist`.

## Sisu muutmine

- Lehe sektsioonid ja teenused: `src/App.jsx`
- Projektinäited: `src/data/projects.js`
- Projektikaart: `src/components/ProjectCard.jsx`
- Kujundus: `src/styles.css`
- Avalikud failid ja sertifikaat: `public`

## GitHub Pages

Repo alamteele avaldamisel määra Vite'i baasrada ja käivita avaldamine:

```powershell
$env:VITE_BASE_PATH = "/repo-nimi/"
npm.cmd run deploy
```

Lehel kasutatavad pildid, näidis-PDF ja Pythoni sertifikaat arvestavad Vite'i
`BASE_URL` väärtusega. Seetõttu töötavad lingid nii custom domeenil kui ka GitHub
Pagesi repo alamteel.

## Enne avaldamist

Kontrolli `src/App.jsx` failis olev e-posti aadress üle ja asenda see vajadusel
avaliku kontaktiaadressiga.
