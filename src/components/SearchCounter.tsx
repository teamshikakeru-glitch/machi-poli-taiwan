"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

function getInvestigatorNumber(region: string): number | null {
  if (typeof window === "undefined") return null;
  const key = `taiwan-poli-investigator-${region}`;
  const val = localStorage.getItem(key);
  return val ? parseInt(val, 10) : null;
}

function saveInvestigatorNumber(region: string, num: number): void {
  const key = `taiwan-poli-investigator-${region}`;
  localStorage.setItem(key, String(num));
}

function hasSearchedBefore(region: string): boolean {
  if (typeof window === "undefined") return false;
  const key = `taiwan-poli-searched-${region}`;
  return localStorage.getItem(key) === "true";
}

function markSearched(region: string): void {
  const key = `taiwan-poli-searched-${region}`;
  localStorage.setItem(key, "true");
}

interface SearchCounterProps {
  region: string;
}

interface RegionCount {
  region: string;
  search_count: number;
}

export default function SearchCounter({ region }: SearchCounterProps) {
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [investigatorNum, setInvestigatorNum] = useState<number | null>(null);
  const [rank, setRank] = useState<number>(1);

  useEffect(() => {
    let cancelled = false;

    async function fetchAndIncrement() {
      try {
        const alreadySearched = hasSearchedBefore(region);

        if (!alreadySearched) {
          const { data: current } = await supabase
            .from("taiwan_search_counts")
            .select("search_count")
            .eq("region", region)
            .single();

          const newCount = (current?.search_count ?? 0) + 1;

          await supabase
            .from("taiwan_search_counts")
            .update({
              search_count: newCount,
              updated_at: new Date().toISOString(),
            })
            .eq("region", region);

          markSearched(region);

          const existingNum = getInvestigatorNumber(region);
          if (existingNum === null) {
            saveInvestigatorNumber(region, newCount);
          }
        }

        const { data: allCounts } = await supabase
          .from("taiwan_search_counts")
          .select("region, search_count")
          .order("search_count", { ascending: false });

        if (cancelled) return;

        if (allCounts && allCounts.length > 0) {
          const sorted = (allCounts as RegionCount[]).sort(
            (a, b) => b.search_count - a.search_count
          );
          const rankIndex = sorted.findIndex((r) => r.region === region);
          setRank(rankIndex === -1 ? 22 : rankIndex + 1);

          const myData = sorted.find((r) => r.region === region);
          setTotalCount(myData?.search_count ?? 0);
        } else {
          setTotalCount(0);
          setRank(22);
        }

        const invNum = getInvestigatorNumber(region);
        setInvestigatorNum(invNum ?? 1);
      } catch {
        if (!cancelled) {
          setTotalCount(0);
          setInvestigatorNum(1);
          setRank(1);
        }
      }
    }

    fetchAndIncrement();

    return () => {
      cancelled = true;
    };
  }, [region]);

  if (totalCount === null || investigatorNum === null) {
    return null;
  }

  return (
    <div className="mb-6 win95-window">
      <div className="win95-titlebar">
        <div className="flex items-center gap-1">
          <span className="text-[10px]">🔍</span>
          <span className="text-[11px] tracking-wide">城市政見調查員.exe</span>
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
      <div className="p-4 text-center">
        <p className="text-[14px] font-bold text-black mb-2">
          查詢{region}的人
        </p>
        <p className="text-[36px] font-bold text-black leading-none mb-2">
          {totalCount.toLocaleString()}{" "}
          <span className="text-[16px]">人</span>
        </p>
        <p className="text-[13px] text-gray-700 mb-3">
          你是第{" "}
          <span className="font-bold text-black">
            {investigatorNum.toLocaleString()}
          </span>
          位調查員
        </p>
        <div className="win95-inset-label inline-block px-4 py-1">
          <p className="text-[12px] text-black">
            全台 <span className="font-bold">{rank}名</span>
          </p>
        </div>
      </div>
    </div>
  );
}
