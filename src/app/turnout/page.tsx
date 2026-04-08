"use client";

import Link from "next/link";
import { rankingData } from "@/data/ranking-data";

function Win95TitleBar({ title, icon }: { title: string; icon?: string }) {
  return (
    <div className="win95-titlebar">
      <div className="flex items-center gap-1">
        {icon && <span className="text-[10px]">{icon}</span>}
        <span className="text-[11px] tracking-wide">{title}</span>
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
  );
}

interface TurnoutBarData {
  region: string;
  dpp: number;
  kmt: number;
  tpp: number;
  topParty: string;
}

const turnoutData: TurnoutBarData[] = [
  { region: "台北市", dpp: 38.13, kmt: 38.08, tpp: 23.79, topParty: "DPP" },
  { region: "新北市", dpp: 38.59, kmt: 35.17, tpp: 26.24, topParty: "DPP" },
  { region: "桃園市", dpp: 35.27, kmt: 34.12, tpp: 30.61, topParty: "DPP" },
  { region: "台中市", dpp: 37.58, kmt: 32.37, tpp: 30.05, topParty: "DPP" },
  { region: "台南市", dpp: 50.95, kmt: 25.61, tpp: 23.44, topParty: "DPP" },
  { region: "高雄市", dpp: 48.89, kmt: 29.23, tpp: 21.88, topParty: "DPP" },
  { region: "基隆市", dpp: 34.77, kmt: 38.63, tpp: 26.60, topParty: "KMT" },
  { region: "新竹市", dpp: 34.79, kmt: 30.90, tpp: 34.30, topParty: "DPP" },
  { region: "嘉義市", dpp: 43.26, kmt: 31.40, tpp: 25.34, topParty: "DPP" },
  { region: "新竹縣", dpp: 27.42, kmt: 37.03, tpp: 35.55, topParty: "KMT" },
  { region: "苗栗縣", dpp: 28.81, kmt: 41.18, tpp: 30.01, topParty: "KMT" },
  { region: "彰化縣", dpp: 38.11, kmt: 32.93, tpp: 28.96, topParty: "DPP" },
  { region: "南投縣", dpp: 35.95, kmt: 38.00, tpp: 26.05, topParty: "KMT" },
  { region: "雲林縣", dpp: 44.54, kmt: 29.33, tpp: 26.13, topParty: "DPP" },
  { region: "嘉義縣", dpp: 47.69, kmt: 29.28, tpp: 23.03, topParty: "DPP" },
  { region: "屏東縣", dpp: 47.51, kmt: 30.84, tpp: 21.65, topParty: "DPP" },
  { region: "宜蘭縣", dpp: 44.74, kmt: 28.99, tpp: 26.27, topParty: "DPP" },
  { region: "花蓮縣", dpp: 24.78, kmt: 50.50, tpp: 24.72, topParty: "KMT" },
  { region: "台東縣", dpp: 27.41, kmt: 49.32, tpp: 23.28, topParty: "KMT" },
  { region: "澎湖縣", dpp: 38.60, kmt: 36.63, tpp: 24.76, topParty: "DPP" },
  { region: "金門縣", dpp: 10.02, kmt: 61.40, tpp: 28.58, topParty: "KMT" },
  { region: "連江縣", dpp: 10.52, kmt: 62.67, tpp: 26.81, topParty: "KMT" },
];

