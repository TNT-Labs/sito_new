# Studio Biava - Sito Web Moderno con CMS

Sito web moderno per Studio Biava - Consulenza Automobilistica, costruito con Next.js 15 e TinaCMS.

## 🚀 Caratteristiche

- ✅ **Next.js 15** - Framework React moderno e performante
- ✅ **TinaCMS** - CMS headless open-source con editor visuale
- ✅ **TypeScript** - Codice type-safe e manutenibile
- ✅ **Tailwind CSS** - Design moderno e responsive
- ✅ **SEO Ottimizzato** - Meta tags e struttura ottimale
- ✅ **Performance** - Caricamento veloce e ottimizzato
- ✅ **Mobile-First** - Perfettamente responsive su tutti i dispositivi

## 📋 Prerequisiti

- Node.js 18.0 o superiore
- npm o yarn

## 🛠️ Installazione

1. **Clona il repository**
   ```bash
   git clone <repository-url>
   cd studiobiava
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Configura le variabili d'ambiente**
   ```bash
   cp .env.example .env
   ```

   Modifica il file `.env` con le tue configurazioni.

4. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

5. **Apri il browser**
   - Sito: http://localhost:3000
   - Admin CMS: http://localhost:3000/admin

## 📁 Struttura del Progetto

```
studiobiava/
├── app/                    # Pagine Next.js (App Router)
│   ├── page.tsx           # Homepage
│   ├── servizi/           # Pagina Servizi
│   ├── chi-siamo/         # Pagina Chi Siamo
│   ├── contatti/          # Pagina Contatti
│   ├── documenti/         # Pagina Documenti
│   ├── news/              # Pagina News
│   └── area-clienti/      # Area Clienti
├── components/            # Componenti React riutilizzabili
│   └── layout/           # Header, Footer
├── content/              # Contenuti gestiti da TinaCMS
│   ├── pages/           # Pagine
│   ├── servizi/         # Servizi
│   ├── news/            # News e aggiornamenti
│   ├── documenti/       # Documenti e modulistica
│   └── settings/        # Impostazioni globali
├── tina/                # Configurazione TinaCMS
│   └── config.ts       # Schema delle collezioni
└── public/             # File statici
    ├── images/         # Immagini
    └── uploads/        # Upload dal CMS
```

## 🎨 Utilizzo del CMS

### Accesso all'Admin

1. Avvia il server di sviluppo: `npm run dev`
2. Vai su: http://localhost:3000/admin
3. Seleziona una collezione dal menu laterale
4. Crea, modifica o elimina contenuti

### Collezioni Disponibili

- **Pagine** - Contenuti delle pagine statiche
- **Servizi** - Servizi offerti dallo studio
- **News** - Notizie e aggiornamenti
- **Documenti** - Modulistica e documenti scaricabili
- **Impostazioni** - Configurazioni globali (contatti, orari, social)

### Gestione Contenuti

#### Aggiungere un Nuovo Servizio

1. Vai su `/admin`
2. Seleziona "Servizi" dalla sidebar
3. Clicca "Create New Servizio"
4. Compila i campi:
   - Titolo Servizio
   - URL Slug (es: autotrasporto-merci)
   - Descrizione Breve
   - Icona (opzionale)
   - Descrizione Completa
   - In Evidenza (checkbox)
5. Salva

#### Pubblicare una News

1. Vai su `/admin`
2. Seleziona "News e Aggiornamenti"
3. Clicca "Create New News"
4. Compila i campi necessari
5. Salva

#### Aggiornare Contatti e Orari

1. Vai su `/admin`
2. Seleziona "Impostazioni Sito"
3. Modifica i dati di contatto, orari o social media
4. Salva

## 🚀 Deploy

### Vercel (Consigliato)

1. Installa Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Configura le variabili d'ambiente su Vercel Dashboard

### Build Manuale

```bash
npm run build
npm run start
```

## 📝 Personalizzazione

### Colori del Brand

Modifica i colori in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Colore primario
  },
  accent: {
    // Colore accento
  }
}
```

### Contenuti Predefiniti

I contenuti di esempio sono in `content/`. Modificali o eliminali secondo necessità.

### Logo

Sostituisci il logo placeholder in `components/layout/Header.tsx` con il tuo logo reale.

## 🔧 Script Disponibili

- `npm run dev` - Avvia server di sviluppo
- `npm run build` - Build per produzione
- `npm run start` - Avvia server di produzione
- `npm run lint` - Controlla errori di linting

## 📊 Migrazione Contenuti dal Vecchio Sito

Per migrare i contenuti dal vecchio sito Joomla:

1. Esporta i contenuti dal database Joomla
2. Usa gli script di migrazione (se disponibili) oppure
3. Copia manualmente i contenuti usando il CMS

## 🆘 Supporto

Per domande o problemi:

- Email: info@studiobiava.com
- Documentazione TinaCMS: https://tina.io/docs
- Documentazione Next.js: https://nextjs.org/docs

## 📄 Licenza

Copyright © 2024 Studio Biava. Tutti i diritti riservati.

## 🔄 Aggiornamenti

Per aggiornare le dipendenze:

```bash
npm update
```

Per aggiornamenti maggiori, consulta sempre il changelog delle librerie.
