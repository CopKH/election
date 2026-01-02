import Link from "next/link";
import { MapPinOff } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <MapPinOff className="w-12 h-12 text-gray-400 mb-4" />

      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        ไม่พบสถานที่เลือกตั้ง
      </h1>

      <p className="text-sm text-gray-600 mb-6 max-w-md">
        สถานที่ที่คุณค้นหาอาจไม่มีอยู่ หรือข้อมูลยังไม่ถูกเพิ่มในระบบ
      </p>

      <Link
        href="/home"
        className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
      >
        กลับไปดูรายชื่อทั้งหมด
      </Link>
    </div>
  );
}
