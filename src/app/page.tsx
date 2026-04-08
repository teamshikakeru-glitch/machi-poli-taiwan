"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ResultSection from "@/components/ResultSection";
import Footer from "@/components/Footer";
import { triviaList } from "@/data/trivia";
import { findRegion } from "@/data/regions";
import { RegionData } from "@/types/politics";

function getDayOfYear(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function formatDateForTrivia(): string {
  const now = new Date();
  return `${now.getMonth() + 1}月${now.getDate()}日`;
}

type SearchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "result"; data: RegionData; address: string }
  | { status: "unsupported" };

export default function Home() {
  const [searchState, setSearchState] = useState<SearchState>({
    status: "idle",
  });

  function handleSearch(address: string) {
    setSearchState({ status: "loading" });

    setTimeout(() => {
      const regionData = findRegion(address);
      if (regionData) {
        setSearchState({ status: "result", data: regionData, address });
      } else {
        setSearchState({ status: "unsupported" });
      }
    }, 500);
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#008080]">
      <Header />
      <SearchBar onSearch={handleSearch} />

      <main className="flex-1">
        {searchState.status === "idle" && (
          <div className="max-w-[480px] mx-auto px-4 py-6">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img
                src="/logo.jpg"
                alt="城市政見"
                className="w-20 h-20 object-cover"
                style={{ imageRendering: "auto" }}
              />
            </div>

            {/* 簡單3步驟 - Win95視窗 */}
            <div className="win95-window">
              <div className="win95-titlebar">
                <div className="flex items-center gap-1">
                  <span className="text-[10px]">📋</span>
                  <span className="text-[11px] tracking-wide">使用方法.txt</span>
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

              <div className="p-4">
                <h3 className="text-[16px] font-bold text-black mb-4 text-center">
                  簡單3步驟
                </h3>
                <div className="flex flex-col gap-4">
                  {/* 步驟1 */}
                  <div className="flex items-center gap-3">
                    <div className="win95-inset-label flex-shrink-0 w-10 h-10 flex items-center justify-center">
                      <span className="text-[18px] font-bold text-black font-[family-name:var(--font-press-start)]">1</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">輸入地址</p>
                      <p className="text-[11px] text-gray-700 mt-0.5">
                        請輸入您所在的縣市名稱
                      </p>
                    </div>
                  </div>

                  {/* 步驟2 */}
                  <div className="flex items-center gap-3">
                    <div className="win95-inset-label flex-shrink-0 w-10 h-10 flex items-center justify-center">
                      <span className="text-[18px] font-bold text-black font-[family-name:var(--font-press-start)]">2</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">AI自動蒐集</p>
                      <p className="text-[11px] text-gray-700 mt-0.5">
                        AI從公開資訊中整理政治資訊
                      </p>
                    </div>
                  </div>

                  {/* 步驟3 */}
                  <div className="flex items-center gap-3">
                    <div className="win95-inset-label flex-shrink-0 w-10 h-10 flex items-center justify-center">
                      <span className="text-[18px] font-bold text-black font-[family-name:var(--font-press-start)]">3</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-black">城市政治一目瞭然</p>
                      <p className="text-[11px] text-gray-700 mt-0.5">
                        縣市長、立委、議會、選舉一覽顯示
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 支援地區標籤 */}
            <div className="mt-4 flex justify-center">
              <div className="win95-inset-label text-[11px] text-black text-center px-4 py-1">
                全台22縣市對應
              </div>
            </div>

            {/* 導覽按鈕 */}
            <div className="mt-4 flex flex-col items-center gap-2">
              <Link
                href="/ranking"
                className="win95-button text-[14px] font-bold text-black px-6 py-3 min-h-[44px] no-underline inline-flex items-center w-[280px] justify-center"
              >
                📊 全台排名
              </Link>
              <Link
                href="/parties"
                className="win95-button text-[14px] font-bold text-black px-6 py-3 min-h-[44px] no-underline inline-flex items-center w-[280px] justify-center"
              >
                📋 政黨政策比較
              </Link>
              <Link
                href="/turnout"
                className="win95-button text-[14px] font-bold text-black px-6 py-3 min-h-[44px] no-underline inline-flex items-center w-[280px] justify-center"
              >
                📊 各縣市投票率比較
              </Link>
            </div>

            {/* 今日冷知識 */}
            <div className="mt-4 win95-window">
              <div className="win95-titlebar">
                <div className="flex items-center gap-1">
                  <span className="text-[10px]">💡</span>
                  <span className="text-[11px] tracking-wide">今日冷知識.txt</span>
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
              <div className="p-4">
                <p className="text-[13px] text-black leading-relaxed">
                  {triviaList[getDayOfYear() % triviaList.length]}
                </p>
                <p className="text-[10px] text-gray-500 mt-2 text-right">
                  {formatDateForTrivia()} / 100
                </p>
              </div>
            </div>
          </div>
        )}

        {searchState.status === "loading" && (
          <div className="max-w-[480px] mx-auto px-4 py-8">
            <div className="win95-window">
              <div className="win95-titlebar">
                <div className="flex items-center gap-1">
                  <span className="text-[10px]">⏳</span>
                  <span className="text-[11px] tracking-wide">載入中...</span>
                </div>
                <div className="flex items-center gap-[2px]">
                  <button type="button" className="win95-titlebar-btn" aria-label="關閉">
                    <span className="text-[11px]">×</span>
                  </button>
                </div>
              </div>
              <div className="p-8 flex flex-col items-center gap-4">
                <div className="win95-hourglass">⏳</div>
                <p className="text-[14px] text-black">正在取得政治資訊...</p>
                <p className="text-[11px] text-gray-600">請稍候</p>
              </div>
            </div>
          </div>
        )}

        {searchState.status === "result" && (
          <ResultSection data={searchState.data} address={searchState.address} />
        )}

        {searchState.status === "unsupported" && (
          <div className="max-w-[480px] mx-auto px-4 py-8">
            {/* Win95 錯誤對話框 */}
            <div className="win95-window">
              <div className="win95-titlebar">
                <div className="flex items-center gap-1">
                  <span className="text-[10px]">⚠</span>
                  <span className="text-[11px] tracking-wide">錯誤</span>
                </div>
                <div className="flex items-center gap-[2px]">
                  <button type="button" className="win95-titlebar-btn" aria-label="關閉">
                    <span className="text-[11px]">×</span>
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start gap-4 mb-5">
                  {/* Win95錯誤圖示 */}
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-[32px]">
                    ⚠️
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-black mb-2">
                      無法辨識地址
                    </p>
                    <p className="text-[11px] text-gray-700 leading-relaxed">
                      無法辨識您輸入的地址。
                      <br />
                      請輸入包含縣市名稱的正確地址。
                      <br />
                      （例：台北市、高雄市、新竹縣 等）
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => setSearchState({ status: "idle" })}
                    className="win95-button w-[120px] h-[32px] text-[13px] font-bold text-black"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
