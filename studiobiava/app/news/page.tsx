import { FiCalendar, FiTag, FiArrowRight } from "react-icons/fi";

const news = [
  {
    titolo: "Nuove Normative Autotrasporto 2024",
    data: "15 Gennaio 2024",
    categoria: "Normativa",
    estratto: "Entrano in vigore le nuove disposizioni europee sull'autotrasporto merci. Scopri cosa cambia per la tua azienda.",
    immagine: "/images/news-1.jpg",
  },
  {
    titolo: "Rinnovo CQC: Scadenze e Procedure",
    data: "10 Gennaio 2024",
    categoria: "Servizio",
    estratto: "Tutto quello che devi sapere sul rinnovo della Carta di Qualificazione del Conducente nel 2024.",
    immagine: "/images/news-2.jpg",
  },
  {
    titolo: "Aggiornamenti Tariffa Autotrasportatori",
    data: "5 Gennaio 2024",
    categoria: "Comunicazione",
    estratto: "Pubblicate le nuove tariffe di riferimento per il settore dell'autotrasporto merci per conto terzi.",
    immagine: "/images/news-3.jpg",
  },
  {
    titolo: "Verifiche Tecniche: Novità 2024",
    data: "28 Dicembre 2023",
    categoria: "Normativa",
    estratto: "Modifiche alle procedure di verifica tecnica per rimorchi e semirimorchi. Ecco cosa sapere.",
    immagine: "/images/news-4.jpg",
  },
  {
    titolo: "Sportello Clienti: Nuovi Orari",
    data: "20 Dicembre 2023",
    categoria: "Comunicazione",
    estratto: "A partire da gennaio 2024 il nostro sportello sarà aperto con i nuovi orari. Scopri quando trovarci.",
    immagine: "/images/news-5.jpg",
  },
  {
    titolo: "Corso di Formazione CQC - Febbraio 2024",
    data: "15 Dicembre 2023",
    categoria: "Servizio",
    estratto: "Aperte le iscrizioni per il corso di formazione periodica CQC in programma a febbraio 2024.",
    immagine: "/images/news-6.jpg",
  },
];

export default function NewsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News e Aggiornamenti</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Resta aggiornato sulle ultime novità del settore autotrasporto e sui nostri servizi
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filtri (opzionali - possono essere implementati in seguito) */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium">
              Tutte
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
              Normativa
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
              Servizi
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
              Comunicazioni
            </button>
          </div>

          {/* Lista News */}
          <div className="grid gap-8">
            {news.map((articolo, index) => (
              <article key={index} className="card hover:shadow-2xl transition-shadow">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">Immagine</span>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <span className="flex items-center gap-1 text-gray-600">
                        <FiCalendar size={14} />
                        {articolo.data}
                      </span>
                      <span className="flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full">
                        <FiTag size={14} />
                        {articolo.categoria}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {articolo.titolo}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {articolo.estratto}
                    </p>
                    <button className="text-primary-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      Leggi di più <FiArrowRight />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination (placeholder) */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium">
              1
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
              2
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
              3
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gray-50 section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Non perdere gli aggiornamenti
            </h2>
            <p className="text-gray-600 mb-6">
              Iscriviti alla nostra newsletter per ricevere le ultime novità
              direttamente nella tua casella email
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                Iscriviti Ora
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
