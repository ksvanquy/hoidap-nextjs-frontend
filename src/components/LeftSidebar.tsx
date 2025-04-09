import Link from "next/link";

export default function LeftSidebar() {
  return (
    <aside className="hidden lg:block w-64 px-4 py-4 bg-white h-[calc(100vh-64px)] sticky top-16">
      <nav className="space-y-3 text-sm text-gray-700">
        <Link href="/" className="block hover:text-blue-600 font-medium">
          🏠 Trang chủ
        </Link>
        <Link href="/mon-toan" className="block hover:text-blue-600">
          📐 Môn Toán
        </Link>
        <Link href="/mon-van" className="block hover:text-blue-600">
          📖 Môn Văn
        </Link>
        <Link href="/mon-anh" className="block hover:text-blue-600">
          🇬🇧 Môn Tiếng Anh
        </Link>
        <Link href="/mon-ly" className="block hover:text-blue-600">
          💡 Môn Vật Lý
        </Link>
        <Link href="/mon-hoa" className="block hover:text-blue-600">
          ⚗️ Môn Hóa Học
        </Link>
        <Link href="/mon-sinh" className="block hover:text-blue-600">
          🌿 Môn Sinh Học
        </Link>
        <Link href="/mon-su" className="block hover:text-blue-600">
          🏛️ Môn Lịch Sử
        </Link>
        <Link href="/mon-dia" className="block hover:text-blue-600">
          🌍 Môn Địa Lý
        </Link>
        <Link href="/mon-gdcd" className="block hover:text-blue-600">
          🧭 Giáo Dục Công Dân
        </Link>
      </nav>
    </aside>
  );
}
