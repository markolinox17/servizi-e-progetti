# Sito JEVE — Servizi e progetti

Cartella pronta per la pubblicazione. Aprire `index.html` in un browser, oppure
caricare l'intero contenuto di questa cartella nella radice di un repository
GitHub e attivare GitHub Pages (Settings → Pages → Branch: main, folder: / root).

## Struttura

    index.html                    pagina Servizi e progetti
    report-automotive.html        pagina report Automotive
    report-data-centre.html       pagina report Data Centre
    report-farmaceutico.html      pagina report Mercato farmaceutico
    report-food-beverage.html     pagina report Food & Beverage (plant-based)
    src/style.css                 tutti gli stili
    src/main.js                   contenuti e interazioni
    assets/                       logo, illustrazioni e (da aggiungere) i PDF

## Sezione recensioni

Non è inclusa in questa versione: sta nello zip separato "sezione-recensioni",
con le istruzioni per reinserirla quando le testimonianze saranno pronte.

## Inserire i quattro PDF

I pulsanti "Apri il report" puntano già ai file PDF. Manca solo il file.

1. Rinominare i quattro PDF esattamente così (minuscole, senza spazi né accenti):

       report-automotive.pdf
       report-data-centre.pdf
       report-farmaceutico.pdf
       report-food-beverage.pdf

2. Copiarli dentro la cartella `assets/`.
3. Fare commit e push: su GitHub Pages i pulsanti funzionano subito, senza
   modificare alcun file HTML.

Verifica: aprire `report-automotive.html` e premere "Apri il report". Se si
apre una pagina di errore 404, il nome del file non corrisponde a quello
dell'elenco (attenzione a `data-centre`, non `data-center`, e a maiuscole o
`.PDF`: su GitHub i nomi sono sensibili alle maiuscole).

Ogni pagina report ha due pulsanti "Apri il report" (in alto e in fondo) e
puntano allo stesso file: aggiungendo il PDF si attivano entrambi.

Nota: se un PDF supera i 50 MB, GitHub rifiuta il push. In quel caso conviene
tenere quel report su un link esterno (Drive, sito) e sostituire l'indirizzo nei
due pulsanti della pagina corrispondente.
