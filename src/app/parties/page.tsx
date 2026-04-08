"use client";

import { useState } from "react";
import Link from "next/link";
import { partyPolicies, PartyPolicy } from "@/data/party-policies";

type PolicyField = "economy" | "socialSecurity" | "foreignPolicy" | "energy" | "digital" | "youth";

const policyTabs: Array<{ key: PolicyField; label: string }> = [
  { key: "economy", label: "經濟" },
  { key: "socialSecurity", label: "社會福利" },
  { key: "foreignPolicy", label: "外交" },
  { key: "energy", label: "能源" },
  { key: "digital", label: "數位" },
  { key: "youth", label: "青年" },
];

function Win95TitleBar({ title, icon, bgColor }: { title: string; icon?: string; bgColor?: string }) {
  return (
    <div
      className="win95-titlebar"
      style={bgColor ? { background: `linear-gradient(90deg, ${bgColor}, ${bgColor}cc)` } : undefined}
    >
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

function PartyCard({ party }: { party: PartyPolicy }) {
  const [activeTab, setActiveTab] = useState<PolicyField>("economy");

  const policies = party[activeTab];

  return (
    <div className="win95-window">
      <Win95TitleBar title={party.name} bgColor={party.color} />
      <div className="p-3">
        {/* 分頁切換 */}
        <div className="flex flex-wrap gap-[2px] mb-3">
          {policyTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`text-[11px] px-2 py-1 font-bold cursor-pointer ${
                activeTab === tab.key
                  ? "bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] text-black"
                  : "bg-[#a0a0a0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 政策列表 */}
        <div className="win95-inset-label p-3">
          <ul className="space-y-2">
            {policies.map((policy, index) => (
              <li key={index} className="text-[12px] text-black leading-relaxed flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5">▸</span>
                <span>{policy}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function PartiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#008080]">
      <div className="max-w-[480px] mx-auto px-4 py-4 w-full">
        {/* 主視窗 */}
        <div className="win95-window mb-4">
          <Win95TitleBar title="政黨政策.exe" icon="📋" />
          <div className="p-3">
            <div className="mb-3">
              <Link href="/" className="win95-button text-[12px] text-black px-3 py-1 no-underline inline-flex items-center">
                🏠 返回首頁
              </Link>
            </div>
            <div className="win95-inset-label p-2 mb-3">
              <p className="text-[12px] text-black leading-relaxed text-center">
                將各政黨的政策分為6個領域進行比較。
                <br />
                點擊分頁切換領域。
              </p>
            </div>
          </div>
        </div>

        {/* 各政黨卡片 */}
        <div className="space-y-4">
          {partyPolicies.map((party) => (
            <PartyCard key={party.name} party={party} />
          ))}
        </div>

        {/* 免責聲明 */}
        <div className="mt-4 win95-window">
          <div className="win95-titlebar">
            <div className="flex items-center gap-1">
              <span className="text-[10px]">⚠</span>
              <span className="text-[11px] tracking-wide">注意事項.txt</span>
            </div>
            <div className="flex items-center gap-[2px]">
              <button type="button" className="win95-titlebar-btn" aria-label="關閉">
                <span className="text-[11px]">×</span>
              </button>
            </div>
          </div>
          <div className="p-3">
            <p className="text-[11px] text-gray-700 leading-relaxed">
              ※本資訊由AI根據公開資訊整理。最新資訊請查閱各政黨官方網站。
              <br />
              ※資料基於2026年4月7日的公開資訊。政黨方針可能隨選舉或政治情勢而變更。
            </p>
          </div>
        </div>

        {/* 返回首頁按鈕 */}
        <div className="mt-4 mb-4 flex justify-center">
          <Link href="/" className="win95-button text-[14px] font-bold text-black px-6 py-3 min-h-[44px] no-underline inline-flex items-center">
            🏠 返回首頁
          </Link>
        </div>
      </div>
    </div>
  );
}
