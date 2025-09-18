"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function TermsPage() {
  const handleLucideLoad = () => {
    // @ts-ignore
    if (window?.lucide?.createIcons) {
      // @ts-ignore
      window.lucide.createIcons();
    }
  };

  useEffect(() => {
    handleLucideLoad();

    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
  }, []);

  return (
    <>
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
            <a href="/" className="text-slate-600 hover:text-blue-500">
              Home
            </a>
            <a href="/#services" className="text-slate-600 hover:text-blue-500">
              Layanan
            </a>
            <a href="/portfolio" className="text-slate-600 hover:text-blue-500">
              Portfolio
            </a>
            <a href="/#about" className="text-slate-600 hover:text-blue-500">
              Tentang
            </a>
            <a href="/#contact" className="text-slate-600 hover:text-blue-500">
              Kontak
            </a>
          </nav>
          <button id="mobile-menu-button" className="md:hidden text-slate-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="pt-32 pb-20 bg-slate-50 min-h-screen text-slate-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
              <p className="text-slate-500 mt-2">
                These Terms of Service (&quot;Terms&quot;) govern your use of Corvane Design&apos;s website and services.
                Please read them carefully.
              </p>
            </div>

            <article className="prose max-w-none text-sm leading-relaxed">
              <p>
                <strong>Introduction and Acceptance.</strong> These Terms of Service (&#34;Terms&#34;) govern
                your use of Corvane Design&#39;s website and services. By accessing or using the Services,
                you agree to be bound by these Terms. If you do not agree to these Terms, you should
                not use the Services.
              </p>

              <h4>1. Services</h4>
              <p>
                Corvane Design provides design services including but not limited to CV templates,
                UI/UX design, apparel mockups, promotional material and related consultancy. Specific
                project work will be governed by separate project agreements or proposals where
                applicable.
              </p>

              <h4>2. Eligibility</h4>
              <p>
                You represent and warrant that you are at least 18 years of age (or the legal age in
                your jurisdiction) and have the capacity to enter into binding contracts.
              </p>

              <h4>3. User Obligations and Conduct</h4>
              <ul>
                <li>You agree to provide accurate and complete information when requested.</li>
                <li>You will not use the Services for unlawful or infringing activities.</li>
                <li>You are responsible for maintaining the confidentiality of any account credentials.</li>
              </ul>

              <h4>4. Intellectual Property</h4>
              <p>
                Unless otherwise agreed in writing, Corvane Design retains all intellectual property
                rights in materials, templates, source files and deliverables created by Corvane Design.
                Upon full payment and subject to the terms of the applicable project agreement, Corvane
                Design will grant the client a licence to use the final deliverables for the agreed
                purpose. Any permitted licence will be non-transferable except as expressly stated.
              </p>

              <h4>5. Fees, Payment and Refunds</h4>
              <p>
                Fees for services will be set out in the project proposal or invoice. Payments are due
                according to the payment terms stated in the invoice or agreement. Refunds, if any, will
                be provided only as set out in the applicable agreement.
              </p>

              <h4>6. Limitation of Liability</h4>
              <p>
                To the maximum extent permitted by law, Corvane Design's aggregate liability arising
                from or in connection with the Services, whether in contract, tort (including
                negligence), statute or otherwise, shall be limited to the total amount paid by the
                client for the specific services giving rise to the claim. Corvane Design shall not be
                liable for any indirect, incidental, consequential or punitive damages.
              </p>

              <h4>7. Indemnification</h4>
              <p>
                You agree to indemnify and hold harmless Corvane Design and its officers, directors,
                employees and agents from and against any claims, liabilities, losses, damages and
                expenses (including reasonable legal fees) arising out of your breach of these Terms,
                your negligence or wilful misconduct, or your violation of any law.
              </p>

              <h4>8. Termination</h4>
              <p>
                Either party may terminate services in accordance with the terms of the applicable
                agreement. Corvane Design may suspend or terminate access to the Services where there
                is suspected misuse or breach of these Terms.
              </p>

              <h4>9. Governing Law</h4>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                jurisdiction in which Corvane Design operates, without regard to conflict of law
                principles. Any disputes shall be subject to the exclusive jurisdiction of the courts
                in that jurisdiction.
              </p>

              <h4>10. Changes to Terms</h4>
              <p>
                Corvane Design may amend these Terms from time to time. Updated versions will be
                posted on the website and will take effect upon posting. Continued use of the Services
                after changes are posted constitutes acceptance of the revised Terms.
              </p>

              <h4>11. Entire Agreement</h4>
              <p>
                These Terms, together with any project-specific agreement, constitute the entire
                agreement between you and Corvane Design with respect to the subject matter herein and
                supersede all prior agreements and understandings.
              </p>

              <h4>12. Contact</h4>
              <p>
                For enquiries relating to these Terms, please contact:
              </p>
              <p>
                Corvane Design<br />
                Email: <a href="mailto:hello@corvane.com" className="text-blue-600">hello@corvane.com</a><br />
                Address: Jakarta, Indonesia
              </p>

              <p className="italic text-xs text-slate-500 mt-3">
                Note: The Terms of Service set out above are provided for general informational purposes
                only and do not constitute legal advice. For tailored legal advice please consult a
                legal professional.
              </p>
            </article>
          </div>
        </div>
      </main>

      {/* SCRIPTS */}
      <Script src="https://unpkg.com/lucide@latest" onLoad={handleLucideLoad}></Script>
    </>
  );
}
