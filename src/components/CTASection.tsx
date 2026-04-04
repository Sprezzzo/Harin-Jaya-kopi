import { MessageCircle } from "lucide-react";
import FadeIn from "./FadeIn";

const WA_LINK = "https://wa.me/6282143600041?text=Halo%20Harin%20Jaya%20Kopi%2C%20saya%20ingin%20memesan%20kopi";

const CTASection = () => (
  <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-coffee-dark to-primary relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
    <FadeIn className="relative z-10 max-w-3xl mx-auto px-4 text-center">
      <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">Tunggu Apa Lagi?</p>
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
        Ingin Menikmati Kopi <span className="text-gold">Berkualitas?</span>
      </h2>
      <p className="text-cream/70 text-lg font-lora mb-10 max-w-xl mx-auto">
        Pesan sekarang dan rasakan cita rasa kopi asli Nusantara. Kami siap mengantar ke lokasi Anda!
      </p>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-coffee-dark font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
        Pesan Sekarang via WhatsApp
      </a>
    </FadeIn>
  </section>
);

export default CTASection;
