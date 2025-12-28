# 📘 Guida all'Uso del CMS - Studio Biava

Questa guida ti aiuterà a gestire autonomamente i contenuti del sito web di Studio Biava.

## 🎯 Indice

1. [Accesso al CMS](#accesso-al-cms)
2. [Interfaccia Principale](#interfaccia-principale)
3. [Gestione Servizi](#gestione-servizi)
4. [Gestione News](#gestione-news)
5. [Gestione Documenti](#gestione-documenti)
6. [Impostazioni Globali](#impostazioni-globali)
7. [Consigli Utili](#consigli-utili)

---

## 🔐 Accesso al CMS

### Come Accedere

1. Apri il browser e vai su: **https://tuosito.it/admin**
2. L'interfaccia di TinaCMS si aprirà automaticamente
3. Non serve login in modalità locale (sviluppo)
4. In produzione, configura l'autenticazione secondo le tue necessità

---

## 🖥️ Interfaccia Principale

### Elementi dell'Interfaccia

- **Sidebar Sinistra**: Menu con tutte le collezioni disponibili
- **Area Centrale**: Editor dei contenuti
- **Pannello Destro**: Anteprima in tempo reale (quando disponibile)
- **Barra Superiore**: Pulsanti Salva, Annulla, ecc.

### Collezioni Disponibili

1. **Pagine** - Contenuti delle pagine statiche
2. **Servizi** - Servizi offerti
3. **News e Aggiornamenti** - Notizie e comunicazioni
4. **Documenti e Modulistica** - File scaricabili
5. **Impostazioni Sito** - Configurazioni globali

---

## 🛠️ Gestione Servizi

### Creare un Nuovo Servizio

1. **Accedi al CMS** → Clicca su "Servizi" nella sidebar
2. **Clicca** su "Create New Servizio"
3. **Compila i campi**:
   - **Titolo Servizio**: Nome del servizio (es: "Autotrasporto Merci")
   - **URL Slug**: Identificativo URL (es: "autotrasporto-merci")
   - **Descrizione Breve**: Max 2-3 righe per anteprima
   - **Icona**: Carica un'icona o immagine rappresentativa
   - **Descrizione Completa**: Testo dettagliato con formattazione
   - **In Evidenza**: Spunta per mostrare in homepage
4. **Salva** le modifiche

### Modificare un Servizio Esistente

1. Vai su "Servizi"
2. Seleziona il servizio dall'elenco
3. Modifica i campi necessari
4. Clicca "Save"

### Eliminare un Servizio

1. Seleziona il servizio
2. Clicca sul pulsante "Delete" (cestino)
3. Conferma l'eliminazione

---

## 📰 Gestione News

### Pubblicare una Nuova News

1. **Vai su** "News e Aggiornamenti"
2. **Clicca** "Create New News"
3. **Compila**:
   - **Titolo**: Titolo dell'articolo
   - **Data Pubblicazione**: Seleziona data e ora
   - **Categoria**: Scegli tra Normativa, Servizio, Comunicazione, Altro
   - **Immagine**: Carica un'immagine (opzionale ma consigliata)
   - **Contenuto**: Scrivi l'articolo usando l'editor rich text
4. **Salva**

### Editor Rich Text

L'editor ti permette di formattare il testo:

- **Grassetto**: Ctrl/Cmd + B
- **Corsivo**: Ctrl/Cmd + I
- **Titoli**: H1, H2, H3, ecc.
- **Liste**: Puntate o numerate
- **Link**: Seleziona il testo e clicca sull'icona link
- **Immagini**: Carica direttamente nell'editor

### Best Practices per le News

- ✅ Usa immagini di alta qualità
- ✅ Scrivi titoli chiari e concisi
- ✅ Categorizza correttamente
- ✅ Mantieni il testo leggibile (paragrafi brevi)
- ✅ Aggiungi link dove necessario

---

## 📄 Gestione Documenti

### Aggiungere un Documento

1. Vai su "Documenti e Modulistica"
2. Clicca "Create New Documento"
3. Compila:
   - **Titolo Documento**: Nome descrittivo
   - **Descrizione**: Breve spiegazione del documento
   - **Categoria**: Modulistica, Normativa, Guide, ecc.
   - **URL File**: Carica il file o inserisci l'URL
   - **Data Aggiornamento**: Data dell'ultima modifica
4. Salva

### Tipi di File Consigliati

- **PDF**: Per moduli, guide, normative
- **DOC/DOCX**: Per documenti modificabili
- **Excel**: Per tabelle e fogli di calcolo

### Organizzazione

Usa le categorie per organizzare i documenti:
- **Modulistica**: Moduli da compilare
- **Normativa**: Leggi, decreti, regolamenti
- **Guide**: Guide operative
- **Circolari**: Comunicazioni ufficiali

---

## ⚙️ Impostazioni Globali

### Aggiornare Contatti e Informazioni

1. Vai su "Impostazioni Sito"
2. Troverai sezioni per:
   - **Contatti** (indirizzo, telefono, email, PEC)
   - **Orari** (orari di apertura e note)
   - **Social Media** (link Facebook, LinkedIn, ecc.)
3. Modifica i campi necessari
4. Salva

### Cosa Modificare Quando

- **Cambio Indirizzo**: Aggiorna "Contatti → Indirizzo"
- **Nuovo Numero**: Aggiorna "Contatti → Telefono"
- **Modifica Orari**: Aggiorna "Orari"
- **Nuovi Social**: Aggiungi link in "Social Media"

---

## 💡 Consigli Utili

### SEO (Ottimizzazione per Motori di Ricerca)

- Usa titoli descrittivi
- Scrivi descrizioni brevi ma informative
- Usa parole chiave pertinenti naturalmente
- Aggiungi testo alternativo alle immagini

### Immagini

- **Formato**: JPG per foto, PNG per loghi/icone
- **Dimensioni**: Massimo 1920px di larghezza
- **Peso**: Comprimi le immagini (max 500KB)
- **Nome File**: Usa nomi descrittivi (es: "servizio-cqc.jpg")

### Contenuti

- ✅ Scrivi in modo chiaro e professionale
- ✅ Usa paragrafi brevi
- ✅ Evidenzia i punti chiave in grassetto
- ✅ Aggiungi link utili
- ✅ Mantieni i contenuti aggiornati
- ✅ Rileggi sempre prima di pubblicare

### Backup

- I contenuti sono salvati automaticamente su Git
- In caso di errore, puoi ripristinare versioni precedenti
- Consigliamo backup periodici del database

### Problemi Comuni

**Il CMS non si apre**
- Controlla la connessione internet
- Svuota la cache del browser
- Prova con un browser diverso

**Le modifiche non si vedono**
- Clicca sempre "Save"
- Ricarica la pagina con Ctrl+F5
- Attendi qualche minuto per il deploy

**Upload file non funziona**
- Verifica la dimensione (max 10MB)
- Controlla il formato del file
- Prova a rinominare il file senza spazi

---

## 📞 Supporto

Per assistenza tecnica:

- **Email Supporto**: [inserire email supporto tecnico]
- **Telefono**: [inserire numero]
- **Documentazione TinaCMS**: https://tina.io/docs

---

## 🔄 Aggiornamenti della Guida

**Ultima modifica**: Gennaio 2024

Questa guida viene aggiornata regolarmente. Controlla periodicamente per nuove funzionalità e suggerimenti.

---

**Buon lavoro con il tuo nuovo sito! 🚀**
