"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (address: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [address, setAddress] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (address.trim()) {
      onSearch(address.trim());
    }
  }

  function handleLocationClick() {
    onSearch("台北市");
  }

  return (
    <section className="px-4 pt-3">
      <div className="max-w-[480px] mx-auto">
        {/* Win95 視窗 */}
        <div className="win95-window">
          {/* 標題列 */}
          <div className="win95-titlebar">
            <div className="flex items-center gap-1">
              <span className="text-[10px]">🔍</span>
              <span className="text-[11px] tracking-wide">搜尋 - 城市政見</span>
            </div>
            <div className="flex items-center gap-[2px]">
              <button type="button" className="win95-titlebar-btn" aria-label="最小化">
                <span className="mb-[2px]">_</span>
              </button>
              <button type="button" className="win95-titlebar-btn" aria-label="最大化">
                <span className="text-[9px]">□</span>
              </button>
              <button type="button" className="win95-titlebar-btn" aria-label="關閉">
                <span className="text-[11px]">×</span>
              </button>
            </div>
          </div>

          {/* 視窗內容 */}
          <div className="p-4">
            {/* 注意事項 */}
            <div className="win95-inset-label mb-4 p-2 text-center">
              <p className="text-[11px] text-black leading-relaxed">
                本服務由AI自動蒐集與整理公開資訊。
                <br />
                不含任何人為編輯或政治意圖。
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <label className="text-[12px] text-black font-bold">
                請輸入縣市名稱：
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="例：台北市 / 高雄市 / 新竹縣 / 花蓮縣"
                className="win95-input w-full h-[32px] text-[13px] text-black placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="win95-button w-full h-[36px] text-[14px] font-bold text-black mt-1"
              >
                搜尋
              </button>
            </form>

            <div className="mt-2 border-t border-gray-400 pt-2">
              <button
                type="button"
                onClick={handleLocationClick}
                className="win95-button w-full h-[32px] text-[13px] text-black flex items-center justify-center gap-2"
              >
                📍 以台北市搜尋（範例）
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
