"use client";

import {  Loader, MapPin, Navigation } from 'lucide-react'; // ลงเพิ่ม: npm install lucide-react
import CardLocationList from '../../components/card';
import { useHomeViewModel } from './homeViewModel';


export default function Home() {

const {keyword, setKeyword, dataPlaces, loading} = useHomeViewModel();


return (
<div className="min-h-screen bg-gray-50">
  {/* ================= HERO ================= */}
  <section className="relative min-h-[75vh] flex items-center overflow-hidden">
    {/* background */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 animate-gradient" />
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]" />

    {/* content */}
    <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        <span className="block animate-fade-up">
          อยู่กรุงเทพฯ
        </span>
        <span className="block text-blue-400 animate-fade-up animate-delay-200">
          แต่ทะเบียนบ้านต่างจังหวัด?
        </span>
        <span className="block animate-fade-up animate-delay-400">
          คุณเลือกตั้งล่วงหน้าได้
        </span>
      </h1>

      <p className="mt-6 text-white/80 text-lg animate-fade-up animate-delay-600">
        ไม่ต้องกลับบ้าน ก็คะแนนเสียงยังนับที่จังหวัดของคุณ
      </p>

      {/* SEARCH */}
      {/* <div className="mt-10 w-full max-w-2xl mx-auto px-4 animate-fade-up animate-delay-800">
        <p className="mb-3 text-white/70 text-sm tracking-wide">
          ค้นหาสถานที่เลือกตั้งล่วงหน้าในกรุงเทพฯ
        </p>

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          </div>

          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="เช่น บางนา, ใกล้ BTS อโศก, เขตห้วยขวาง"
            className="block w-full pl-11 pr-32 py-4 bg-white border border-gray-200 rounded-2xl shadow-xl
              focus:ring-4 focus:ring-blue-400/30 outline-none text-gray-700 placeholder:text-gray-400"
          />
        </div>

        <p className="mt-3 text-white/70 text-sm">
          🚆 แสดงสถานที่ที่เดินจากรถไฟฟ้าได้ประมาณ 15–20 นาที
        </p>
      </div> */}
    </div>
  </section>

  {/* ================= CONTENT ================= */}
  <section className="-mt-24 bg-gray-50 rounded-t-[56px] pt-32">
    <div className="max-w-7xl mx-auto px-6 pb-16">
      {loading && <Loader />}

      {!loading && dataPlaces?.map((area) => (
        <section key={area.id} className="mb-16">
          <h2 className="mb-8 text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-600" />
            {area.name}
          </h2>

          <CardLocationList places={area.pollingPlaces} />
        </section>
      ))}
    </div>
  </section>
</div>

);

}

