"use client";

import { useState } from "react";
import Link from "next/link";
import { rankingData, RankingEntry } from "@/data/ranking-data";

type TabType = "voterTurnout" | "avgCouncilAge" | "searchCount";

function getVoterTurnoutColor(turnout: number): string {
  if (turnout >= 73) return "bg-green-200";
  if (turnout >= 70) return "bg-green-100";
  if (turnout >= 65) return "bg-yellow-100";
  return "bg-red-100";
}

function getAgeColor(age: number): string {
  if (age < 53) return "bg-green-200";
  if (age < 55) return "bg-green-100";
  if (age < 57) return "bg-yellow-100";
  return "bg-red-100";
}

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

function RankingTable({
  data,
  tab,
}: {
  data: RankingEntry[];
  tab: TabType;
}) {
  const sorted = [...data].sort((a, b) => {
    if (tab === "voterTurnout") return b.voterTurnout - a.voterTurnout;
    if (tab === "avgCouncilAge") return a.avgCouncilAge - b.avgCouncilAge;
    return b.voterTurnout - a.voterTurnout;
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[12px] text-black">
        <thead>
          <tr className="bg-[#808080] text-white">
            <th className="py-1 px-2 text-left w-10">排名</th>
            <th className="py-1 px-2 text-left">縣市</th>
            <th className="py-1 px-2 text-right">
              {tab === "avgCouncilAge" ? "議員平均年齡" : "投票率"}
            </th>
            <th className="py-1 px-2 text-left">城市類型</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((entry, index) => {
            const colorClass =
              tab === "avgCouncilAge"
                ? getAgeColor(entry.avgCouncilAge)
                : getVoterTurnoutColor(entry.voterTurnout);

            return (
              <tr
                key={entry.region}
                className={`${colorClass} border-b border-[#808080]`}
              >
                <td className="py-1.5 px-2 font-bold">{index + 1}</td>
                <td className="py-1.5 px-2 font-bold">{entry.region}</td>
                <td className="py-1.5 px-2 text-right font-bold">
                  {tab === "avgCouncilAge"
                    ? `${entry.avgCouncilAge}歲`
                    : `${entry.voterTurnout}%`}
                </td>
                <td className="py-1.5 px-2 text-[11px]">{entry.cityType}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState<TabType>("voterTurnout");

  const tabs: Array<{ key: TabType; label: string }> = [
    { key: "voterTurnout", label: "📊 投票率" },
    { key: "avgCouncilAge", label: "👴 議員平均年齡" },
    { key: "searchCount", label: "🔍 搜尋數" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#008080]">
      <div className="max-w-[480px] mx-auto px-4 py-4 w-full">
        {/* 主視窗 */}
        <div className="win95-window">
          <Win95TitleBar title="全台排名.exe" icon="🏆" />

          <div className="p-3">
            {/* 返回按鈕 */}
            <div className="mb-3">
              <Link href="/" className="win95-button text-[12px] text-black px-3 py-1 no-underline inline-flex items-center">
                ← 返回首頁
              </Link>
            </div>

            {/* 分頁切換 */}
            <div className="flex gap-[2px] mb-3">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`text-[11px] px-3 py-1.5 font-bold ${
                    activeTab === tab.key
                      ? "bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] text-black"
                      : "bg-[#a0a0a0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* 排名表格 */}
            {activeTab === "searchCount" ? (
              <div className="win95-inset-label p-4 text-center">
                <p className="text-[14px] text-black font-bold mb-2">🚧 準備中</p>
                <p className="text-[11px] text-gray-700">
                  搜尋數排名即將公開。
                  <br />
                  請稍候。
                </p>
              </div>
            ) : (
              <div className="win95-inset-label p-0 overflow-hidden">
                <RankingTable data={rankingData} tab={activeTab} />
              </div>
            )}

            {/* 圖例 */}
            {activeTab !== "searchCount" && (
              <div className="mt-3 flex flex-wrap gap-2 text-[10px] text-black">
                <span className="flex items-center gap-1">
                  <span className="inline-block w-3 h-3 bg-green-200 border border-gray-400" />
                  {activeTab === "voterTurnout" ? "高投票率" : "年輕"}
                </span>
                <span className="flex items-center gap-1">
                  <span className="inline-block w-3 h-3 bg-green-100 border border-gray-400" />
                  較良好
                </span>
                <span className="flex items-center gap-1">
                  <span className="inline-block w-3 h-3 bg-yellow-100 border border-gray-400" />
                  一般
                </span>
                <span className="flex items-center gap-1">
                  <span className="inline-block w-3 h-3 bg-red-100 border border-gray-400" />
                  {activeTab === "voterTurnout" ? "低投票率" : "較年長"}
                </span>
              </div>
            )}

            {/* 注釋 */}
            <div className="mt-3 win95-inset-label p-2">
              <p className="text-[10px] text-gray-600 leading-relaxed">
                ※ 投票率數據基於2024年總統選舉，議員平均年齡為各縣市議會概估值。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
