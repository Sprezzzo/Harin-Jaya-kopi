import { Leaf, ShieldCheck, Heart, Banknote } from "lucide-react";
import FadeIn from "./FadeIn";

const features = [
  { icon: Leaf, title: "Bahan Pilihan", desc: "Biji kopi terbaik dari perkebunan lokal Indonesia" },
  { icon: ShieldCheck, title: "Proses Higienis", desc: "Diproses dengan standar kebersihan tinggi" },
  { icon: Heart, title: "Rasa Autentik", desc: "Cita rasa khas Nusantara yang tak terlupakan" },
  { icon: Banknote, title: "Harga Terjangkau", desc: "Kualitas premium dengan harga bersahabat" },
];

const TentangSection = () => (
  <section id="tentang" className="py-20 md:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">Tentang Kami</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Kopi Berkualitas dari <span className="text-primary">Harin Jaya Kopi</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 font-lora">
            Harin Jaya Kopi adalah usaha kopi lokal yang menghadirkan cita rasa khas Nusantara dengan kualitas terbaik.
            Kami berkomitmen memberikan pengalaman minum kopi yang autentik, aman, dan terjangkau untuk semua kalangan.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 100}>
                <div className="bg-card rounded-xl p-4 border border-border hover:border-gold/40 transition-all duration-300 group hover:shadow-md">
                  <f.icon className="h-6 w-6 text-gold mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-xs">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-cream-dark border border-border">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
                alt="Suasana kopi Harin Jaya"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg">
              <p className="font-playfair text-2xl font-bold">100%</p>
              <p className="text-sm opacity-90">Kopi Asli</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default TentangSection;
