import { Palette, Globe, TrendingUp, Layout } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Web Design / LP制作',
    description: '世界観設計からビジュアルデザインまで、ブランドの個性を表現します。'
  },
  {
    icon: Palette,
    title: 'UI/UXデザイン',
    description: '使いやすさと美しさを両立した、操作性の高いインターフェースを設計します。'
  },
  {
    icon: Globe,
    title: 'Webサイト運用支援',
    description: 'Next.js + Tailwind + Framer Motionを用いた、高品質なコーディングを実現します。'
  },
  {
    icon: TrendingUp,
    title: 'SEO対策',
    description: '検索エンジン最適化により、ビジネスの成長をサポートします。'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
            What we do
          </h2>
          <div className="w-20 h-1 bg-neutral-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 bg-neutral-50 rounded-2xl hover:bg-neutral-900 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-neutral-900 group-hover:bg-white rounded-xl flex items-center justify-center transition-colors duration-500">
                  <service.icon className="w-7 h-7 text-white group-hover:text-neutral-900 transition-colors duration-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 group-hover:text-white mb-3 transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 group-hover:text-neutral-300 leading-relaxed transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
