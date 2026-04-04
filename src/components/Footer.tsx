import { MapPin, Phone, Instagram } from "lucide-react";
import logo from "../assets/logo.jpg"; // pastikan path sesuai

const Footer = () => (
  <footer id="kontak" className="bg-coffee-dark text-cream py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="Harin Logo"
              className="h-10 w-auto object-contain drop-shadow-md"
            />
            <span className="font-playfair text-xl font-bold">
              Harin Jaya Kopi
            </span>
          </div>

          <p className="text-cream/60 text-sm font-lora leading-relaxed mb-4">
            Menghadirkan cita rasa kopi asli Nusantara dengan kualitas terbaik untuk semua kalangan.
          </p>

          <p className="text-gold text-sm font-medium">
            🚚 Melayani pengiriman ke lokasi Anda
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-playfair text-lg font-bold mb-4">Kontak</h3>
          <div className="space-y-3">
            
            <a
              href="https://wa.me/6282143600041"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors text-sm"
            >
              <Phone className="h-4 w-4" />
              +62 821-4360-0041 (WhatsApp)
            </a>

            <a
              href="https://instagram.com/harinjayakopi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors text-sm"
            >
              <Instagram className="h-4 w-4" />
              @harinjayakopi
            </a>

            <div className="flex items-start gap-3 text-cream/60 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>
                Jl. Sedalem, Pondok, Manjung, Panekan, Kabupaten Magetan, Jawa Timur
              </span>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-playfair text-lg font-bold mb-4">Menu</h3>
          <div className="space-y-2">
            {["Beranda", "Tentang", "Produk", "Cara Pesan"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(" ", "-")}`}
                className="block text-cream/60 hover:text-gold transition-colors text-sm"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* GOOGLE MAPS EMBED */}
      <div className="mb-12">
        <h3 className="font-playfair text-lg font-bold mb-4 text-center">
          Lokasi Kami
        </h3>
        <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-cream/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1775273543589!6m8!1m7!1sxiBNWHss8bpbdqMAOaDCZQ!2m2!1d-7.622433912521276!2d111.2815590785378!3f223.93497667847956!4f-3.1102603800402875!5f0.7820865974627469"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-cream/10 pt-8 text-center">
        <p className="text-cream/40 text-sm">
          &copy; {new Date().getFullYear()} Harin Jaya Kopi. Semua hak dilindungi.
        </p>
      </div>

    </div>
  </footer>
);

export default Footer;