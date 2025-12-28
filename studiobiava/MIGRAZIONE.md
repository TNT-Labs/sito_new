# 🔄 Guida alla Migrazione Contenuti

Questa guida ti aiuterà a trasferire i contenuti dal vecchio sito Joomla al nuovo sito Next.js + TinaCMS.

## 📋 Panoramica

Il vecchio sito su Joomla contiene:
- Pagine informative (Home, Chi Siamo, Dove Siamo, ecc.)
- Servizi offerti
- Area clienti
- Documenti e modulistica
- Informazioni di contatto

## 🎯 Strategia di Migrazione

### Opzione 1: Migrazione Manuale (Consigliata per Piccoli Siti)

#### Vantaggi
- ✅ Maggiore controllo
- ✅ Opportunità di rivedere e migliorare i contenuti
- ✅ Nessun rischio di errori automatici

#### Processo

1. **Prepara un Inventario**
   - Elenca tutte le pagine del vecchio sito
   - Annota i contenuti principali di ciascuna
   - Salva le immagini necessarie

2. **Esporta i Contenuti**

   **Dal backend Joomla:**
   - Accedi a: http://tuosito.com/administrator
   - Vai su Contenuti → Articoli
   - Per ogni articolo, copia il testo in un file Word/TXT
   - Scarica le immagini associate

3. **Importa nel Nuovo CMS**

   **Via interfaccia TinaCMS:**
   - Accedi a `/admin`
   - Crea nuovi contenuti nelle collezioni appropriate
   - Incolla e formatta i testi
   - Carica le immagini

### Opzione 2: Export/Import Database (Per Siti Grandi)

#### Prerequisiti
- Accesso al database MySQL di Joomla
- Conoscenze base di SQL

#### Steps

1. **Esporta da Joomla**
   ```sql
   -- Esporta contenuti articoli
   SELECT title, introtext, fulltext, created, modified
   FROM jos_content
   WHERE state = 1;

   -- Esporta contatti
   SELECT name, email, telephone, address
   FROM jos_contact_details;
   ```

2. **Converti in Formato TinaCMS**
   - I contenuti di TinaCMS sono in formato MDX (Markdown)
   - Usa uno script di conversione (vedi sotto)

3. **Script di Conversione Base**

   Crea `scripts/migrate.js`:

   ```javascript
   const fs = require('fs');
   const path = require('path');

   // Esempio: converti articoli Joomla in MDX
   function convertToMDX(joomlaArticle) {
     const frontmatter = `---
   titolo: ${joomlaArticle.title}
   data: ${joomlaArticle.created}
   ---
   `;

     const content = joomlaArticle.fulltext || joomlaArticle.introtext;

     return frontmatter + '\n' + content;
   }

   // Esempio di utilizzo
   const articles = [/* i tuoi articoli dal DB */];

   articles.forEach(article => {
     const mdx = convertToMDX(article);
     const filename = article.title.toLowerCase()
       .replace(/[^a-z0-9]+/g, '-') + '.mdx';

     fs.writeFileSync(
       path.join(__dirname, '../content/news', filename),
       mdx
     );
   });
   ```

## 📝 Checklist Migrazione

### Contenuti da Migrare

- [ ] Testi pagine principali (Home, Chi Siamo, ecc.)
- [ ] Descrizioni servizi
- [ ] Informazioni di contatto (indirizzo, telefono, email, orari)
- [ ] Documenti e modulistica PDF
- [ ] Immagini e loghi
- [ ] Link social media
- [ ] Eventuali news o comunicazioni

### Verifiche Post-Migrazione

- [ ] Tutti i testi sono stati copiati
- [ ] Le immagini sono visibili
- [ ] I link funzionano correttamente
- [ ] I contatti sono aggiornati
- [ ] I documenti PDF sono scaricabili
- [ ] Il sito è responsive su mobile
- [ ] Le pagine si caricano velocemente
- [ ] SEO: meta descriptions e titoli sono OK

## 🔍 Recupero Contenuti dal Vecchio Sito

Se non hai accesso al backend Joomla, puoi:

### 1. Web Scraping Manuale
- Apri ogni pagina del vecchio sito
- Seleziona e copia il testo
- Salva le immagini (click destro → Salva immagine)

### 2. Archive.org (Wayback Machine)
- Vai su https://web.archive.org
- Cerca il tuo sito: studiobiava.com
- Naviga nelle versioni archiviate
- Copia i contenuti da lì

### 3. Google Cache
- Cerca su Google: `cache:studiobiava.com`
- Visualizza la versione cached
- Copia i contenuti

## 📂 Organizzazione Contenuti nel Nuovo Sito

```
content/
├── pages/          # Pagine statiche (Chi Siamo, ecc.)
├── servizi/        # Servizi offerti
├── news/           # News e comunicazioni
├── documenti/      # PDF e modulistica
└── settings/       # Impostazioni (contatti, orari)
```

## 🖼️ Migrazione Immagini

1. **Raccogli tutte le immagini**
   - Scarica dal vecchio sito
   - Organizza in cartelle per tipologia

2. **Ottimizza le immagini**
   - Riduci dimensioni (max 1920px larghezza)
   - Comprimi (usa TinyPNG.com)
   - Rinomina con nomi descrittivi

3. **Carica nel nuovo sito**
   - Via TinaCMS: upload durante la creazione contenuti
   - Via FTP: copia in `public/images/`

## 🚀 Piano di Migrazione Consigliato

### Settimana 1: Preparazione
- [ ] Inventario completo contenuti
- [ ] Export testi e immagini
- [ ] Setup nuovo sito locale

### Settimana 2: Migrazione Base
- [ ] Pagine principali (Home, Chi Siamo, Contatti)
- [ ] Servizi principali
- [ ] Impostazioni contatti e orari

### Settimana 3: Contenuti Secondari
- [ ] News e comunicazioni
- [ ] Documenti e modulistica
- [ ] Area clienti (se applicabile)

### Settimana 4: Test e Deploy
- [ ] Test completo funzionalità
- [ ] Verifica mobile e browser
- [ ] SEO check
- [ ] Deploy in produzione

## 💡 Suggerimenti

### Cosa Migliorare Durante la Migrazione

1. **Contenuti**
   - Rivedi e aggiorna testi obsoleti
   - Migliora SEO (keyword, meta descriptions)
   - Aggiungi call-to-action efficaci

2. **Immagini**
   - Sostituisci immagini di bassa qualità
   - Aggiungi alt text descrittivi
   - Usa formati moderni (WebP)

3. **Organizzazione**
   - Raggruppa contenuti correlati
   - Semplifica la navigazione
   - Elimina pagine duplicate o obsolete

### Contenuti da NON Migrare

- Articoli molto vecchi (>3 anni) non più rilevanti
- Immagini di scarsa qualità
- Link esterni non funzionanti
- Informazioni obsolete

## 📞 Assistenza

Se hai bisogno di aiuto con la migrazione:

- Consulta la GUIDA_CMS.md per l'uso del nuovo sistema
- Consulta il README.md per informazioni tecniche
- Contatta il supporto tecnico se necessario

## ✅ Completamento

Una volta completata la migrazione:

1. Testa tutto il sito accuratamente
2. Chiedi a qualcuno di rivedere i contenuti
3. Verifica che tutti i link funzionino
4. Testa su diversi dispositivi e browser
5. Configura redirect dal vecchio al nuovo sito
6. Metti online il nuovo sito

---

**Buona migrazione! 🎉**
