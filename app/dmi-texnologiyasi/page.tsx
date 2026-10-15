import Link from 'next/link';
import { ArrowLeft, Cpu, BatteryCharging, Gauge, Zap, Flame, CheckCircle2 } from 'lucide-react';

export default function DmiTechnologyPage() {
  const modes = [
    {
      title: "EV Mode (Sof elektr)",
      desc: "Shahar ichida 120 km gacha faqat akkumulyator hisobiga harakatlanadi. Benzin motor umuman ishlamaydi, mutlaqo shovqinsiz va tejamkor.",
      badge: "Shahar rejimi",
    },
    {
      title: "HEV Series Mode (Ketma-ket gibrid)",
      desc: "Batareya quvvati kamayganda, benzinli 1.5L dvigatel faqat generator vazifasini bajarib, elektr motorini quvvatlaydi. G'ildiraklar hali ham elektr kuchi bilan aylanadi.",
      badge: "Tirbandliklar uchun",
    },
    {
      title: "HEV Parallel Mode (Parallel gibrid)",
      desc: "Trassada yoki keskin quvib o'tishda (overtaking) benzin motor va elektr motor bir vaqtda g'ildiraklarga to'liq quvvat yetkazib beradi.",
      badge: "Maksimal quvvat",
    },
    {
      title: "Dvigatelning to'g'ridan-to'g'ri uzatmasi",
      desc: "Yuqori tezlikda doimiy harakatlanganda (trassa), benzin dvigatel to'g'ridan-to'g'ri g'ildiraklarni aylantiradi (eng yuqori FIK zonasi).",
      badge: "Trassa rejimi",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Orqaga qaytish havolasi */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Bosh sahifaga qaytish
        </Link>

        {/* Sarlavha qismi */}
        <div className="mb-12">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800">
            Super Hybrid Architecture
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-3">
            BYD DM-i Super Gibrid Texnologiyasi
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            DM-i — bu "Dual Mode Intelligent" so'zlarining qisqartmasi bo'lib, an'anaviy gibridlardan farqli ravishda asosan elektr tortuv kuchiga asoslangan inqilobiy tizimdir.
          </p>
        </div>

        {/* Texnik bloklar */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <Cpu className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="font-bold text-white text-lg mb-1">EHS Elektr Tizimi</h3>
            <p className="text-xs text-slate-400">
              Ikki motorli parallel arxitektura va yuqori samaradorlikka ega mikrosxemalar to'plami.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <Flame className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="font-bold text-white text-lg mb-1">1.5L Xiaoyun Dvigateli</h3>
            <p className="text-xs text-slate-400">
              43.04% termal samaradorlik (FIK) bilan dunyodagi eng tejamkor benzin dvigatellaridan biri.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <BatteryCharging className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="font-bold text-white text-lg mb-1">Blade LFP Batareya</h3>
            <p className="text-xs text-slate-400">
              Yuqori xavfsizlik va uzoq umr ko'rishga ega bo'lgan litiy-temir-fosfatli modul.
            </p>
          </div>
        </div>

        {/* Ishlash rejimlari */}
        <h2 className="text-2xl font-bold text-white mb-6">4 xil aqlli ishlash rejimi</h2>
        <div className="space-y-4 mb-12">
          {modes.map((mode, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-white">{mode.title}</h3>
                  <span className="text-xs bg-cyan-950 text-cyan-400 border border-cyan-800 px-2.5 py-0.5 rounded-full font-medium">
                    {mode.badge}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{mode.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Natija xulosasi */}
        <div className="bg-gradient-to-r from-cyan-950/60 to-slate-900 border border-cyan-800/50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-3">Natijada siz nimalarga ega boʻlasiz?</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>Har 100 km uchun 3.8L real benzin sarfi</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>To'liq bak va zaryadda 1 245+ km masofa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>Elektromobillardek bir tekis, uzatmasiz tezlanish</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>Oddiy 220V rozetkadan ham zaryadlash imkoni</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}