"use client";

import { useState, useEffect, useCallback, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

function getReminderEmail(region: string): string | null {
  if (typeof window === "undefined") return null;
  const key = `taiwan-poli-reminder-${region}`;
  return localStorage.getItem(key);
}

function saveReminderEmailLocal(region: string, email: string): void {
  const key = `taiwan-poli-reminder-${region}`;
  localStorage.setItem(key, email);
}

function isValidEmail(email: string): boolean {
  return email.includes("@") && email.length >= 3;
}

interface ElectionReminderProps {
  region: string;
}

export default function ElectionReminder({ region }: ElectionReminderProps) {
  const [email, setEmail] = useState<string>("");
  const [registered, setRegistered] = useState<boolean>(false);
  const [savedEmail, setSavedEmail] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    const existing = getReminderEmail(region);
    if (existing) {
      setRegistered(true);
      setSavedEmail(existing);
    } else {
      setRegistered(false);
      setSavedEmail(null);
      setEmail("");
    }
    setError("");
  }, [region]);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError("");

      if (!isValidEmail(email)) {
        setError("請輸入正確的電子郵件地址");
        return;
      }

      setSubmitting(true);

      try {
        const { error: insertError } = await supabase
          .from("taiwan_reminders")
          .insert({
            email,
            region,
          });

        if (insertError) {
          console.error("Supabase insert error:", insertError.message);
        }
      } catch {
        // Network error - still save to localStorage
      }

      saveReminderEmailLocal(region, email);
      setRegistered(true);
      setSavedEmail(email);
      setSubmitting(false);
    },
    [email, region]
  );

  return (
    <div className="mb-6 win95-window">
      <div className="win95-titlebar">
        <div className="flex items-center gap-1">
          <span className="text-[10px]">📧</span>
          <span className="text-[11px] tracking-wide">選舉提醒.exe</span>
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
        {registered && savedEmail ? (
          <div className="text-center">
            <p className="text-[14px] font-bold text-black mb-2">
              ✅ 設定完成！
            </p>
            <p className="text-[12px] text-gray-700 mb-1">
              選舉前會通知您
            </p>
            <div className="win95-inset-label inline-block px-3 py-1 mt-2">
              <p className="text-[11px] text-black">{savedEmail}</p>
            </div>
          </div>
        ) : (
          <>
            <p className="text-[13px] text-black mb-1 text-center">
              為了不忘記下次選舉
            </p>
            <p className="text-[13px] text-black mb-3 text-center">
              設定提醒功能
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="reminder-email"
                  className="text-[12px] text-gray-700 block mb-1"
                >
                  電子郵件：
                </label>
                <input
                  id="reminder-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="example@mail.com"
                  className="win95-input w-full text-[13px]"
                />
                {error && (
                  <p className="text-[11px] text-red-600 mt-1">{error}</p>
                )}
              </div>
              <div className="flex justify-center mb-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="win95-button text-[13px] font-bold text-black px-4 py-2 min-h-[32px]"
                >
                  {submitting ? "⏳ 傳送中..." : "📧 設定提醒"}
                </button>
              </div>
            </form>
            <p className="text-[10px] text-gray-600 text-center">
              ※選舉30天前、7天前、前一天會通知您
            </p>
          </>
        )}
      </div>
    </div>
  );
}
