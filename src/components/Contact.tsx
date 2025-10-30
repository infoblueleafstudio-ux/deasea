import { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
            Contact
          </h2>
          <div className="w-20 h-1 bg-neutral-900 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            プロジェクトのご相談、お見積もりなど<br className="hidden md:block" />
            お気軽にお問い合わせください
          </p>
        </div>

        <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                <User className="w-4 h-4" />
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                <Mail className="w-4 h-4" />
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                <MessageSquare className="w-4 h-4" />
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-xl font-medium text-lg hover:bg-neutral-800 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {status === 'sending' ? (
                '送信中...'
              ) : status === 'success' ? (
                '送信完了しました！'
              ) : (
                <>
                  送信する
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center">
                お問い合わせありがとうございます。確認次第ご連絡いたします。
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
