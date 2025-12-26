"use client";
import React, { use } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ChevronLeft, MapPin, Navigation, TrainFront, Bus, Bike } from 'lucide-react';

// โหลดคอมโพเนนต์แผนที่แบบ Client-side Only
const Map = dynamic(() => import('../../../components/free-map'), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center">กำลังโหลดแผนที่...</div>
});

export default function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // ข้อมูลตัวอย่าง (ในโปรเจกต์จริงดึงจาก Database)
  const data = {
    id: id,
    name: "สำนักงานเขตสาทร",
    image: `picsum.photos{id}/1000/600`,
    lat: 13.7181,
    lng: 100.5150,
    address: "123 ถนนสุขุมวิท เขตวัฒนา กรุงเทพฯ 10110",
    transports: [
      { type: 'bts', label: 'BTS อโศก (เดิน 5 นาที)' },
      { type: 'mrt', label: 'MRT สุขุมวิท' },
      { type: 'win', label: 'วินหน้าปากซอย' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link href="/home" className="p-2 hover:bg-gray-100 rounded-full transition-all">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="font-bold text-lg truncate">{data.name}</h1>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          
          {/* ข้อมูลสถานที่ (ฝั่งซ้าย) */}
          <div className="space-y-6">
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-video">
              <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm space-y-6">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-2">{data.name}</h2>
                <p className="flex items-center gap-2 text-gray-500">
                  <MapPin className="w-5 h-5 text-red-500" />
                  {data.address}
                </p>
              </div>

              {/* ส่วนการเดินทาง (Icons) */}
              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">การเดินทางใกล้เคียง</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.transports.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                      {item.type === 'bts' && <TrainFront className="w-5 h-5 text-emerald-600" />}
                      {item.type === 'bus' && <Bus className="w-5 h-5 text-blue-600" />}
                      {item.type === 'win' && <Bike className="w-5 h-5 text-orange-500" />}
                      <span className="text-sm font-medium text-black">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={`www.google.com{data.lat},${data.lng}`}
                target="_blank"
                className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
              >
                <Navigation className="w-5 h-5" />
                นำทางด้วย Google Maps
              </a>
            </div>
          </div>

          {/* ส่วนแผนที่ Leaflet (ฝั่งขวา) */}
          <div className="h-[500px] lg:h-full min-h-[500px] sticky top-24 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <Map lat={data.lat} lng={data.lng} name={data.name} />
          </div>

        </div>
      </main>
    </div>
  );
}
