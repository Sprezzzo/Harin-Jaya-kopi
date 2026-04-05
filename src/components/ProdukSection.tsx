import { MessageCircle } from "lucide-react";
import FadeIn from "./FadeIn";

const WA_LINK = "https://wa.me/6282143600041?text=Halo%2C%20saya%20ingin%20memesan%20";

const products = [
  {
      name: "Kopi Bubuk Original",
    desc: "Kopi bubuk halus dengan aroma khas dan rasa yang mantap. Cocok untuk penyajian tradisional maupun modern.",
    price: "Rp 25.000",
    image: "https://i.imgur.com/Grh8vI1.jpeg",
  },
];

const ProdukSection = () => (
  <section id="produk" className="py-20 md:py-28 bg-secondary/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn className="text-center mb-14">
        <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">Produk Kami</p>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
          Pilihan Kopi <span className="text-primary">Terbaik</span>
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <FadeIn key={p.name} delay={i * 150}>
            <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/40 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 h-full">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-foreground mb-2">{p.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 font-lora leading-relaxed">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Mulai dari</p>
                    <p className="text-lg font-bold text-primary">{p.price}</p>
                  </div>
                  <a
                    href={`${WA_LINK}${encodeURIComponent(p.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-coffee-dark font-semibold text-sm px-4 py-2.5 rounded-full transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Pesan
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ProdukSection;
