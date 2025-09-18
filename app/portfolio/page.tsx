"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function PortfolioPage() {
  // init lucide icons safely
  const handleLucideLoad = () => {
    // @ts-ignore
    if (window?.lucide?.createIcons) {
      // @ts-ignore
      window.lucide.createIcons();
    }
  };

  useEffect(() => {
    handleLucideLoad();
    // set current year in any footer element with id="current-year"
    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
  }, []);

  // 20 real-looking Unsplash images (queries chosen to be design/creative related)
  const IMAGES = [
    { title: "CV Developer", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop" },
    { title: "UI Mockup", img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop" },
    { title: "Apparel Mockup", img: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1200&auto=format&fit=crop" },
    { title: "Landing Page", img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop" },
    { title: "Merch Mockup", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop" },
    { title: "Portfolio Site", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
    { title: "Poster Design", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop" },
    { title: "Business Card", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop" },
    { title: "Branding Kit", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" },
    { title: "Illustration", img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop" },
    { title: "Icon Set", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop" },
    { title: "Dashboard UI", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop" },
    { title: "Mobile App", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop" },
    { title: "Promotional Flyer", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop" },
    { title: "Social Media Kit", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" },
    { title: "Photo Editing", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop" },
    { title: "Packaging", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop" },
    { title: "Typographic Poster", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop" },
    { title: "Mockup Scene", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200&auto=format&fit=crop" },
    { title: "Creative Workspace", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop" },
  ];

  // modal state for preview
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalSrc, setModalSrc] = useState<string>("");

  // open preview modal
  const openModal = (src: string) => {
    setModalSrc(src);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <Script src="https://unpkg.com/lucide@latest" onLoad={handleLucideLoad} />

      {/* HEADER */}
      <header
        id="header"
        className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">
            <span className="text-blue-500">Corvane</span>
            <span className="text-amber-500">Design</span>
          </a>

          <nav className="hidden md:flex space-x-8">
            <a href="/#home" className="text-slate-600 hover:text-blue-500">Home</a>
            <a href="/#services" className="text-slate-600 hover:text-blue-500">Layanan</a>
            <a href="/portfolio" className="text-blue-500 font-semibold">Portfolio</a>
            <a href="/#about" className="text-slate-600 hover:text-blue-500">Tentang</a>
            <a href="/#contact" className="text-slate-600 hover:text-blue-500">Kontak</a>
          </nav>

          <button id="mobile-menu-button" className="md:hidden text-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-600">Portfolio</h1>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              Koleksi karya pilihan dari Corvane Design — preview dulu, klik untuk lihat lebih besar.
            </p>
          </div>

          {/* Grid (4 columns on large screens) */}
          <div id="portfolio-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {IMAGES.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(item.img)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter") openModal(item.img); }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal Preview */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50 transition-opacity duration-300 ${
          modalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
      >
        <div className={`bg-white rounded-lg w-[70%] overflow-auto relative transform transition-transform duration-300 ${modalOpen ? "scale-100" : "scale-95"}`}>
          <button onClick={closeModal} className="absolute top-4 right-4 text-white bg-black/60 rounded-full p-2 z-10">
            <i data-lucide="x" className="w-6 h-6"></i>
          </button>
          {modalOpen && modalSrc && (
            <img src={modalSrc} alt="Preview" className="w-full h-auto rounded-md" />
          )}
        </div>
      </div>

      
    </>
  );
}
