# Germo Eismann - personaalne koduleht

Professionaalne React + Vite koduleht, mis esitleb praktilisi tarkvarasüsteeme,
dokumenditöötlust ja automatiseerimist. Leht ei ole CV ega portfoolio mall.

## Käivitamine

Vajalik on Node.js 18 või uuem.

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

- Dokumenditöötluse moodulid: `src/data/documentModules.js`
- Muud projektid: `src/data/projects.js`
- Päris ekraanipildid: `public/images`
- Lehe sektsioonid: `src/App.jsx`
- Kujundus: `src/styles.css`

Ekraanipildid ei sisalda päris dokumente, paroole ega sisevõrgu aadresse. OCR-i
vaade on jäädvustatud turvalise lokaalse konfiguratsiooniga.

## GitHub Pages

Repo alamteele avaldamisel määra Vite'i baasrada ja käivita avaldamine:

```powershell
$env:VITE_BASE_PATH = "/repo-nimi/"
npm.cmd run deploy
```

Custom domeeni või kasutaja/organisatsiooni Pages repo puhul võib baasrada jääda `/`.

## Enne avaldamist

Asenda `src/App.jsx` failis kontaktiks olev näidisaadress päris e-postiga.
