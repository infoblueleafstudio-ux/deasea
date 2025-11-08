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
      <div className="w-full px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
            About
          </h2>
          <div className="w-20 h-1 bg-neutral-900 mx-auto"></div>
        </motion.div>

        {/* Short ver */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-[1200px] space-y-12 text-center"
        >

          {/* サブコピー */}
          <p className="text-xl md:text-2xl text-neutral-700">
            言葉になっていない本音やこだわりを掘り起こし、世界観としてデザインする。
          </p>

          {/* Pullquote（キービジュアル） */}
          <blockquote className="text-3xl md:text-5xl font-bold tracking-wide leading-snug text-neutral-900 px-6 py-12 border-y border-neutral-200">
            「デザインをするのではなく、想いが形になる瞬間をつくる。」
          </blockquote>

          {/* コンセプト一句 */}
          <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed">
            世界観 × UI / UX × Emotion。Web に “魂” を宿す。
          </p>

          {/* ボタン */}
          <div className="inline-flex items-center gap-4 px-10 py-5 bg-neutral-900 rounded-2xl cursor-pointer hover:bg-neutral-800 transition-colors">
            <Zap className="w-6 h-6 text-yellow-400" />
            <span className="text-lg md:text-xl text-white font-medium">
              行動スピードと改善が強み
            </span>
          </div>
        </motion.div>

        {/* Features */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 pt-20">
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
    </section>
  );
}