import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { number: '01', title: 'Speed', description: '迅速な対応で、\nプロジェクトを前進させます' },
  { number: '02', title: 'Quality', description: '常に改善を重ね、\n最高の品質を追求します' },
  { number: '03', title: 'Vision', description: '想いを形に、\n世界観を表現します' }
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
            About
          </h2>
          <div className="w-20 h-1 bg-neutral-900 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-8">
              HP制作をメインに2026年開業予定
            </p>
            <div className="inline-flex items-center gap-4 px-8 py-5 bg-neutral-900 rounded-2xl">
              <Zap className="w-6 h-6 text-yellow-400" />
              <p className="text-lg md:text-xl text-white font-medium">
                行動スピードと改善が強み
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{feature.number}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed whitespace-pre-line">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
