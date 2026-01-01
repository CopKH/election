"use client";
import { TrainFront, Bus, MapPin, TramFront } from "lucide-react";
import { PollingPlace } from "@/models/Place";
import Link from "next/link";

interface Props {
  places: PollingPlace[];
}

type LocationCardProps = {
  data: PollingPlace;
};

const LocationCard = ({ data }: LocationCardProps) => {
  const getTransportIcon = (type: string) => {
    const baseClass = "w-4 h-4";
    switch (type) {
      case "MRT":
        return <TrainFront className={`${baseClass} text-blue-600`} />;
      case "BTS":
        return <TrainFront className={`${baseClass} text-emerald-600`} />;
      case "SRT":
        return <TrainFront className={`${baseClass} text-red-800`} />;
      case "BRT":
        return <TramFront className={`${baseClass} text-emerald-600`} />;
      case "ARL":
        return <TrainFront className={`${baseClass} text-red-600`} />;
      case "BUS":
        return <Bus className="w-4 h-4 text-red-600" />;
      default:
        return null;
    }
  };
  return (
    <div className="group h-full flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* 🔥 เนื้อหา (กินพื้นที่ว่าง) */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
          {data.name}
        </h3>

        <div className="flex items-start gap-1 text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <p className="line-clamp-1">{data.address}</p>
        </div>

        {/* ขนส่ง */}
        {data.transports.length > 0 && (
          <div className="border-t border-gray-50 pt-4">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
              การเดินทางสาธารณะ
            </p>

            <div className="flex flex-wrap gap-2">
              {data.transports.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100"
                >
                  {getTransportIcon(item.type)}
                  <span className="text-xs font-medium text-gray-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA ด้านล่าง */}
        <div className="mt-auto pt-5 hover:border-blue-300 hover:text-blue-600">
          <Link href={`/detail/${data.id}`}>
            <button
              className="
          w-full
          py-2.5
          text-sm
          rounded-xl
          border
          border-gray-200
          text-gray-700
          hover:bg-gray-50
          transition
        "
            >
              ดูรายละเอียดและแผนที่
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function CardLocationList({ places }: Props) {
  if (!places) return null;
  return (
    <div
      className="
      grid
      grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      gap-6
    "
    >
      {places.map((loc) => (
        <LocationCard key={loc.id} data={loc} />
      ))}
    </div>
  );
}
