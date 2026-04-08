"use client";

import { useState } from "react";
import { Politician } from "@/types/politics";

interface PoliticianCardProps {
  politician: Politician;
  label?: string;
}

function getPartyColor(party: string): string {
  if (party.includes("民主進步黨") || party.includes("民進黨")) return "#1B9431";
  if (party.includes("國民黨")) return "#000099";
  if (party.includes("民眾黨")) return "#28C8C8";
  if (party.includes("時代力量")) return "#FABE00";
  if (party.includes("台灣基進")) return "#C41900";
  return "#999999";
}

function FallbackAvatar() {
  return (
    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center" style={{ backgroundColor: "#c0c0c0" }}>
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="#808080"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    </div>
  );
}

function PoliticianAvatar({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <FallbackAvatar />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="flex-shrink-0 w-16 h-16 object-cover"
      style={{ backgroundColor: "#c0c0c0" }}
      onError={() => setHasError(true)}
    />
  );
}

export default function PoliticianCard({
  politician,
  label,
}: PoliticianCardProps) {
  const partyColor = getPartyColor(politician.party);

  return (
    <div className="win95-window">
      {/* 標題列 - 職位顯示 */}
      <div className="win95-titlebar">
        <div className="flex items-center gap-1">
          <span
            className="inline-block w-2.5 h-2.5"
            style={{ backgroundColor: partyColor }}
          />
          <span className="text-[11px] tracking-wide">
            {label ?? politician.role}
            {politician.district && !label ? ` ${politician.district}` : ""}
          </span>
        </div>
        <div className="flex items-center gap-[2px]">
          <button type="button" className="win95-titlebar-btn" aria-label="最小化">
            <span className="mb-[2px]">_</span>
          </button>
          <button type="button" className="win95-titlebar-btn" aria-label="關閉">
            <span className="text-[11px]">×</span>
          </button>
        </div>
      </div>

      {/* 本體 */}
      <div className="p-3">
        <div className="flex items-center gap-3">
          {politician.image ? (
            <PoliticianAvatar src={politician.image} alt={politician.name} />
          ) : (
            <FallbackAvatar />
          )}
          <div className="flex-1 min-w-0">
            <p className="text-[18px] font-bold text-black leading-tight">
              {politician.name}
            </p>
            <span className="mt-1 inline-block win95-inset-label text-[11px] text-black font-bold">
              {politician.party}
            </span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
          {politician.since && (
            <p className="text-[12px] text-gray-700">
              就任: <span className="font-bold text-black">{politician.since}</span>
            </p>
          )}
          {politician.electionCount && (
            <p className="text-[12px] text-gray-700">
              當選: <span className="font-bold text-black">{politician.electionCount}屆</span>
            </p>
          )}
        </div>

        {politician.summary && (
          <div className="mt-3 win95-inset-label p-3">
            <p className="text-[11px] font-bold text-black mb-1 flex items-center gap-1">
              ✨ AI政策摘要
            </p>
            <p className="text-[12px] text-gray-800 leading-relaxed">
              {politician.summary}
            </p>
          </div>
        )}

        {politician.source && (
          <div className="mt-3 pt-2" style={{ borderTop: "1px solid #808080" }}>
            <a
              href={politician.source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12px] text-[#000080] underline min-h-[44px]"
            >
              🔗 確認來源
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