export default function TurnoutPage() {
  const sortedByTurnout = [...rankingData].sort((a, b) => b.voterTurnout - a.voterTurnout);

  return (
    <div className="flex flex-col min-h-screen bg-[#008080]">
      <div className="max-w-[480px] mx-auto px-4 py-4 w-full">
        {/* 主視窗 */}
        <div className="win95-window mb-4">
          <Win95TitleBar title="各縣市投票率比較.exe" icon="📊" />
          <div className="p-3">
            <div className="mb-3">
              <Link href="/" className="win95-button text-[12px] text-black px-3 py-1 no-underline inline-flex items-center">
                🏠 返回首頁
              </Link>
            </div>
            <div className="win95-inset-label p-2">
              <p className="text-[12px] text-black leading-relaxed text-center">
                2024年總統選舉各縣市投票率與政黨得票率比較。
                <br />
                台灣不公布年齡別投票率數據。
              </p>
            </div>
          </div>
        </div>

        {/* 區塊1: 投票率排名 */}
        <div className="win95-window mb-4">
          <Win95TitleBar title="各縣市投票率排名（2024年總統選舉）" icon="📈" />
          <div className="p-3">
            <div className="win95-inset-label p-3">
              {sortedByTurnout.map((data) => {
                const color = data.voterTurnout >= 70 ? "#22C55E" : data.voterTurnout >= 60 ? "#F97316" : "#DC2626";
                return (
                  <div key={data.region} className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] text-black w-16 text-right flex-shrink-0 font-bold">{data.region}</span>
                    <div className="flex-1 h-5 bg-white border border-[#808080] relative">
                      <div
                        className="h-full"
                        style={{ width: `${data.voterTurnout}%`, backgroundColor: color }}
                      />
                    </div>
                    <span className="text-[11px] text-black w-14 flex-shrink-0 font-bold">{data.voterTurnout}%</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-2 flex flex-wrap gap-2 text-[10px] text-black">
              <span className="flex items-center gap-1">
                <span className="inline-block w-3 h-3 bg-green-500 border border-gray-400" />
                70%以上
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-3 h-3 bg-orange-500 border border-gray-400" />
                60-70%
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-3 h-3 bg-red-600 border border-gray-400" />
                60%以下
              </span>
            </div>
          </div>
        </div>

        {/* 區塊2: 政黨得票率 */}
        <div className="win95-window mb-4">
          <Win95TitleBar title="2024年總統選舉 各縣市政黨得票率" icon="🗳️" />
          <div className="p-3">
            <div className="win95-inset-label p-0 overflow-hidden">
              <table className="w-full text-[11px] text-black">
                <thead>
                  <tr className="bg-[#808080] text-white">
                    <th className="py-1 px-2 text-left">縣市</th>
                    <th className="py-1 px-2 text-right" style={{ color: "#90EE90" }}>DPP</th>
                    <th className="py-1 px-2 text-right" style={{ color: "#87CEEB" }}>KMT</th>
                    <th className="py-1 px-2 text-right" style={{ color: "#7FFFD4" }}>TPP</th>
                    <th className="py-1 px-2 text-center">首位</th>
                  </tr>
                </thead>
                <tbody>
                  {turnoutData.map((data) => (
                    <tr key={data.region} className="border-b border-[#808080]">
                      <td className="py-1.5 px-2 font-bold">{data.region}</td>
                      <td className="py-1.5 px-2 text-right" style={{ color: "#1B9431", fontWeight: data.topParty === "DPP" ? "bold" : "normal" }}>
                        {data.dpp}%
                      </td>
                      <td className="py-1.5 px-2 text-right" style={{ color: "#000099", fontWeight: data.topParty === "KMT" ? "bold" : "normal" }}>
                        {data.kmt}%
                      </td>
                      <td className="py-1.5 px-2 text-right" style={{ color: "#28C8C8" }}>
                        {data.tpp}%
                      </td>
                      <td className="py-1.5 px-2 text-center font-bold" style={{ color: data.topParty === "DPP" ? "#1B9431" : "#000099" }}>
                        {data.topParty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 區塊3: 全國總結 */}
        <div className="win95-window mb-4">
          <Win95TitleBar title="2024年總統選舉結果" icon="🏛️" />
          <div className="p-3">
            <div className="win95-inset-label p-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] text-black w-20 text-right flex-shrink-0 font-bold">賴清德</span>
                <div className="flex-1 h-5 bg-white border border-[#808080] relative">
                  <div className="h-full" style={{ width: "40.05%", backgroundColor: "#1B9431" }} />
                </div>
                <span className="text-[11px] text-black w-14 flex-shrink-0 font-bold">40.05%</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] text-black w-20 text-right flex-shrink-0 font-bold">侯友宜</span>
                <div className="flex-1 h-5 bg-white border border-[#808080] relative">
                  <div className="h-full" style={{ width: "33.49%", backgroundColor: "#000099" }} />
                </div>
                <span className="text-[11px] text-black w-14 flex-shrink-0 font-bold">33.49%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-black w-20 text-right flex-shrink-0 font-bold">柯文哲</span>
                <div className="flex-1 h-5 bg-white border border-[#808080] relative">
                  <div className="h-full" style={{ width: "26.46%", backgroundColor: "#28C8C8" }} />
                </div>
                <span className="text-[11px] text-black w-14 flex-shrink-0 font-bold">26.46%</span>
              </div>
            </div>
            <div className="mt-3 win95-inset-label p-2">
              <p className="text-[11px] text-black leading-relaxed">
                全國投票率: <span className="font-bold">71.86%</span>（有權者19,548,531人中14,048,311人投票）
              </p>
            </div>
          </div>
        </div>

        {/* 免責聲明 */}
        <div className="win95-window mb-4">
          <div className="win95-titlebar">
            <div className="flex items-center gap-1">
              <span className="text-[10px]">📄</span>
              <span className="text-[11px] tracking-wide">資料說明.txt</span>
            </div>
            <div className="flex items-center gap-[2px]">
              <button type="button" className="win95-titlebar-btn" aria-label="關閉">
                <span className="text-[11px]">×</span>
              </button>
            </div>
          </div>
          <div className="p-3">
            <p className="text-[11px] text-gray-700 leading-relaxed">
              ※投票率數據基於2024年中華民國總統選舉的官方結果
              <br />
              ※台灣的選舉制度不進行年齡別統計，因此無法提供年齡別投票率
              <br />
              ※離島地區（金門、連江、澎湖）的投票率較低，主要受返鄉投票交通成本影響
            </p>
            <p className="text-[10px] text-gray-500 mt-2">
              來源: 中央選舉委員會 / Wikipedia
            </p>
          </div>
        </div>

        {/* 返回首頁按鈕 */}
        <div className="mb-4 flex justify-center">
          <Link href="/" className="win95-button text-[14px] font-bold text-black px-6 py-3 min-h-[44px] no-underline inline-flex items-center">
            🏠 返回首頁
          </Link>
        </div>
      </div>
    </div>
  );
}
