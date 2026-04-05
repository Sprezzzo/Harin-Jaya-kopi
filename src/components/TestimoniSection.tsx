import { Star, Quote } from "lucide-react";
import FadeIn from "./FadeIn";

const testimonials = [
  { name: "Budi Santoso", text: "Ternyata kopinya enak. Walaupun murah tapi menurut saya pas di lidah saya. Dengan pahitnya yg pas juga menambah kenikmatan. Udah coba macem2 kopi murah yg di jual di shopee tapi menurutku ini yg paling enak.", location: "Jakarta" },
  { name: "Siti Rahayu", text: "Packing bagus rapi dan aman, dengan bublewrap sehingga barang diterima dengan baik sesuai deskripsi. Ukuran pas 500gr.sudah dua kali beli disini. Biasanya saya campur dengan kopi kapal api, top, atau gajah. Lebih nikmat. Thanks seller dan pak kurir.", location: "Bandung" },
  { name: "Ahmad Rizki", text: "Paket dah sampai sesuai pesanan...exp aman...cocok rasa dan harganya...Makasih Kak...🙏", location: "Surabaya" },
];

const TestimoniSection = () => (
  <section className="py-20 md:py-28 bg-secondary/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn className="text-center mb-14">
        <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">Testimoni</p>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
          Kata <span className="text-primary">Pelanggan</span>
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 150}>
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-gold/40 hover:shadow-lg transition-all duration-300 relative hover:-translate-y-1 h-full">
              <Quote className="h-8 w-8 text-gold/30 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground font-lora leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.location}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default TestimoniSection;
