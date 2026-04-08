"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

function hasVotedLocal(region: string): boolean {
  if (typeof window === "undefined") return false;
  const key = `taiwan-poli-voted-${region}`;
  return localStorage.getItem(key) === "true";
}

function markVotedLocal(region: string): void {
  const key = `taiwan-poli-voted-${region}`;
  localStorage.setItem(key, "true");
}

interface VoteTurnoutButtonProps {
  region: string;
}

export default function VoteTurnoutButton({ region }: VoteTurnoutButtonProps) {
  const [voted, setVoted] = useState<boolean>(false);
  const [count, setCount] = useState<number | null>(null);
  const [justVoted, setJustVoted] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchVoteCount() {
      try {
        const { data } = await supabase
          .from("taiwan_search_counts")
          .select("vote_count")
          .eq("region", region)
          .single();

        if (!cancelled) {
          setCount(data?.vote_count ?? 0);
          setVoted(hasVotedLocal(region));
          setJustVoted(false);
        }
      } catch {
        if (!cancelled) {
          setCount(0);
          setVoted(hasVotedLocal(region));
          setJustVoted(false);
        }
      }
    }

    fetchVoteCount();

    return () => {
      cancelled = true;
    };
  }, [region]);

  const handleVote = useCallback(async () => {
    if (voted) return;

    try {
      const { data: current } = await supabase
        .from("taiwan_search_counts")
        .select("vote_count")
        .eq("region", region)
        .single();

      const newCount = (current?.vote_count ?? 0) + 1;

      await supabase
        .from("taiwan_search_counts")
        .update({
          vote_count: newCount,
          updated_at: new Date().toISOString(),
        })
        .eq("region", region);

      markVotedLocal(region);

      setCount(newCount);
      setVoted(true);
      setJustVoted(true);
    } catch {
      markVotedLocal(region);
      setCount((prev) => (prev ?? 0) + 1);
      setVoted(true);
      setJustVoted(true);
    }
  }, [voted, region]);

  if (count === null) {
    return null;
  }

  return (
    <div className="mb-6 win95-window">
      <div className="p-4 text-center">
        <div className="mb-3">
          {voted ? (
            <button
              type="button"
              disabled
              className="win95-inset-label text-[14px] font-bold text-black px-6 py-2 min-h-[36px] cursor-default"
            >
              {justVoted ? "✅ 已投票！" : "✅ 已投票"}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleVote}
              className="win95-button text-[14px] font-bold text-black px-6 py-2 min-h-[36px]"
            >
              👆 想提高投票率
            </button>
          )}
        </div>
        <p className="text-[12px] text-gray-700">
          想提高這個城市投票率的人:{" "}
          <span className="font-bold text-black">
            {count.toLocaleString()}人
          </span>
        </p>
      </div>
    </div>
  );
}
