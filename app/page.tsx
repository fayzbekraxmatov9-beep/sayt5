'use client';
import Link from 'next/link';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Zap,
  Gauge,
  Fuel,
  Compass,
  PhoneCall,
  Menu,
  X,
  ChevronRight,
  Calculator,
  CheckCircle2,
  Calendar,
  Sparkles,
  Award
} from 'lucide-react';

export default function BydChazorLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeColor, setActiveColor] = useState('white');
  const [activeTab, setActiveTab] = useState<'comfort' | 'flagship'>('flagship');

  // Kredit kalkulyatori holatlari
  const [prepaymentPercent, setPrepaymentPercent] = useState(30);
  const [loanMonths, setLoanMonths] = useState(36);

  // Ranglar ro'yxati
  const colors = [
    {
      id: 'white',
      name: 'Delos Oq (White)',
      bgClass: 'bg-white',
      img: 'https://avatars.mds.yandex.net/i?id=4cd6b1ca4c622dacf1c1646627f12b0d81d7f361-8357156-images-thumbs&n=13',
    },
    {
      id: 'grey',
      name: 'Kvant Kulrang (Time Grey)',
      bgClass: 'bg-slate-500',
      img: 'https://avatars.mds.yandex.net/i?id=26833d2262b010ad75e1d5e510340d67372370bd-5269624-images-thumbs&n=13',
    },
    {
      id: 'black',
      name: 'Qora Bazalt (Obsidian Black)',
      bgClass: 'bg-neutral-900',
      img: 'https://avatars.mds.yandex.net/i?id=760db974eda15d278f5acca57ac10b681a42a13e-5661278-images-thumbs&n=13',
    },
    {
      id: 'blue',
      name: 'Moviy Okean (Ocean Blue)',
      bgClass: 'bg-sky-700',
      img: 'https://avatars.mds.yandex.net/i?id=d0571a9617b4ac1be8d7046988ae3b1ec0ad092b-3729790-images-thumbs&n=13',
    },
  ];

  const currentCarImage = colors.find((c) => c.id === activeColor)?.img || colors[0].img;

  // Narxlar (so'mda)
  const prices = {
    comfort: 245000000, // 245 mln so'm (~$19,500)
    flagship: 275000000, // 275 mln so'm (~$21,800)
  };

  const selectedPrice = prices[activeTab];
  const initialPayment = (selectedPrice * prepaymentPercent) / 100;
  const loanAmount = selectedPrice - initialPayment;
  const annualInterestRate = 0.22; // 22% yillik bank foizi
  const monthlyInterestRate = annualInterestRate / 12;
  const monthlyPayment = Math.round(
    (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanMonths))) /
    (Math.pow(1 + monthlyInterestRate, loanMonths) - 1)
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-widest text-cyan-400">BYD</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 tracking-wider">
              CHAZOR DM-i
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {/* Oldingi ko'rinishi:
<a href="#about" className="hover:text-cyan-400 transition">Afzalliklar</a>
*/}

            {/* Yangi ko'rinishi: */}
            <Link href="/afzalliklar" className="hover:text-cyan-400 transition">
              Afzalliklar
            </Link>
            <a href="#tech" className="hover:text-cyan-400 transition">DM-i Texnologiyasi</a>
            <a href="#calculator" className="hover:text-cyan-400 transition">Kalkulyator</a>
            <a href="#specs" className="hover:text-cyan-400 transition">Xususiyatlar</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+998972988788"
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-white"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>+998 (97) 298-87-88</span>
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg text-sm shadow-lg shadow-cyan-500/20 transition active:scale-95"
            >
              Test-Drayvga yozilish
            </button>
          </div>

          {/* Mobil Menyu tugmasi */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobil menyu kontenti */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200">Afzalliklar</a>
            <a href="#tech" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200">DM-i Texnologiyasi</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200">Kalkulyator</a>
            <a href="#specs" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200">Xususiyatlar</a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg mt-2"
            >
              Test-Drayvga yozilish
            </button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Kelajak Gibrid Sedani Oʻzbekistonda
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
              BYD <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">CHAZOR</span> DM-i
            </h1>
            <p className="text-slate-400 text-base sm:text-lg">
              Tejamkorlik, elektr dinamikasi va dabdabali qulaylik. Bitta toʻliq bak va quvvat bilan 1245+ km masofa.
            </p>
          </div>

          {/* Avtomobil surati va rang tanlagich */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-cyan-950/40 bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentCarImage}
                alt="BYD Chazor"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            </div>

            {/* Ranglar palitrasi */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
              <span className="text-sm font-medium text-slate-300">
                Kuzov rangi:{' '}
                <strong className="text-cyan-400">
                  {colors.find((c) => c.id === activeColor)?.name}
                </strong>
              </span>
              <div className="flex items-center gap-3">
                {colors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveColor(c.id)}
                    aria-label={c.name}
                    className={`w-9 h-9 rounded-full ${c.bgClass} border-2 transition-all duration-200 ${activeColor === c.id
                      ? 'border-cyan-400 scale-110 shadow-lg shadow-cyan-500/40'
                      : 'border-slate-700 opacity-70 hover:opacity-100'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Asosiy ko'rsatkichlar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl text-center">
              <Fuel className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-black text-white">3.8 L</div>
              <div className="text-xs text-slate-400 mt-1">100 km uchun yoqilgʻi sarfi</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl text-center">
              <Compass className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-black text-white">1245+ km</div>
              <div className="text-xs text-slate-400 mt-1">Aralash masofa zaxirasi</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl text-center">
              <Gauge className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-black text-white">7.3 soniya</div>
              <div className="text-xs text-slate-400 mt-1">0 dan 100 km/soat tezlanish</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl text-center">
              <Zap className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-black text-white">120 km</div>
              <div className="text-xs text-slate-400 mt-1">Faqat elektr rejimida</div>
            </div>
          </div>
        </div>
      </section>

      {/* DM-i & BLADE BATTERY XUSUSIYATLARI */}
      <section id="tech" className="py-20 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Innovatsion BYD DM-i Texnologiyasi
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Super-gibrid platforma elektr motorini asosiy harakatlantiruvchi kuch sifatida ishlatadi, bu esa benzinni maksimal tejaydi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500/50 transition">
              <ShieldCheck className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">Blade Battery</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dunyodagi eng xavfsiz litiy-temir-fosfatli batareya. Qizib ketishga chidamli, igna bilan teshilganda ham yonib ketmaydi.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500/50 transition">
              <Zap className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">EHS Elektr Tizimi</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Elektr dvigatel va 1.5L Xiaoyun motorining mukammal sinxronligi shahar ichida shovqinsiz va tejamkor harakatni taʼminlaydi.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500/50 transition">
              <Award className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">DiLink Smart Salon</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                12.8 dyuymli aylanuvchi sensorli ekran, 4G Wi-Fi, oʻzbekcha interfeys va masofadan mobil ilova orqali boshqarish tizimi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KREDIT KALKULYATORI */}
      <section id="calculator" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-2">
              <Calculator className="w-4 h-4" /> Moliyalashtirish
            </div>
            <h2 className="text-3xl font-extrabold text-white">Avtokredit Kalkulyatori</h2>
            <p className="text-slate-400 text-sm mt-2">
              Oʻzingizga qulay oylik toʻlov rejasini oldindan hisoblab koʻring
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
            {/* Komplektatsiya tanlash */}
            <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 mb-8">
              <button
                onClick={() => setActiveTab('comfort')}
                className={`flex-1 py-3 text-sm font-semibold rounded-lg transition ${activeTab === 'comfort'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
                  }`}
              >
                Chazor 55KM Comfort (245 mln)
              </button>
              <button
                onClick={() => setActiveTab('flagship')}
                className={`flex-1 py-3 text-sm font-semibold rounded-lg transition ${activeTab === 'flagship'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
                  }`}
              >
                Chazor 120KM Flagship (275 mln)
              </button>
            </div>

            <div className="space-y-6">
              {/* Boshlang'ich to'lov */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">Boshlangʻich toʻlov: {prepaymentPercent}%</span>
                  <span className="text-white font-bold">
                    {(initialPayment / 1000000).toFixed(1)} mln soʻm
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="70"
                  step="5"
                  value={prepaymentPercent}
                  onChange={(e) => setPrepaymentPercent(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Kredit muddati */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">Kredit muddati:</span>
                  <span className="text-white font-bold">{loanMonths} oy ({loanMonths / 12} yil)</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="60"
                  step="12"
                  value={loanMonths}
                  onChange={(e) => setLoanMonths(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Hisoblangan natija */}
            <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-950/60 p-6 rounded-2xl">
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Taxminiy Oylik Toʻlov</div>
                <div className="text-3xl font-extrabold text-cyan-400">
                  {monthlyPayment.toLocaleString()} <span className="text-lg font-normal text-slate-300">soʻm/oy</span>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition shadow-lg shadow-cyan-500/20"
              >
                Arizani Rasmiylashtirish
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-white tracking-widest">BYD</span>
            <span>Chazor DM-i Rasmiy dilerlik platformasi</span>
          </div>
          <div>© {new Date().getFullYear()} Barcha huquqlar himoyalangan.</div>
        </div>
      </footer>

      {/* TEST-DRAYV MODAL OYNASI */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-2xl p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white mb-1">Test-Drayvga yozilish</h3>
            <p className="text-xs text-slate-400 mb-6">
              Maʼlumotlaringizni qoldiring, mutaxassisimiz 15 daqiqada bogʻlanadi.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Arizangiz qabul qilindi! Tez orada mutaxassis bog'lanadi.");
                setIsModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">F.I.Sh.</label>
                <input
                  required
                  type="text"
                  placeholder="Ali Valiyev"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Telefon raqam</label>
                <input
                  required
                  type="tel"
                  placeholder="+998 90 123 45 67"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Shahar / Dilerlik markazi</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400">
                  <option>Toshkent — BYD Sergeli</option>
                  <option>Toshkent — BYD Oloy</option>
                  <option>Samarqand markazi</option>
                  <option>Fargʻona markazi</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition mt-2"
              >
                Tasdiqlash va Yuborish
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}