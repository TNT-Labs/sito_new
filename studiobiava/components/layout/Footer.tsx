import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Info Studio */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Studio Biava</h3>
            <p className="text-sm mb-4">
              Il vostro consulente per tutte le problematiche relative
              all'autotrasporto e alla circolazione dei mezzi di trasporto.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Link Utili */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Link Utili</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servizi" className="hover:text-primary-400 transition-colors">
                  I Nostri Servizi
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" className="hover:text-primary-400 transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/documenti" className="hover:text-primary-400 transition-colors">
                  Documenti e Modulistica
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-primary-400 transition-colors">
                  News e Aggiornamenti
                </Link>
              </li>
              <li>
                <Link href="/area-clienti" className="hover:text-primary-400 transition-colors">
                  Area Clienti
                </Link>
              </li>
            </ul>
          </div>

          {/* Servizi */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Servizi Principali</h3>
            <ul className="space-y-2 text-sm">
              <li>• Autotrasporto merci c/terzi</li>
              <li>• Carta Qualificazione Conducente</li>
              <li>• Pratiche di immatricolazione</li>
              <li>• Verifiche tecniche rimorchi</li>
              <li>• Consulenza normativa</li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contatti</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FiMapPin className="mt-1 flex-shrink-0" size={16} />
                <span>
                  Via Esempio, 123<br />
                  12345 Città (PR)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone size={16} />
                <a href="tel:+39XXXXXXXXXX" className="hover:text-primary-400">
                  +39 XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMail size={16} />
                <a href="mailto:info@studiobiava.com" className="hover:text-primary-400">
                  info@studiobiava.com
                </a>
              </li>
            </ul>

            <div className="mt-4 text-xs">
              <p className="font-semibold text-white">Orari</p>
              <p>Lun-Ven: 9:00-12:30 / 14:30-18:00</p>
              <p>Sabato: Su appuntamento</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Studio Biava. Tutti i diritti riservati.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-primary-400">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="hover:text-primary-400">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
