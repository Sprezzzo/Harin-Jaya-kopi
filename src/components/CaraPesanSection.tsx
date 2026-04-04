import { ShoppingBag, MousePointerClick, MessageCircle, Package } from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
  { icon: ShoppingBag, num: "01", title: "Pilih Produk", desc: "Lihat katalog produk kopi kami dan pilih yang Anda suka" },
  { icon: MousePointerClick, num: "02", title: "Klik Pesan", desc: "Klik tombol 'Pesan via WhatsApp' pada produk pilihan" },
  { icon: MessageCircle, num: "03", title: "Chat Admin", desc: "Anda akan terhubung langsung dengan admin kami di WhatsApp" },
  { icon: Package, num: "04", title: "Dikirim ke Lokasi", desc: "Pesanan diproses dan dikirim langsung ke alamat Anda" },
];

const CaraPesanSection = () => (
  <section id="cara-pesan" className="py-20 md:py-28 bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn className="text-center mb-14">
        <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">Mudah & Cepat</p>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold">
          Cara <span className="text-gold">Pemesanan</span>
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <FadeIn key={s.num} delay={i * 150}>
            <div className="relative text-center group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-primary-foreground/20" />
              )}
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110 relative">
                <s.icon className="h-8 w-8 text-gold" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-coffee-dark text-xs font-bold flex items-center justify-center">
                  {s.num}
                </span>
              </div>
              <h3 className="font-playfair text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-primary-foreground/70 text-sm font-lora">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default CaraPesanSection;
