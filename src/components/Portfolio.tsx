import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Yakitori Haku',
    category: '高級焼き鳥店',
    description: '映像的なUIで表現した、高級感溢れる焼き鳥店のWebサイト',
    url: 'https://yakitorihaku.vercel.app/',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    title: 'こどもの森幼稚園',
    category: '教育機関Web',
    description: '優しさと柔らかさを表現した、安心感のある幼稚園サイト',
    url: 'https://adago-1-q517.vercel.app/',
    gradient: 'from-emerald-400 to-teal-500'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-neutral-900 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
                data-cursor="dark"
                className="group block relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-hover magnetic-target"
            >
              <div className={`h-64 md:h-80 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <ExternalLink className="w-5 h-5 text-neutral-900" />
                </div>
              </div>

              <div className="p-8">
                <div className="text-sm text-neutral-500 mb-2 font-medium">
                  {project.category}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral-900 to-neutral-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
