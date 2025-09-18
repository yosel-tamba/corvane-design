"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function PrivacyPage() {
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
          <a href="/#home" className="text-2xl font-bold">
            <span className="text-blue-500">Corvane</span>
            <span className="text-amber-500">Design</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="/#home" className="text-slate-600 hover:text-blue-500">
              Home
            </a>
            <a href="/#services" className="text-slate-600 hover:text-blue-500">
              Layanan
            </a>
            <a href="/#portfolio" className="text-slate-600 hover:text-blue-500">
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
          <a
            href="/#home"
            className="block py-2 text-slate-600 hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="/#services"
            className="block py-2 text-slate-600 hover:text-blue-500"
          >
            Layanan
          </a>
          <a
            href="/#portfolio"
            className="block py-2 text-slate-600 hover:text-blue-500"
          >
            Portfolio
          </a>
          <a
            href="/#about"
            className="block py-2 text-slate-600 hover:text-blue-500"
          >
            Tentang
          </a>
          <a
            href="/#contact"
            className="block py-2 text-slate-600 hover:text-blue-500"
          >
            Kontak
          </a>
        </div>
      </header>

      {/* MAIN */}
      <main className="pt-32 pb-20 bg-slate-50 min-h-screen text-slate-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
              <p className="text-slate-500 mt-2">
                This Privacy Policy explains how Corvane Design collects, uses, discloses, and protects your personal information.
              </p>
            </div>

            <article className="prose max-w-none text-sm leading-relaxed">
              <p>
                <strong>Introduction.</strong> Corvane Design (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;) is committed to safeguarding the privacy of individuals who visit and interact with our website and
                services (the &quot;Services&quot;). This Privacy Policy describes the types of information we collect, how we use that information, the circumstances in which we disclose it, and the
                measures we take to protect it.
              </p>

              <h4>1. Scope and Acceptance</h4>
              <p>
                By accessing or using our Services, you acknowledge that you have read and understood
                this Privacy Policy and consent to the collection, use and disclosure of your personal
                information in accordance with the terms set out herein.
              </p>

              <h4>2. Information We Collect</h4>
              <ul>
                <li>
                  <strong>Personal Information you provide:</strong> This includes name, email address,
                  telephone number, billing information, and any other data you expressly supply when
                  contacting us, subscribing to newsletters, requesting quotes, or completing forms.
                </li>
                <li>
                  <strong>Transactional Information:</strong> Records related to purchases, invoices,
                  order history and related communications.
                </li>
                <li>
                  <strong>Technical and Usage Data:</strong> Information collected automatically when you
                  visit our site, including IP address, browser type and version, device identifiers,
                  operating system, pages viewed, time spent on pages, referral URLs, and other similar
                  analytics data.
                </li>
                <li>
                  <strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons and
                  similar technologies to support site functionality, remember preferences and obtain
                  analytics about site usage.
                </li>
              </ul>

              <h4>3. Purposes for Using Personal Information</h4>
              <p>We use collected information for the following legitimate purposes:</p>
              <ul>
                <li>Providing, operating and maintaining our Services;</li>
                <li>Responding to inquiries and delivering customer support;</li>
                <li>Processing orders, payments and fulfilment;</li>
                <li>Sending administrative information, updates, marketing communications and offers (only where permitted);</li>
                <li>Analysing usage patterns to improve the service, content and user experience;</li>
                <li>Complying with legal obligations and preventing fraud or misuse.</li>
              </ul>

              <h4>4. Legal Basis</h4>
              <p>
                Where applicable, we will process personal information in reliance upon a lawful basis,
                such as consent, contract performance, compliance with legal obligations, or our
                legitimate interests (for example to provide and improve our Services).
              </p>

              <h4>5. Sharing and Disclosure</h4>
              <p>
                We may disclose personal information to third parties in limited circumstances, including
                to service providers who assist with payment processing, hosting, analytics and email
                delivery. We require such providers to protect personal information and to use it only
                for the purposes for which it was disclosed. We will not sell your personal information
                to third parties.
              </p>

              <h4>6. Third-Party Services and Links</h4>
              <p>
                Our Services may contain links to third-party websites and services. This Privacy Policy
                does not cover those third parties and we encourage you to review their privacy
                statements. We are not responsible for the privacy practices or content of third-party
                sites.
              </p>

              <h4>7. Data Retention</h4>
              <p>
                We retain personal information only for as long as necessary to fulfil the purposes for
                which it was collected, including to satisfy legal, accounting, or reporting
                requirements.
              </p>

              <h4>8. Security</h4>
              <p>
                We implement reasonable technical and organisational measures designed to protect the
                confidentiality and integrity of personal information. While we endeavour to protect
                personal information, no transmission or storage system can be guaranteed to be 100%
                secure.
              </p>

              <h4>9. International Transfers</h4>
              <p>
                Where personal information is transferred to and processed in countries other than your
                country of residence, we will take steps to ensure that appropriate safeguards are in
                place to protect such information.
              </p>

              <h4>10. Your Rights</h4>
              <p>
                Subject to applicable law, you may have rights to access, correct, erase, restrict or
                object to certain processing of your personal information, and to request portability of
                your data. To exercise such rights, please contact us using the details provided
                below.
              </p>

              <h4>11. Children</h4>
              <p>
                Our Services are not directed at children under the age of 13 (or higher age where
                required by local law). We do not knowingly collect personal information from children
                without parental consent.
              </p>

              <h4>12. Changes to this Policy</h4>
              <p>
                We may update this Privacy Policy from time to time. We will post the revised policy on
                our website together with the date of the most recent revision.
              </p>

              <h4>13. Contact</h4>
              <p>
                If you have questions or requests regarding this Privacy Policy or the handling of your
                personal information, please contact:
              </p>
              <p>
                Corvane Design<br />
                Email: <a href="mailto:hello@corvane.com" className="text-blue-600">hello@corvane.com</a><br />
                Address: Jakarta, Indonesia
              </p>

              <p className="italic text-xs text-slate-500 mt-3">
                Note: This Privacy Policy is provided for information purposes only and does not
                constitute legal advice. For bespoke legal advice you should consult a qualified legal
                professional.
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
