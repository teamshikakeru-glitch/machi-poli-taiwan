"use client";

import { RegionData } from "@/types/politics";
import { nationalAverage, getCityType, CityType } from "@/data/national-average";
import { aiComments } from "@/data/ai-comments";
import PoliticianCard from "./PoliticianCard";
import CouncilChart from "./CouncilChart";
import ElectionCard from "./ElectionCard";
import SearchCounter from "./SearchCounter";
import VoteTurnoutButton from "./VoteTurnoutButton";
import ElectionReminder from "./ElectionReminder";

interface ResultSectionProps {
  data: RegionData;
  address: string;
}

function getCityTypeEmoji(type: CityType): string {
  switch (type) {
    case "高度參與型":
      return "🔥";
    case "穩定發展型":
      return "🏛️";
    case "潛力成長型":
      return "🌱";
    case "沉睡城市型":
      return "💤";
  }
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

export default function ResultSection({ data, address }: ResultSectionProps) {
  const voterTurnout = data.voterTurnout ?? nationalAverage.voterTurnout;
  const avgCouncilAge = data.avgCouncilAge ?? nationalAverage.avgCouncilAge;
  const cityType = getCityType(voterTurnout, avgCouncilAge);
  const cityEmoji = getCityTypeEmoji(cityType);

  function handleShare() {
    const shareUrl = `https://machi-poli-taiwan.vercel.app/`;
    const shareText = `我的城市是「${cityType}」（投票率 ${voterTurnout}%）\n你的城市呢？\n\n${shareUrl}\n\n#城市政見`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(twitterUrl, "_blank");
  }

  return (
    <section className="max-w-[480px] mx-auto px-5 py-8">
      {/* 地址標籤 */}
      <div className="mb-6">
        <div className="win95-inset-label inline-flex items-center gap-2 px-4 py-2 text-[12px] text-black">
          <span>📍</span>
          <span className="font-bold">{address}</span> 的政治資訊
        </div>
      </div>

      {/* 搜尋計數器 */}
      <SearchCounter region={data.region} />

      {/* 城市分數面板 */}
      <div className="mb-6 win95-window">
        <Win95TitleBar title="城市分數.exe" icon="📊" />
        <div className="p-4">
          {/* 投票率 */}
          <div className="flex items-end gap-3 mb-3">
            <div>
              <p className="text-[11px] text-gray-700 mb-1">投票率</p>
              <p className="text-[36px] font-bold text-black leading-none">
                {voterTurnout}
                <span className="text-[16px]">%</span>
              </p>
            </div>
            <div className="win95-inset-label text-[11px] text-gray-700 mb-1">
              全國平均: {nationalAverage.voterTurnout}%
            </div>
          </div>

          {/* 議員平均年齡 */}
          <div className="flex items-end gap-3 mb-4">
            <div>
              <p className="text-[11px] text-gray-700 mb-1">議員平均年齡</p>
              <p className="text-[28px] font-bold text-black leading-none">
                {avgCouncilAge}
                <span className="text-[14px]">歲</span>
              </p>
            </div>
            <div className="win95-inset-label text-[11px] text-gray-700 mb-1">
              全國平均: {nationalAverage.avgCouncilAge}歲
            </div>
          </div>

          {/* 城市類型 */}
          <div className="win95-inset-label text-center py-3 px-4">
            <p className="text-[11px] text-gray-600 mb-1">你的城市類型</p>
            <p className="text-[20px] font-bold text-black">
              {cityEmoji} &gt;&gt; {cityType} &lt;&lt; {cityEmoji}
            </p>
          </div>

          {/* AI分析評論 */}
          {aiComments[data.region] && (
            <div className="win95-inset-label mt-4 py-3 px-4">
              <p className="text-[11px] text-gray-600 mb-1">🤖 AI分析</p>
              <p className="text-[12px] text-black leading-relaxed">
                {aiComments[data.region]}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 想提高投票率按鈕 */}
      <VoteTurnoutButton region={data.region} />

      {/* 首長區塊 */}
      <div className="mb-6 win95-window">
        <Win95TitleBar title="縣市長.exe" icon="👤" />
        <div className="p-3 flex flex-col gap-3">
          <PoliticianCard politician={data.mayor} label={data.mayor.role} />
        </div>
      </div>

      {/* 立法委員區塊 */}
      <div className="mb-6 win95-window">
        <Win95TitleBar title="立法委員.exe" icon="🏛️" />
        <div className="p-3 flex flex-col gap-3">
          {data.legislators.map((member) => (
            <PoliticianCard
              key={member.name}
              politician={member}
              label={`立法委員 ${member.district ?? ""}`}
            />
          ))}
        </div>
      </div>

      {/* 議會組成區塊 */}
      <div className="mb-6 win95-window">
        <Win95TitleBar title="議會組成.exe" icon="📊" />
        <div className="p-3 flex flex-col gap-3">
          <CouncilChart council={data.council} />
        </div>
      </div>

      {/* 選舉時程區塊 */}
      <div className="mb-6 win95-window">
        <Win95TitleBar title="選舉時程.exe" icon="📅" />
        <div className="p-3">
          <ElectionCard elections={data.elections} />
        </div>
      </div>

      {/* 選舉提醒 */}
      <ElectionReminder region={data.region} />

      {/* X分享按鈕 */}
      <div className="mb-6 flex justify-center">
        <button
          type="button"
          onClick={handleShare}
          className="win95-button text-[14px] font-bold text-black px-8 py-3 min-h-[44px]"
        >
          📢 分享到X
        </button>
      </div>
    </section>
  );
}
