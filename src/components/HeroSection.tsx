import { MessageCircle, ChevronDown } from "lucide-react";

const WA_LINK = "https://wa.me/6282143600041?text=Halo%20Harin%20Jaya%20Kopi%2C%20saya%20ingin%20memesan%20kopi";

const HeroSection = () => (
  <section
    id="beranda"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0 bg-coffee-dark">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/60 via-coffee-dark/40 to-coffee-dark" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center animate-fade-in">
      <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
        Kopi Pilihan Asli Magetan, Jawa Timur
      </p>
      <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6">
        Nikmati Cita Rasa
        <br />
        <span className="text-gold">Kopi Khas Magetan</span>
      </h1>
      <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-lora">
        Harin Jaya Kopi — kopi berkualitas dengan cita rasa autentik, langsung dari biji pilihan terbaik dari dataran tinggi Magetan.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-coffee-dark font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:scale-105 text-base"
        >
          <MessageCircle className="h-5 w-5" />
          Pesan via WhatsApp
        </a>
        <a
          href="#produk"
          className="inline-flex items-center gap-2 border-2 border-cream/30 text-cream hover:border-gold hover:text-gold px-8 py-4 rounded-full transition-all text-base"
        >
          Lihat Produk
        </a>
      </div>
    </div>

    <a
      href="#tentang"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 hover:text-gold transition-colors animate-bounce"
    >
      <ChevronDown className="h-8 w-8" />
    </a>
  </section>
);

export default HeroSection;
