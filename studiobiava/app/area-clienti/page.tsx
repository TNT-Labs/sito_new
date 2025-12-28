"use client";

import { useState } from "react";
import { FiUser, FiLock, FiFileText, FiClock, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export default function AreaClientiPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulazione login - in produzione andrà implementata l'autenticazione reale
    if (loginData.username && loginData.password) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Area Clienti</h1>
            <p className="text-xl text-primary-100 max-w-2xl">
              Accedi alla tua area riservata per gestire le tue pratiche
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="max-w-md mx-auto">
              <div className="card">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full text-primary-600 mb-4">
                    <FiUser size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Accedi</h2>
                  <p className="text-gray-600">Inserisci le tue credenziali</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Utente
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="username"
                        value={loginData.username}
                        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Il tuo nome utente"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="password"
                        id="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="La tua password"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-gray-600">Ricordami</span>
                    </label>
                    <a href="#" className="text-primary-600 hover:underline">
                      Password dimenticata?
                    </a>
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Accedi
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t text-center">
                  <p className="text-sm text-gray-600">
                    Non hai un account?{" "}
                    <a href="/contatti" className="text-primary-600 hover:underline font-semibold">
                      Contattaci
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Area clienti dopo il login
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Benvenuto, Cliente</h1>
              <p className="text-xl text-primary-100">
                Gestisci le tue pratiche e documenti
              </p>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="btn bg-white text-primary-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Statistiche Rapide */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="card text-center">
              <FiFileText className="mx-auto text-primary-600 mb-2" size={32} />
              <div className="text-3xl font-bold text-gray-900">5</div>
              <div className="text-sm text-gray-600">Pratiche Attive</div>
            </div>
            <div className="card text-center">
              <FiClock className="mx-auto text-accent-500 mb-2" size={32} />
              <div className="text-3xl font-bold text-gray-900">2</div>
              <div className="text-sm text-gray-600">In Lavorazione</div>
            </div>
            <div className="card text-center">
              <FiCheckCircle className="mx-auto text-green-600 mb-2" size={32} />
              <div className="text-3xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">Completate</div>
            </div>
            <div className="card text-center">
              <FiAlertCircle className="mx-auto text-red-600 mb-2" size={32} />
              <div className="text-3xl font-bold text-gray-900">1</div>
              <div className="text-sm text-gray-600">Scadenze Vicine</div>
            </div>
          </div>

          {/* Pratiche Attive */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Le Tue Pratiche</h2>
            <div className="space-y-4">
              {[
                { id: "PR001", tipo: "Rinnovo CQC", stato: "In Lavorazione", data: "15/01/2024" },
                { id: "PR002", tipo: "Passaggio Proprietà", stato: "In Attesa Documenti", data: "18/01/2024" },
                { id: "PR003", tipo: "Iscrizione Albo", stato: "Completata", data: "10/01/2024" },
              ].map((pratica, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{pratica.tipo}</div>
                    <div className="text-sm text-gray-600">ID: {pratica.id}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      pratica.stato === "Completata"
                        ? "bg-green-100 text-green-700"
                        : pratica.stato === "In Lavorazione"
                        ? "bg-accent-100 text-accent-700"
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {pratica.stato}
                    </span>
                    <span className="text-sm text-gray-600">{pratica.data}</span>
                    <button className="text-primary-600 hover:text-primary-700 font-semibold">
                      Dettagli
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documenti */}
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">I Tuoi Documenti</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "CQC - Scadenza: 30/06/2024",
                "Iscrizione Albo - Valida fino al 31/12/2024",
                "Carta Circolazione Veicolo 1",
                "Polizza Assicurativa RC Auto",
              ].map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FiFileText className="text-gray-400" />
                    <span className="text-gray-900">{doc}</span>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-semibold">
                    Scarica
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
