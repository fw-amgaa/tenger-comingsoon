"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6 text-center relative">
      <div className="absolute w-screen h-screen top-0 left-0 overflow-hidden">
        <Image fill src={"/pattern.png"} alt="bg" objectFit="cover" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md mr-[20%]"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent leading-20">
          Coming Soon
        </h1>
        <p className="text-gray-400 mb-[40%]">
          We’re working hard to bring you something amazing. Stay tuned for our
          launch.
        </p>

        <div className="space-y-3 text-gray-300">
          <div className="flex justify-center">
            <MapPin size={24} />
            <span>
              Suite 1902, Eco Tower, 1st khoroo, Sukhbaatar District, 14250,
              Ulaanbaatar, Mongolia
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail size={18} />
            <a
              href="mailto:info@example.com"
              className="hover:text-white transition-colors"
            >
              info@tengercapital.mn
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone size={18} />
            <a
              href="tel:+97699112233"
              className="hover:text-white transition-colors"
            >
              +976 7011-0637
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center gap-6"
        >
          <a
            href="#"
            className="p-2 rounded-full border border-gray-700 hover:border-white transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full border border-gray-700 hover:border-white transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full border border-gray-700 hover:border-white transition-colors"
          >
            <Twitter size={20} />
          </a>
        </motion.div>

        <p className="text-xs text-gray-600 mt-10">
          © {new Date().getFullYear()} Tenger Capital
        </p>
      </motion.div>
    </main>
  );
}
