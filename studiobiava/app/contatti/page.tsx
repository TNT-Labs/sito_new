"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    oggetto: "",
    messaggio: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui andrà la logica di invio form
    alert("Grazie per averci contattato! Ti risponderemo al più presto.");
    setFormData({ nome: "", email: "", telefono: "", oggetto: "", messaggio: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contattaci</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Siamo a tua disposizione per qualsiasi informazione o richiesta
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Info Contatti */}
            <div className="lg:col-span-1 space-y-6">
              <div className="card">
                <FiMapPin className="text-primary-600 mb-3" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Indirizzo</h3>
                <p className="text-gray-600">
                  Via Esempio, 123<br />
                  12345 Città (PR)<br />
                  Italia
                </p>
              </div>

              <div className="card">
                <FiPhone className="text-primary-600 mb-3" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Telefono</h3>
                <a href="tel:+39XXXXXXXXXX" className="text-primary-600 hover:underline">
                  +39 XXX XXX XXXX
                </a>
              </div>

              <div className="card">
                <FiMail className="text-primary-600 mb-3" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <a href="mailto:info@studiobiava.com" className="text-primary-600 hover:underline">
                  info@studiobiava.com
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>PEC:</strong> studiobiava@pec.it
                </p>
              </div>

              <div className="card">
                <FiClock className="text-primary-600 mb-3" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Orari di Apertura</h3>
                <div className="text-gray-600 space-y-1">
                  <p><strong>Lun - Ven:</strong> 9:00 - 12:30 / 14:30 - 18:00</p>
                  <p><strong>Sabato:</strong> Su appuntamento</p>
                  <p><strong>Domenica:</strong> Chiuso</p>
                </div>
              </div>
            </div>

            {/* Form Contatti */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Inviaci un Messaggio
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome e Cognome *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="oggetto" className="block text-sm font-medium text-gray-700 mb-2">
                        Oggetto *
                      </label>
                      <select
                        id="oggetto"
                        name="oggetto"
                        required
                        value={formData.oggetto}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Seleziona...</option>
                        <option value="informazioni">Richiesta Informazioni</option>
                        <option value="preventivo">Richiesta Preventivo</option>
                        <option value="cqc">Carta Qualificazione Conducente</option>
                        <option value="autotrasporto">Autotrasporto Merci</option>
                        <option value="pratiche">Pratiche Automobilistiche</option>
                        <option value="altro">Altro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      required
                      rows={6}
                      value={formData.messaggio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Descrivi la tua richiesta..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Accetto il trattamento dei miei dati personali secondo la{" "}
                      <a href="/privacy-policy" className="text-primary-600 hover:underline">
                        Privacy Policy
                      </a>
                      {" "}*
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full md:w-auto"
                  >
                    <FiSend className="mr-2" />
                    Invia Messaggio
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Mappa (Placeholder) */}
          <div className="mt-12">
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-600">
                [Mappa di Google Maps - Inserire coordinate reali]
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
