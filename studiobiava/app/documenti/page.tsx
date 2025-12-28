import { FiFileText, FiDownload, FiFolder } from "react-icons/fi";

const categorie = [
  {
    nome: "Modulistica",
    documenti: [
      { titolo: "Richiesta Iscrizione Albo Autotrasportatori", file: "/documents/richiesta-albo.pdf" },
      { titolo: "Modulo Rinnovo CQC", file: "/documents/rinnovo-cqc.pdf" },
      { titolo: "Richiesta Passaggio di Proprietà", file: "/documents/passaggio-proprieta.pdf" },
      { titolo: "Domanda Duplicato Carta Circolazione", file: "/documents/duplicato-circolazione.pdf" },
    ],
  },
  {
    nome: "Guide e Manuali",
    documenti: [
      { titolo: "Guida all'Autotrasporto Merci", file: "/documents/guida-autotrasporto.pdf" },
      { titolo: "Come Ottenere la CQC", file: "/documents/guida-cqc.pdf" },
      { titolo: "Pratiche di Immatricolazione", file: "/documents/guida-immatricolazione.pdf" },
      { titolo: "Verifiche Tecniche Rimorchi", file: "/documents/guida-verifiche.pdf" },
    ],
  },
  {
    nome: "Normative",
    documenti: [
      { titolo: "Regolamento UE Autotrasporto", file: "/documents/regolamento-ue.pdf" },
      { titolo: "Normativa CQC Aggiornata", file: "/documents/normativa-cqc.pdf" },
      { titolo: "Codice della Strada - Estratto", file: "/documents/cds-estratto.pdf" },
    ],
  },
  {
    nome: "Circolari e Comunicazioni",
    documenti: [
      { titolo: "Circolare Ministeriale 01/2024", file: "/documents/circolare-01-2024.pdf" },
      { titolo: "Aggiornamenti Normativi Gennaio 2024", file: "/documents/aggiornamenti-2024.pdf" },
      { titolo: "Comunicazione Nuove Tariffe", file: "/documents/tariffe-2024.pdf" },
    ],
  },
];

export default function DocumentiPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Documenti e Modulistica</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Scarica i moduli e consulta la documentazione necessaria per le tue pratiche
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Info Alert */}
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg mb-8">
            <p className="text-gray-700">
              <strong>Nota:</strong> I documenti qui presenti sono a scopo informativo.
              Per ogni dubbio o necessità di assistenza nella compilazione, non esitare a{" "}
              <a href="/contatti" className="text-primary-600 hover:underline font-semibold">
                contattarci
              </a>.
            </p>
          </div>

          {/* Categorie Documenti */}
          <div className="space-y-8">
            {categorie.map((categoria, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-3 mb-6">
                  <FiFolder className="text-primary-600" size={32} />
                  <h2 className="text-2xl font-bold text-gray-900">
                    {categoria.nome}
                  </h2>
                </div>

                <div className="grid gap-4">
                  {categoria.documenti.map((doc, docIndex) => (
                    <div
                      key={docIndex}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FiFileText className="text-gray-400" size={24} />
                        <span className="font-medium text-gray-900">
                          {doc.titolo}
                        </span>
                      </div>
                      <a
                        href={doc.file}
                        download
                        className="btn btn-sm bg-primary-600 text-white hover:bg-primary-700 flex items-center gap-2 px-4 py-2 rounded-lg"
                      >
                        <FiDownload size={16} />
                        Scarica
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary-700 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Hai bisogno di assistenza?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Il nostro team è a disposizione per aiutarti nella compilazione
              dei moduli e per fornirti tutte le informazioni necessarie.
            </p>
            <a href="/contatti" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Contattaci
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
