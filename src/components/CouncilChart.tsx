import { CouncilComposition } from "@/types/politics";

interface CouncilChartProps {
  council: CouncilComposition;
}

export default function CouncilChart({ council }: CouncilChartProps) {
  const actualSeats = council.parties.reduce((sum, p) => sum + p.seats, 0);
  const vacancy = council.totalSeats - actualSeats;

  return (
    <div className="win95-window">
      {/* 標題列 */}
      <div className="win95-titlebar">
        <div className="flex items-center gap-1">
          <span className="text-[10px]">🏛️</span>
          <span className="text-[11px] tracking-wide">
            {council.name}（定額 {council.totalSeats}）
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
        {/* 橫條圖 - Win95凹陷面板 */}
        <div className="win95-inset-label p-2">
          <div className="flex h-7 overflow-hidden">
            {council.parties.map((party) => {
              const percentage = (party.seats / council.totalSeats) * 100;
              return (
                <div
                  key={party.party}
                  className="flex items-center justify-center text-[11px] font-bold text-white transition-all"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: party.color,
                    minWidth: percentage > 3 ? undefined : "12px",
                  }}
                  title={`${party.party}: ${party.seats}席`}
                >
                  {percentage >= 8 ? party.seats : ""}
                </div>
              );
            })}
            {vacancy > 0 && (
              <div
                className="flex items-center justify-center text-[11px] font-bold"
                style={{
                  width: `${(vacancy / council.totalSeats) * 100}%`,
                  backgroundColor: "#c0c0c0",
                  color: "#808080",
                }}
                title={`空缺: ${vacancy}`}
              >
                {vacancy}
              </div>
            )}
          </div>
        </div>

        {/* 圖例 */}
        <div className="mt-3 flex flex-col gap-2">
          {council.parties.map((party) => (
            <div key={party.party} className="flex items-center gap-2">
              <div
                className="w-3 h-3 flex-shrink-0"
                style={{ backgroundColor: party.color }}
              />
              <span className="text-[12px] text-black flex-1">
                {party.party}
              </span>
              <span className="text-[12px] font-bold text-black">
                {party.seats}席
              </span>
            </div>
          ))}
          {vacancy > 0 && (
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 flex-shrink-0" style={{ backgroundColor: "#c0c0c0" }} />
              <span className="text-[12px] text-black flex-1">空缺</span>
              <span className="text-[12px] font-bold text-black">
                {vacancy}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
