"use client";

import {  Loader, MapPin } from 'lucide-react'; // ลงเพิ่ม: npm install lucide-react
import CardLocationList from '../../components/card';
import { useHomeViewModel } from './homeViewModel';


export default function Home() {

const {keyword, setKeyword, dataPlaces, loading} = useHomeViewModel();


return (
<div className="min-h-screen bg-gray-50">
  {/* ================= HERO ================= */}
 <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-gray-50">
  {/* background base */}
  <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-700 to-gray-50" />




  {/* content */}
  <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      <span className="block animate-fade-up">
        อยู่ในกรุงเทพมหานคร
      </span>
      <span className="block text-blue-400 animate-fade-up animate-delay-200">
       แต่มีทะเบียนบ้านอยู่ต่างจังหวัด
      </span>
      <span className="block animate-fade-up animate-delay-400">
        ท่านสามารถใช้สิทธิเลือกตั้งล่วงหน้าได้
      </span>
    </h1>

    <p className="mt-6 text-white/80 text-lg animate-fade-up animate-delay-600">
ค้นหาสถานที่เลือกตั้งล่วงหน้าในกรุงเทพมหานคร
    </p>
    {/* SEARCH */}
<div className="mt-10 w-full max-w-2xl mx-auto px-4 animate-fade-up animate-delay-800">
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <MapPin className="h-5 w-5 text-gray-400" />
    </div>
    <input
      type="text"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      placeholder="เช่น เขตบางนา, ใกล้ BTS อโศก, ห้วยขวาง"
      className="
        w-full
        pl-11 pr-4 py-4
        rounded-2xl
        bg-white
        text-gray-800
        placeholder:text-gray-400
        shadow-xl
        outline-none
        focus:ring-4 focus:ring-blue-400/30
        transition
      "
    />
  </div>
</div>

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

