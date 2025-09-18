import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corvane Design — CV, Apparel, UI/UX, Flyer",
  description:
    "Corvane Design menyediakan jasa desain CV khusus developer, apparel custom, dan UI/UX modern untuk website maupun aplikasi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-white text-slate-800 font-[Poppins,sans-serif]">
        {children}

        {/* FOOTER */}
        <footer
          className="mt-5 bg-slate-900 text-slate-300 py-12 border-t border-slate-800"
          id="contact"
        >
          <div className="container container-sm container-sm container-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Kolom 1 - Kontak + Instagram */}
              <div className="space-y-4">
                <a href="/" className="inline-flex items-center gap-2">
                  <span className="font-bold text-white">Corvane</span>
                  <span className="text-amber-400 font-semibold">Design</span>
                </a>
                <p className="text-slate-400 max-w-sm">
                  Creative agency yang bantu kamu tampil standout — CV, UI/UX,
                  apparel & flyer.
                </p>

                <ul className="mt-2 space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <i
                      data-lucide="mail"
                      className="w-5 h-5 text-slate-300"
                    ></i>
                    <a
                      href="mailto:hello@corvane.com"
                      className="hover:text-blue-400"
                    >
                      corvane_design@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <i
                      data-lucide="phone"
                      className="w-5 h-5 text-slate-300"
                    ></i>
                    <a
                      href="tel:+6281234567890"
                      className="hover:text-green-400"
                    >
                      +62 812-3456-7890
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <i
                      data-lucide="instagram"
                      className="w-5 h-5 text-slate-300"
                    ></i>
                    <a
                      href="https://instagram.com/USERNAME"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-pink-400"
                    >
                      corvane_design
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <i
                      data-lucide="map-pin"
                      className="w-5 h-5 text-slate-300"
                    ></i>
                    <span className="text-slate-400">Jakarta, Indonesia</span>
                  </li>
                </ul>
              </div>

              {/* Kolom 2 - Jam Operasional */}
              <div className="md:pl-6">
                <h4 className="text-white font-semibold mb-3">
                  Jam Operasional
                </h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center justify-between border-b border-slate-800 pb-1">
                    <span>Senin - Jumat</span>
                    <span className="text-white font-medium">
                      09.00 - 18.00
                    </span>
                  </li>
                  <li className="flex items-center justify-between border-b border-slate-800 pb-1">
                    <span>Sabtu</span>
                    <span className="text-white font-medium">
                      10.00 - 15.00
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Minggu</span>
                    <span className="text-amber-400 font-medium">Tutup</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-500 mt-4">
                  *Waktu di atas dalam WIB. Untuk proyek urgent bisa kontak via
                  WhatsApp.
                </p>
              </div>
            </div>

            {/* Bottom row */}
            <div className="mt-10 border-t border-slate-800 pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-400">
                  &copy; <span id="current-year"></span> Corvane Design. All
                  rights reserved.
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <a href="/privacy" className="hover:underline text-slate-400">
                    Privacy
                  </a>
                  <a href="/terms" className="hover:underline text-slate-400">
                    Terms
                  </a>
                  <span className="hidden md:inline-block text-slate-500">
                    •
                  </span>
                  <div className="text-slate-400">
                    Made with <span className="text-pink-400">♥</span> in ID
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
