import { FiTarget, FiHeart, FiAward, FiTrendingUp } from "react-icons/fi";

export default function ChiSiamoPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Chi Siamo</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Studio Biava - Il vostro partner di fiducia per la consulenza automobilistica
          </p>
        </div>
      </section>

      {/* La Nostra Storia */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">La Nostra Storia</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Studio Biava nasce dall'esperienza pluriennale nel settore della consulenza
              automobilistica e dell'autotrasporto. La nostra missione è offrire ai clienti
              un servizio completo, professionale e sempre aggiornato alle normative vigenti.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Grazie alla competenza maturata negli anni, siamo in grado di assistere
              sia privati che aziende in tutte le problematiche relative alla circolazione
              dei mezzi di trasporto, garantendo rapidità, efficienza e massima professionalità.
            </p>
          </div>
        </div>
      </section>

      {/* I Nostri Valori */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            I Nostri Valori
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiTarget size={40} />,
                titolo: "Professionalità",
                descrizione: "Competenza e serietà in ogni pratica che seguiamo",
              },
              {
                icon: <FiHeart size={40} />,
                titolo: "Affidabilità",
                descrizione: "Un partner di fiducia sempre al vostro fianco",
              },
              {
                icon: <FiTrendingUp size={40} />,
                titolo: "Innovazione",
                descrizione: "Aggiornamento costante sulle normative e tecnologie",
              },
              {
                icon: <FiAward size={40} />,
                titolo: "Qualità",
                descrizione: "Servizi di eccellenza per la massima soddisfazione",
              },
            ].map((valore, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full text-primary-600 mb-4">
                  {valore.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {valore.titolo}
                </h3>
                <p className="text-gray-600">
                  {valore.descrizione}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosa Facciamo */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cosa Facciamo</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Studio Biava offre servizi di consulenza specializzata per:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-gray-900 mb-3">Per le Aziende</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Gestione completa flotte aziendali</li>
                  <li>• Consulenza autotrasporto merci</li>
                  <li>• Formazione conducenti (CQC)</li>
                  <li>• Assistenza normativa continua</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-gray-900 mb-3">Per i Privati</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pratiche di immatricolazione</li>
                  <li>• Passaggi di proprietà</li>
                  <li>• Duplicati documenti</li>
                  <li>• Consulenza personalizzata</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-700 text-white section">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Vuoi saperne di più?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contattaci per scoprire come possiamo aiutarti
          </p>
          <a href="/contatti" className="btn bg-white text-primary-700 hover:bg-gray-100">
            Contattaci
          </a>
        </div>
      </section>
    </div>
  );
}
