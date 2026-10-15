import Link from 'next/link';
import { ShieldCheck, Zap, Award, ArrowLeft, Fuel, CheckCircle } from 'lucide-react';

export default function AfzalliklarPage() {
  const features = [
    {
      title: "Ultra-past yoqilg'i sarfi",
      desc: "100 km masofaga atigi 3.8 litr benzin sarflaydi. EHS gibrid tizimi benzin dvigatelini faqat optimal aylanishlarda ishlatadi.",
      icon: Fuel,
    },
    {
      title: "Blade Battery xavfsizligi",
      desc: "Dunyo bo'yicha eng xavfsiz akkumulyator. Igna bilan teshish, yuqori harorat yoki zarbalarda yonmaydi va portlamaydi.",
      icon: ShieldCheck,
    },
    {
      title: "Yuqori dinamika va quvvat",
      desc: "0 dan 100 km/soat tezlikka atigi 7.3 soniyada erishadi. Elektr motori tufayli lahzali tezlanish hissini beradi.",
      icon: Zap,
    },
    {
      title: "DiLink intellektual tizimi",
      desc: "12.8 dyuymli aylanuvchi sensorli ekran, ovozli boshqaruv va smartfon orqali masofadan konditsioner yoqish imkoniyati.",
      icon: Award,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Orqaga qaytish tugmasi */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Bosh sahifaga qaytish
        </Link>

        {/* Sarlavha */}
        <div className="mb-12">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800">
            BYD Chazor DM-i
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-3">
            Barcha Afzalliklar va Texnologiyalar
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Nega aynan BYD Chazor DM-i Oʻzbekiston yoʻllari uchun eng ideal gibrid sedan hisoblanadi?
          </p>
        </div>

        {/* Afzalliklar ro'yxati */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800 flex items-center justify-center text-cyan-400 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Qo'shimcha qulayliklar bloki */}
        <div className="mt-12 bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Oʻzbekiston sharoitiga moslashtirilgan:</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>AI-92 markali benzin bilan ham muammosiz ishlash</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Rasmiy kafolat: 6 yil yoki 150 000 km</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Oʻzbek tilidagi qulay multimedia interfeysi</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}