// components/RightSidebar.tsx

export default function RightSidebar() {
  return (
    <aside className="space-y-4 bg-white p-4 hidden lg:block w-60">
      {/* User Info Card */}
      <div className="w-full space-y-4 rounded-lg bg-white p-4 text-sm shadow">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
            <svg
              className="h-8 w-8 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.6h19.2v-2.6c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-800">ksvanquy1</span>
            <span title="Cảnh báo">
              <svg
                className="h-4 w-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 6h2v5H9V6zm0 6h2v2H9v-2z" />
              </svg>
            </span>
          </div>
          <span className="text-xs font-medium text-green-600">
            🟢 Lính mới
          </span>
        </div>

        <div className="space-y-1 text-gray-700">
          <div>
            Trả lời hay nhất{" "}
            <span className="font-semibold text-yellow-500">🏅 0</span>
          </div>
          <div>
            Điểm: <span className="font-bold text-black">50</span>
          </div>
          <div className="text-xs text-gray-500">
            Cần thêm <span className="font-semibold text-black">50 điểm</span>{" "}
            để thăng hạng
          </div>
          <div className="flex items-center gap-1 text-xs text-green-600">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4l5-5-1.4-1.4L9 11.2 7.4 9.6 6 11l3 3z" />
            </svg>
            Quan tâm
          </div>
        </div>
      </div>

      {/* Bulletin Card */}
      <div className="w-full rounded-lg bg-white p-4 text-sm shadow">
        <h3 className="text-center text-base font-semibold text-gray-800 mb-3">
          📋 Bảng tin
        </h3>
        <hr className="mb-3 border-t border-gray-300" />
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2 text-rose-500">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v10h10V5H5z" />
              </svg>
            </div>
            Discord Hoidap247
          </li>
          <li className="flex items-center gap-2 text-rose-500">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 00-8 8v8h8v-8H4V9.5A6 6 0 0110 4a6 6 0 016 5.5V10h-6v8h8v-8a8 8 0 00-8-8z" />
              </svg>
            </div>
            Đại sứ Văn Hóa Đọc
          </li>
          <li className="flex items-center gap-2 text-rose-500">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a1 1 0 00-1 1v12l5-3 5 3V4a1 1 0 00-1-1H5z" />
              </svg>
            </div>
            Gửi đề về Hoidap247
          </li>
        </ul>
      </div>
    </aside>
  );
}
