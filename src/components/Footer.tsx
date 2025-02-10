import Image from 'next/image';
import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="relative w-full p-6 text-white text-center font-abhaya mt-48">
      {/* Background with transparency */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-[-1]"></div>

      <div className="flex flex-wrap justify-around items-start gap-10 md:gap-16">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image src="/logo.png" alt="Ecstasia Logo" width={220} height={220} />
        </div>

        {/* Contacts */}
        <div className="text-lg font-extralight">
          <h2 className="font-bold text-5xl font-abhaya">Contacts</h2>
          <div className="mt-4 space-y-2 font-ameda">
            <p>ecstasia2024.uemk@gmail.com</p>
            <p>Rayyan Sarfaraz: 9832980351</p>
            <p>Nitanjan Saha: 9832980351</p>
            <p>Meghanirna Banerjee: 9832980351</p>
          </div>
        </div>

        {/* Socials */}
        <div className="text-lg">
          <h2 className="font-bold text-5xl font-abhaya">Socials</h2>
          <div className="mt-4 space-y-2 font-ameda">
            <div className="mt-4 font-ameda flex gap-5">
              <FaInstagram className="text-2xl" />
              <FaYoutube className="text-2xl" />
              <FaFacebook className="text-2xl" />
              <FaLinkedin className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="text-lg">
          <h2 className="font-bold text-5xl font-abhaya">Map</h2>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="200"
              height="150"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
