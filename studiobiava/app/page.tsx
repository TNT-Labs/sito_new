import Link from "next/link";
import { FiTruck, FiFileText, FiAward, FiUsers, FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="container py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Il vostro consulente per l'autotrasporto
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Consulenza professionale per tutte le problematiche relative
              alla circolazione dei mezzi di trasporto
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/servizi" className="btn btn-primary bg-white text-primary-700 hover:bg-gray-100">
                Scopri i Servizi
                <FiArrowRight className="ml-2" />
              </Link>
              <Link href="/contatti" className="btn btn-secondary border-white text-white hover:bg-white hover:text-primary-700">
                Contattaci
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Principali */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              I Nostri Servizi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Assistenza completa per tutte le esigenze di autotrasporto e circolazione
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FiTruck size={32} />,
                title: "Autotrasporto Merci",
                description: "Consulenza per aziende che effettuano autotrasporto merci per conto terzi",
              },
              {
                icon: <FiAward size={32} />,
                title: "CQC",
                description: "Carta di Qualificazione del Conducente - pratiche e rinnovi",
              },
              {
                icon: <FiFileText size={32} />,
                title: "Pratiche Auto",
                description: "Immatricolazioni, passaggi di proprietà e tutte le pratiche automobilistiche",
              },
              {
                icon: <FiCheckCircle size={32} />,
                title: "Verifiche Tecniche",
                description: "Verifiche tecniche per rimorchi fino a 3,5 tonnellate",
              },
            ].map((servizio, index) => (
              <div key={index} className="card group hover:scale-105 transition-transform">
                <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                  {servizio.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {servizio.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {servizio.description}
                </p>
                <Link
                  href="/servizi"
                  className="text-primary-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Scopri di più <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/servizi" className="btn btn-primary">
              Vedi Tutti i Servizi
            </Link>
          </div>
        </div>
      </section>

      {/* Perché Sceglierci */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Perché Scegliere Studio Biava
              </h2>
              <div className="space-y-4">
                {[
                  "Esperienza pluriennale nel settore",
                  "Consulenza personalizzata per ogni esigenza",
                  "Aggiornamento costante sulle normative",
                  "Rapidità nelle pratiche amministrative",
                  "Assistenza completa pre e post vendita",
                  "Professionisti qualificati e certificati",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/chi-siamo" className="btn btn-primary mt-8 inline-flex">
                Scopri Chi Siamo
              </Link>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8">
              <FiUsers size={64} className="text-primary-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Al servizio dei nostri clienti
              </h3>
              <p className="text-gray-600 mb-6">
                Da anni offriamo consulenza professionale e assistenza completa
                per tutte le problematiche relative all'autotrasporto e alla
                circolazione dei mezzi di trasporto.
              </p>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Anni di Esperienza</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Clienti Soddisfatti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white section">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hai bisogno di consulenza?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contattaci per una consulenza personalizzata. Il nostro team è
            pronto ad assisterti in ogni fase della tua pratica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Contattaci Ora
            </Link>
            <Link href="/area-clienti" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-700">
              Area Clienti
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
