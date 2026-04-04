import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg"; // pastikan path sesuai

const WA_LINK = "https://wa.me/6282143600041?text=Halo%20Harin%20Jaya%20Kopi%2C%20saya%20ingin%20memesan%20kopi";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#produk", label: "Produk" },
  { href: "#cara-pesan", label: "Cara Pesan" },
  { href: "#kontak", label: "Kontak" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-coffee-dark/95 shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* LOGO */}
          <a href="#beranda" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Harin Logo"
              className="h-10 w-auto object-contain drop-shadow-md"
            />
            <span className="font-playfair text-xl font-bold text-cream">
              Harin Jaya Kopi
            </span>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-cream/80 hover:text-gold transition-colors text-sm font-medium tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-coffee-dark font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:shadow-lg"
            >
              Pesan via WhatsApp
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-cream p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-coffee-dark/95 backdrop-blur-sm border-t border-cream/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-cream/80 hover:text-gold transition-colors py-2 text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gold hover:bg-gold-light text-coffee-dark font-semibold text-sm px-5 py-2.5 rounded-full transition-all mt-2"
            >
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;