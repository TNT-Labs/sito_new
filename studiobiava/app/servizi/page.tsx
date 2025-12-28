import { FiTruck, FiAward, FiFileText, FiCheckCircle, FiClipboard, FiBook } from "react-icons/fi";

const servizi = [
  {
    icon: <FiTruck size={40} />,
    titolo: "Autotrasporto Merci per Conto Terzi",
    descrizione: "Consulenza completa per aziende di autotrasporto",
    dettagli: [
      "Iscrizione all'Albo degli Autotrasportatori",
      "Rinnovo annuale dell'iscrizione",
      "Aggiornamento dati aziendali",
      "Variazioni flotta aziendale",
      "Consulenza normativa settore autotrasporto",
    ],
  },
  {
    icon: <FiAward size={40} />,
    titolo: "Carta di Qualificazione del Conducente (CQC)",
    descrizione: "Pratiche per il rilascio e rinnovo della CQC",
    dettagli: [
      "Rilascio CQC merci e persone",
      "Rinnovo quinquennale CQC",
      "Conversione patenti estere",
      "Duplicati e aggiornamenti",
      "Corsi di formazione periodica",
    ],
  },
  {
    icon: <FiFileText size={40} />,
    titolo: "Pratiche di Immatricolazione e Trasferimento",
    descrizione: "Gestione completa di tutte le pratiche automobilistiche",
    dettagli: [
      "Immatricolazione veicoli nuovi",
      "Passaggi di proprietà",
      "Radiazioni e demolizioni",
      "Targhe prova",
      "Duplicati carta di circolazione",
    ],
  },
  {
    icon: <FiCheckCircle size={40} />,
    titolo: "Verifiche Tecniche Rimorchi",
    descrizione: "Verifiche periodiche per rimorchi fino a 3,5 tonnellate",
    dettagli: [
      "Verifiche tecniche periodiche",
      "Controllo documentazione tecnica",
      "Assistenza pre-verifica",
      "Rilascio certificazioni",
    ],
  },
  {
    icon: <FiClipboard size={40} />,
    titolo: "Pratiche Motorizzazione",
    descrizione: "Assistenza per tutte le pratiche presso la Motorizzazione",
    dettagli: [
      "Collaudi veicoli",
      "Revisioni straordinarie",
      "Omologazioni",
      "Certificati di conformità",
      "Attestazioni varie",
    ],
  },
  {
    icon: <FiBook size={40} />,
    titolo: "Consulenza Normativa",
    descrizione: "Aggiornamento e consulenza sulle normative del settore",
    dettagli: [
      "Normativa autotrasporto merci",
      "Regolamenti europei",
      "Obblighi formativi conducenti",
      "Sicurezza sul lavoro trasporti",
      "Aggiornamenti legislativi",
    ],
  },
];

export default function ServiziPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">I Nostri Servizi</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Consulenza professionale e assistenza completa per tutte le esigenze
            del settore autotrasporto e circolazione veicoli
          </p>
        </div>
      </section>

      {/* Servizi */}
      <section className="section">
        <div className="container">
          <div className="grid gap-8">
            {servizi.map((servizio, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="text-primary-600 flex-shrink-0">
                    {servizio.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {servizio.titolo}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {servizio.descrizione}
                    </p>
                    <ul className="space-y-2">
                      {servizio.dettagli.map((dettaglio, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={18} />
                          <span>{dettaglio}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Non hai trovato il servizio che cerchi?
            </h3>
            <p className="text-gray-600 mb-6">
              Contattaci per una consulenza personalizzata. Saremo lieti di
              aiutarti a trovare la soluzione più adatta alle tue esigenze.
            </p>
            <a href="/contatti" className="btn btn-primary">
              Contattaci
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
