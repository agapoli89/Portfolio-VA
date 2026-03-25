"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Mail, Laptop, Camera, Globe } from "lucide-react";
import { useRef } from "react";

export default function NetstoriaSite() {
  const kontaktRef = useRef<HTMLDivElement>(null);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 scroll-smooth">
      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4"
        >
          NetStoria
        </h1>
        <p className="text-lg max-w-xl mx-auto text-gray-600 mb-6">
          Profesjonalne wsparcie pracy biura (administracyjne i techniczne), automatyzacja procesów (np. proste aplikacje desktopowe) oraz fotografia produktowa.
        </p>
         <a href="#kontakt">
        <Button onClick={() => kontaktRef.current?.scrollIntoView({ behavior: "smooth" })}  className="rounded-2xl px-6 py-2 text-base">
          Skontaktuj się
        </Button>
        </a>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Usługi
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 text-center">
              <Mail className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Wirtualna asystentka</h3>
              <p className="text-sm text-gray-600">
                Zdalne wsparcie biura, organizacja, obsługa maili i dokumentów. Zestawienia i raporty.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 text-center">
              <Globe className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Strony internetowe</h3>
              <p className="text-sm text-gray-600">
                Poprawki na istniejących stronach internetowych. Tworzenie stron typu wizytówka.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 text-center">
              <Laptop className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Aplikacje desktopowe</h3>
              <p className="text-sm text-gray-600">
                Tworzenie prostych narzędzi, np. łączenie plików PDF i automatyzacja pracy.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 text-center">
              <Camera className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Fotografia produktowa</h3>
              <p className="text-sm text-gray-600">
                Estetyczne zdjęcia produktów do sklepów internetowych i social media.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ABOUT WITH IMAGE */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/ja.jpg"
            alt="Twoje zdjęcie"
            className="rounded-2xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-6">O mnie</h2>
            <p className="text-gray-600 text-justify">
              Posiadam wieloletnie doświadczenie w&nbsp;szeroko pojętej administracji biurowej, obejmujące m.in. rozliczenia, organizację szkoleń, logistykę podróży służbowych, archiwizację
              oraz&nbsp;kompleksowe zarządzanie dokumentacją. Dzięki praktycznej wiedzy skutecznie wspieram firmy w&nbsp;codziennym funkcjonowaniu i&nbsp;optymalizacji procesów biurowych.
            </p>
            <p className="text-gray-600 text-justify">
              Od kilku lat rozwijam się w&nbsp;branży IT, łącząc doświadczenie administracyjne z&nbsp;nowoczesnymi technologiami. Pracowałam jako wsparcie techniczne dla aplikacji biznesowych,
              co pozwoliło mi dogłębnie poznać potrzeby użytkowników oraz&nbsp;proces tworzenia i&nbsp;wdrażania systemów informatycznych.
            </p>
            <p className="text-gray-600 text-justify">
              Netstoria to efekt połączenia mojego doświadczenia, wiedzy oraz&nbsp;ciągłego rozwoju w obszarze nowych technologii. Oferuję wsparcie w codziennych zadaniach administracyjnych, usprawnianie procesów biznesowych oraz tworzenie prostych, funkcjonalnych rozwiązań IT dopasowanych do indywidualnych potrzeb klientów.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Portfolio</h2>

        {/* INSTAGRAM / SCREENY */}
        <h3 className="text-xl font-semibold mb-4">Posty na Instagram</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <a href="https://www.instagram.com/p/CWEDIWwoy8H/">
            <img src="/post1.jpg" className="rounded-xl" />
          </a>
          <a href="https://www.instagram.com/p/CWdz4r4or1Q/">
            <img src="/post2.jpg" className="rounded-xl" />
          </a>
          <a href="https://www.instagram.com/p/CWu80xOogmv/">
            <img src="/post3.jpg" className="rounded-xl" />
          </a>
        </div>

        {/* PRODUCT PHOTOS */}
        <h3 className="text-xl font-semibold mb-4">Fotografia produktów i usług</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <img src="/produkt1.jpg" className="rounded-xl" />
          <img src="/produkt2.jpg" className="rounded-xl" />
          <img src="/produkt3.jpg" className="rounded-xl" />
        </div>

        {/* VIDEO */}
        <h3 className="text-xl font-semibold mb-4">Wideo (instrukcja aplikacji)</h3>
        <div className="aspect-video">
          <video controls className="w-full rounded-xl">
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section ref={kontaktRef} className="bg-gray-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Kontakt</h2>
        <p className="mb-2">📞 <a href="tel:+48123456789" className="hover:underline">+48 508 071 833</a></p>
        <p className="mb-4">📧 netstoria.va@gmail.com</p>

        <form action="https://formspree.io/f/mbdznnbk" method="POST" className="space-y-4 max-w-md mx-auto">
          <input type="text" name="name" placeholder="Imię" className="w-full p-3 rounded-xl text-white" required />
          <input type="email" name="email" placeholder="Email" className="w-full p-3 rounded-xl text-white" required />
          <textarea name="message" placeholder="Wiadomość" className="w-full p-3 rounded-xl text-white" required />
          <button type="submit" className="bg-white text-black px-6 py-2 rounded-2xl">
            Wyślij
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Netstoria
      </footer>
    </div>
  );
}
