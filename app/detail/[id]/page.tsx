import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, MapPin } from "lucide-react";
import { getPlaceById } from "@/hooks/useFetchById";
import PlaceMap from "@/components/free-map";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PlaceDetailPage({ params }: Props) {
  const { id } = await params;
  const place = await getPlaceById(Number(id));
  if (!place) return notFound();

  const hasLocation = place.latitude && place.longitude;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Back */}
        <Link
          href="/home"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          กลับไปหน้ารายการ
        </Link>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {place.name}
          </h1>
          <div className="flex items-start gap-2 text-gray-600">
            <MapPin className="w-5 h-5 mt-0.5" />
            <p>{place.address}</p>
          </div>
        </div>

        {/* MAP (Hero Section) */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-4 md:p-6">
          {hasLocation ? (
            <>
              <PlaceMap
                lat={place.latitude}
                lng={place.longitude}
                name={place.name}
              />

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center w-full gap-2
             rounded-xl border border-gray-300 bg-white py-3
             text-sm font-semibold text-gray-700
             hover:bg-gray-50 transition"
              >
                เปิดนำทางใน Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-[320px] rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-center px-6">
              <MapPin className="w-8 h-8 text-gray-400 mb-3" />
              <p className="text-sm font-medium text-gray-700">
                แผนที่กำลังอยู่ระหว่างการอัปเดต
              </p>
              <p className="mt-1 text-xs text-gray-500">
                จะเพิ่มพิกัดสถานที่นี้ในเร็ว ๆ นี้
              </p>
            </div>
          )}
        </div>

        {/* Transport */}
        {place.transports.length > 0 && (
          <div className="mt-8 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              การเดินทางสาธารณะ
            </h2>

            <div className="flex flex-wrap gap-3">
              {place.transports.map((t, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.bora.dopa.go.th"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-10 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition"
          >
            ไปลงทะเบียนเลือกตั้งล่วงหน้า (เว็บไซต์ทางการ)
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
