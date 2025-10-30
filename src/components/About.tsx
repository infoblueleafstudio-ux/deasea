import { Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
            About
          </h2>
          <div className="w-20 h-1 bg-neutral-900 mx-auto"></div>
        </div>

        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-8">
              HP制作をメインに2026年開業予定
            </p>
            <div className="inline-flex items-center gap-4 px-8 py-5 bg-neutral-900 rounded-2xl">
              <Zap className="w-6 h-6 text-yellow-400" />
              <p className="text-lg md:text-xl text-white font-medium">
                行動スピードと改善が強み
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">01</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Speed</h3>
              <p className="text-neutral-600 leading-relaxed">
                迅速な対応で、<br />プロジェクトを前進させます
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Quality</h3>
              <p className="text-neutral-600 leading-relaxed">
                常に改善を重ね、<br />最高の品質を追求します
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Vision</h3>
              <p className="text-neutral-600 leading-relaxed">
                想いを形に、<br />世界観を表現します
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
