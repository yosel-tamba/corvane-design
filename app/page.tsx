"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function Home() {
  // state untuk scrollspy
  const [activeSection, setActiveSection] = useState("home");

  // fungsi init lucide
  const handleLucideLoad = () => {
    // @ts-ignore
    if (window?.lucide?.createIcons) {
      // @ts-ignore
      window.lucide.createIcons();
    }
  };

  useEffect(() => {
    handleLucideLoad();

    // Set current year di footer
    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

    // Scrollspy pakai IntersectionObserver
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        id="header"
        className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm"
      >
        <div className="container container-sm container-sm container-lg mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">
            <span className="text-blue-500">Corvaneeeeeeee</span>
            <span className="text-amber-500">Design</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {["home", "services", "portfolio", "about", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`transition ${
                  activeSection === id
                    ? "font-bold text-blue-500"
                    : "text-slate-600 hover:text-blue-500"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
          <button id="mobile-menu-button" className="md:hidden text-slate-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div id="mobile-menu" className="hidden md:hidden px-6 pb-4">
          {["home", "services", "portfolio", "about", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`block py-2 transition ${
                activeSection === id
                  ? "font-bold text-blue-500"
                  : "text-slate-600 hover:text-blue-500"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </header>

      {/* MAIN */}
      <main className="text-slate-600">
        {/* HERO */}
        <section
          id="home"
          className="min-h-screen flex items-center bg-slate-50 pt-20"
        >
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Corvane Design — <span className="text-amber-500">Desain</span>{" "}
              yang <span className="text-blue-500">Nyambung</span> sama Kamu
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Corvane Design menyediakan layanan desain profesional:{" "}
              <strong>CV khusus developer</strong>,{" "}
              <strong>desain apparel</strong>, dan <strong>UI/UX</strong> modern
              untuk website & aplikasi.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#portfolio"
                className="bg-amber-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-amber-600 transition-transform duration-300 transform hover:scale-105 inline-block"
              >
                Lihat Portfolio
              </a>
              <a
                href="#contact"
                className="border border-blue-500 text-blue-500 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition duration-200 hover:scale-105 inline-block"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Layanan Kami</h2>
              <p className="text-slate-500 mt-2">
                Dari CV, apparel, hingga UI/UX — semua desain biar kamu tampil
                beda
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-50 p-8 rounded-lg text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <i
                  data-lucide="layout"
                  className="mx-auto mb-4 w-16 h-16 text-blue-500"
                ></i>
                <h3 className="text-xl font-semibold mb-2">Desain UI/UX</h3>
                <p className="text-slate-600">
                  Membuat tampilan aplikasi & website yang modern, mudah
                  digunakan, dan enak dipandang.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <i
                  data-lucide="file-text"
                  className="mx-auto mb-4 w-16 h-16 text-amber-500"
                ></i>
                <h3 className="text-xl font-semibold mb-2">Desain CV</h3>
                <p className="text-slate-600">
                  Bikin HR langsung melirik dengan CV yang rapi, menarik, dan
                  profesional.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <i
                  data-lucide="shirt"
                  className="mx-auto mb-4 w-16 h-16 text-green-500"
                ></i>
                <h3 className="text-xl font-semibold mb-2">Desain Apparel</h3>
                <p className="text-slate-600">
                  Kaos, hoodie, atau merch custom yang nunjukin gaya unikmu.
                </p>
              </div>
              {/* 🔥 Tambahan baru: Flyer */}
              <div className="bg-slate-50 p-8 rounded-lg text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <i
                  data-lucide="megaphone"
                  className="mx-auto mb-4 w-16 h-16 text-red-500"
                ></i>
                <h3 className="text-xl font-semibold mb-2">Desain Flyer</h3>
                <p className="text-slate-600">
                  Promosi makin gampang dengan flyer kece yang langsung bikin
                  orang kepo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Portfolio</h2>
              <p className="text-slate-500 mt-2">
                Beberapa karya pilihan dari tim Corvane Design.
              </p>
            </div>

            {/* Grid Portfolio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "CV Developer",
                  img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  title: "UI/UX Dashboard",
                  img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  title: "Apparel Custom",
                  img: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1200&auto=format&fit=crop",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Tombol Selengkapnya */}
            <div className="text-center mt-12">
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-blue-500 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-blue-600 hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
              >
                Selengkapnya
                <i data-lucide="arrow-right" className="w-5 h-5"></i>
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="Tim Desainer Corvane Design"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tentang Corvane Design
              </h2>
              <p className="text-slate-600 mb-4">
                Corvane Design hadir untuk membantu individu maupun bisnis
                tampil lebih profesional dan standout. Kami menyediakan
                berbagai layanan desain kreatif yang disesuaikan dengan
                kebutuhanmu.
              </p>
              <ul className="list-disc pl-5 text-slate-600 space-y-2">
                <li>
                  <strong>UI/UX:</strong> Membuat tampilan aplikasi & website
                  modern, intuitif, dan mudah digunakan.
                </li>
                <li>
                  <strong>CV:</strong> Mendesain CV profesional yang langsung
                  bikin HR tertarik.
                </li>
                <li>
                  <strong>Apparel:</strong> Kaos, hoodie, dan merch custom untuk
                  ekspresikan gayamu.
                </li>
                <li>
                  <strong>Flyer:</strong> Media promosi keren yang bikin audiens
                  langsung kepo.
                </li>
                <li>
                  Tools utama: Figma, Adobe Illustrator, Photoshop, dan
                  prototyping tools.
                </li>
                <li>Fokus kami: desain yang jelas, modern, dan berdampak.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* SCRIPTS */}
      <Script
        src="https://unpkg.com/lucide@latest"
        onLoad={handleLucideLoad}
      ></Script>
    </>
  );
}
