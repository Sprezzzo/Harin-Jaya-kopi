import { Award, Truck, Wallet, Sprout } from "lucide-react";
import FadeIn from "./FadeIn";

const items = [
  { icon: Award, title: "Kualitas Terjamin", desc: "Biji kopi terbaik dengan kontrol kualitas ketat" },
  { icon: Truck, title: "Bisa Antar ke Lokasi", desc: "Pesanan dikirim langsung ke alamat Anda" },
  { icon: Wallet, title: "Harga Bersahabat", desc: "Kualitas premium tanpa menguras kantong" },
  { icon: Sprout, title: "Bahan Pilihan", desc: "100% bahan alami dari perkebunan lokal" },
];

const KeunggulanSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn className="text-center mb-14">
        <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">Kenapa Kami</p>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
          Keunggulan <span className="text-primary">Harin Jaya Kopi</span>
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 120}>
            <div className="text-center p-8 rounded-2xl bg-card border border-border hover:border-gold/40 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <item.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-playfair text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-lora">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default KeunggulanSection;
