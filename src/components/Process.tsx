import { Search, Pencil, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'ブランドの想いや目標を深く理解し、プロジェクトの方向性を定めます。'
  },
  {
    icon: Pencil,
    title: 'Design',
    description: '世界観に合わせたビジュアルデザインとUI/UXを設計します。'
  },
  {
    icon: Code,
    title: 'Develop',
    description: '最新技術を用いて、美しく機能的なWebサイトを構築します。'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'テストと最適化を経て、確実にローンチします。'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
            Process
          </h2>
          <div className="w-20 h-1 bg-neutral-900 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-bold text-neutral-500">
                      STEP {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-neutral-300 -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-300 rounded-full"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
