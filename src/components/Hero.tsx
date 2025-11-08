import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-700/20 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-bonheur text-5xl md:text-8xl lg:text-[9rem] text-white tracking-wide leading-none whitespace-nowrap"
          >
            Design × Code × Emotion
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-neutral-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            世界観をデザインで可視化する。
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="text-base md:text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed pt-4"
          >
            経営者・事業者の「想い」を0→1へ。<br className="hidden md:block" />
            ブランドの世界観に合わせてデザインとUI/UXを設計します。
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="pt-8"
          >
            <button
              onClick={scrollToContact}
              data-cursor="dark"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 rounded-full font-medium text-lg hover:bg-neutral-100 transition-all duration-300 hover:gap-4 hover:shadow-xl cursor-hover magnetic-target"
            >
              Contact
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
