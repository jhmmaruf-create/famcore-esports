/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Target, Flame, Bomb, Zap, Mail, Facebook, Youtube, ChevronDown } from "lucide-react";

const PLAYERS = [
  {
    name: "FAM MARUF",
    role: "IGL + Sniper",
    icon: <Target className="w-4 h-4" />,
    img: "https://i.ibb.co.com/Y79MnJ47/IMG-20260309-155845.jpg"
  },
  {
    name: "FAM HUNTER",
    role: "1st Rusher",
    icon: <Flame className="w-4 h-4" />,
    img: "https://i.ibb.co.com/LzdLZTM9/IMG-20260309-155823.jpg"
  },
  {
    name: "FAM RABBI",
    role: "Supporter + Bomber",
    icon: <Bomb className="w-4 h-4" />,
    img: "https://i.ibb.co.com/LDPwyGG5/IMG-20260309-155905.jpg"
  },
  {
    name: "FAM ABIR",
    role: "2nd Rusher",
    icon: <Zap className="w-4 h-4" />,
    img: "https://i.ibb.co.com/XfHbJKdh/IMG-20260309-155754.jpg"
  }
];

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,60,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-dark/50 to-bg-dark pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <img 
            src="https://i.ibb.co.com/7dv2zJ7s/IMG-20260309-152837.jpg" 
            alt="FAMCORE Logo" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary box-glow mb-8 object-cover mx-auto"
            referrerPolicy="no-referrer"
          />
          
          <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-[0.2em] text-glow">
            FAMCORE
          </h1>
          
          <p className="text-primary font-bold text-lg md:text-xl tracking-[0.3em] mb-10">
            PLAY AS FAMILY, WIN AS LEGENDS
          </p>
          
          <motion.a
            href="#roster"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-sm tracking-widest hover:bg-white hover:text-primary transition-colors duration-300 shadow-[0_0_20px_rgba(255,0,60,0.4)]"
          >
            MEET THE WARRIORS
          </motion.a>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-8"
          >
            Our Story
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium"
          >
            Founded by <span className="text-white font-bold">Junayet Hossen</span>, FAMCORE was established on December 25, 2025. 
            More than just a Free Fire team, we are a family. Our mission is to dominate the battlefield with skill, 
            unity, and courage, carving our names into history as legends. Every member of our squad is 
            prepared to fight with unwavering spirit and tactical excellence.
          </motion.p>
        </div>
      </section>

      {/* Roster Section */}
      <section id="roster" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center md:text-left border-l-4 border-primary pl-6"
        >
          The Squad
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PLAYERS.map((player, index) => (
            <motion.div
              key={player.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-card-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={player.img} 
                  alt={player.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {player.name}
                </h3>
                <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider">
                  {player.icon}
                  <span>{player.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-20 pb-10 px-6 border-t-2 border-primary">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-8">Connect With Us</h2>
          
          <div className="flex items-center gap-4 mb-8 text-gray-400 hover:text-white transition-colors">
            <Mail className="text-primary" size={20} />
            <span className="text-lg">Official Email: md0824299@gmail.com</span>
          </div>
          
          <div className="flex gap-8 mb-12">
            <a href="#" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-bold uppercase tracking-widest">
              <Facebook size={20} />
              <span>Facebook</span>
            </a>
            <div className="w-px h-6 bg-white/20" />
            <a href="#" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-bold uppercase tracking-widest">
              <Youtube size={20} />
              <span>YouTube</span>
            </a>
          </div>
          
          <div className="w-full pt-8 border-t border-white/5">
            <p className="text-xs text-gray-600 uppercase tracking-[0.2em]">
              &copy; 2026 FAMCORE ESPORTS | ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
