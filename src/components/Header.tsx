"use client";

import { useState } from "react";

export default function Header() {
  const [copied, setCopied] = useState(false);

  function handleShareX() {
    const text = encodeURIComponent("你知道你的城市的政治嗎？");
    const url = encodeURIComponent("https://machi-poli-taiwan.vercel.app/?v=2");
    const hashtags = encodeURIComponent("城市政見");
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`,
      "_blank"
    );
  }

  function handleCopyUrl() {
    navigator.clipboard.writeText("https://machi-poli-taiwan.vercel.app/").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <header className="px-4 pt-4">
      <div className="max-w-[480px] mx-auto">
        {/* Win95 視窗 */}
        <div className="win95-window">
          {/* 標題列 */}
          <div className="win95-titlebar">
            <div className="flex items-center gap-1">
              <span className="text-[10px]">■</span>
              <span className="text-[11px] tracking-wide">城市政見.exe</span>
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
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.jpg"
                  alt="城市政見"
                  className="w-12 h-12 object-cover"
                  style={{ imageRendering: "auto" }}
                />
                <h1 className="text-3xl font-bold text-black tracking-tight">
                  城市政見
                </h1>
              </div>
              <p className="text-sm text-gray-700 text-center leading-relaxed">
                AI帶你看，
                <br />
                你的城市政治
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-1">
                <span className="win95-inset-label text-[11px] text-black">
                  ★ AI運營
                </span>
                <span className="win95-inset-label text-[11px] text-black">
                  ◆ 完全中立
                </span>
                <span className="win95-inset-label text-[11px] text-black">
                  ● 全台22縣市對應
                </span>
              </div>
              <div className="win95-inset-label text-[10px] text-gray-600 mt-1 px-3 py-1">
                最後AI更新: 2026.04.07
              </div>
              {/* 分享按鈕 */}
              <div className="flex items-center justify-center gap-2 mt-1">
                <button
                  type="button"
                  className="win95-button text-[11px] h-[28px] px-3"
                  onClick={handleShareX}
                >
                  📢 分享到X
                </button>
                <button
                  type="button"
                  className="win95-button text-[11px] h-[28px] px-3"
                  onClick={handleCopyUrl}
                >
                  {copied ? "✅ 已複製！" : "📋 複製網址"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
