import { useRef } from "react";
import { Search, Pencil, Code, Rocket } from "lucide-react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Discovery（対話）",
    description:
      "ヒアリングを通して、クライアントの“まだ言語化できていない想い”を深く理解し、核となる世界観を抽出します。",
  },
  {
    icon: Pencil,
    title: "Design（世界観の設計）",
    description:
      "抽出した世界観を整理し、UI / UX やビジュアルデザインとして形にしていきます。",
  },
  {
    icon: Code,
    title: "Develop（実装）",
    description:
      "最新技術（Next.js + Tailwind + Framer Motion）を用いて、想いが体験できる Web として具現化します。",
  },
  {
    icon: Rocket,
    title: "Launch（公開）",
    description:
      "完成ではなく“始まり”。改善サイクルとともに、未来へ育てていきます。",
  },
];

type Step = (typeof steps)[number];

function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-25% 0px -25% 0px",
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white p-8 rounded-2xl shadow-lg h-full"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center">
          <step.icon className="w-8 h-8 text-white" />
        </div>

        <div className="space-y-2">
          <div className="text-sm font-bold text-neutral-500">
            STEP {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="text-2xl font-bold text-neutral-900">{step.title}</h3>
        </div>

        <p className="text-neutral-600 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Sectionタイトルのフェードイン */}
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
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}