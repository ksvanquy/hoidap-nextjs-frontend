"use client";

import { useState } from "react";

export default function MainContent() {
  const [selectedClass, setSelectedClass] = useState("Tất cả");
  const [selectedStatus, setSelectedStatus] = useState("Tất cả");
  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  const classOptions = ["Tất cả", "Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4"];
  const statusOptions = ["Tất cả", "Chưa trả lời", "Đã trả lời", "Lần đầu hỏi"];

  return (
    <section className="flex-1 p-6 bg-gray-50 space-y-4">
      {/* Dropdowns */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Chọn lớp */}
        <div className="relative">
          <button
            onClick={() => setShowClassDropdown(!showClassDropdown)}
            className="bg-white border border-gray-300 px-3 py-1 rounded-md text-sm flex items-center space-x-2"
          >
            <span>{selectedClass}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {showClassDropdown && (
            <ul className="absolute z-10 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-md p-1 text-sm">
              {classOptions.map((option) => (
                <li
                  key={option}
                  className="cursor-pointer px-3 py-1 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedClass(option);
                    setShowClassDropdown(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Chọn trạng thái */}
        <div className="relative">
          <button
            onClick={() => setShowStatusDropdown(!showStatusDropdown)}
            className="bg-white border border-gray-300 px-3 py-1 rounded-md text-sm flex items-center space-x-2"
          >
            <span>{selectedStatus}</span>
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {showStatusDropdown && (
            <ul className="absolute z-10 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-md p-1 text-sm">
              {statusOptions.map((option) => (
                <li
                  key={option}
                  className="cursor-pointer px-3 py-1 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedStatus(option);
                    setShowStatusDropdown(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Nút x2 */}
        <button className="bg-gray-200 px-3 py-1 rounded text-sm font-medium text-gray-600">
          x2
        </button>
      </div>

      {/* Nút câu hỏi mới */}
      <div>
        <button className="w-full bg-green-500 text-white py-2 rounded-md font-semibold text-sm hover:bg-green-600 transition">
          +22 câu hỏi mới nhất
        </button>
      </div>

      {/* Danh sách câu hỏi */}
      <div className="space-y-3">
        <div className="bg-white rounded-md shadow p-3 space-y-2">
          <div className="flex items-center gap-2">
            <img
              src="/images/avatar.png"
              alt="avatar"
              className="w-8 h-8 rounded-md border"
            />
            <div className="text-sm text-gray-700 font-medium flex items-center gap-1 flex-wrap">
              <span className="text-black font-semibold">Vật Lý</span> ·
              <span>L12</span> ·<span>40đ</span> ·
              <span className="text-gray-500">2 giờ trước</span>
              <span className="text-gray-400 text-xs flex items-center gap-1">
                👁‍🗨 1
              </span>
            </div>
          </div>

          <div className="ml-10 space-y-2">
            <div className="text-sm text-gray-800">
              giúp với câu dungvsaiii a
            </div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                <img
                  src="/images/userAnswer1.jpg"
                  alt="avatar nhỏ"
                  className="w-6 h-6 rounded-full border"
                />
                <img
                  src="/images/userAnswer2.jpg"
                  alt="avatar nhỏ"
                  className="w-6 h-6 rounded-full border"
                />
              </div>
              <button className="text-sm px-4 py-1 border border-blue-300 text-blue-600 rounded hover:bg-blue-50 transition">
                Trả lời
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
