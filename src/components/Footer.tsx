"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, "0");
      const m = now.getMinutes().toString().padStart(2, "0");
      setTime(`${h}:${m}`);
    }
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  function handleShareX() {
    const text = encodeURIComponent("你知道你的城市的政治嗎？");
    const url = encodeURIComponent("https://machi-poli-taiwan.vercel.app/");
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
    <footer className="mt-auto">
      {/* 免責聲明 */}
      <div className="px-4 pb-2">
        <div className="max-w-[480px] mx-auto">
          <div className="win95-window">
            <div className="win95-titlebar">
              <div className="flex items-center gap-1">
                <span className="text-[10px]">📄</span>
                <span className="text-[11px] tracking-wide">README.txt</span>
              </div>
              <div className="flex items-center gap-[2px]">
                <button type="button" className="win95-titlebar-btn" aria-label="關閉">
                  <span className="text-[11px]">×</span>
                </button>
              </div>
            </div>
            <div className="p-3">
              <p className="text-[11px] text-black leading-relaxed">
                本服務由AI根據公開資訊製作。不推薦任何特定政黨或候選人。
                資訊的正確性請以各官方網站為準。
              </p>
            </div>
          </div>

          {/* 分享按鈕 */}
          <div className="flex items-center justify-center gap-2 mt-2">
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

      {/* Win95 工作列 */}
      <div className="win95-taskbar">
        <div className="max-w-[480px] mx-auto flex items-center justify-between">
          {/* 開始按鈕 */}
          <button type="button" className="win95-start-button">
            <span className="text-[10px]">🏛</span>
            <span className="text-[11px]">城市政見</span>
          </button>

          {/* 中央: 資料來源 */}
          <div className="flex-1 mx-2 overflow-hidden">
            <p className="text-[9px] text-black truncate">
              來源: 中央選舉委員會 / 各縣市政府 / 立法院 / Wikipedia
            </p>
          </div>

          {/* 時鐘 */}
          <div className="win95-inset-label flex items-center gap-1 px-2 py-0.5">
            <span className="text-[10px]">🕐</span>
            <span className="text-[11px] text-black font-mono">{time}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
