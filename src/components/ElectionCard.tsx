import { ElectionSchedule } from "@/types/politics";

interface ElectionCardProps {
  elections: ElectionSchedule[];
}

function calculateDaysUntil(dateString: string): number {
  const target = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  const diff = target.getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return `${year}年${month}月（預定）`;
}

export default function ElectionCard({ elections }: ElectionCardProps) {
  const sortedElections = [...elections].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="win95-window">
      {/* 標題列 */}
      <div className="win95-titlebar">
        <div className="flex items-center gap-1">
          <span className="text-[10px]">📅</span>
          <span className="text-[11px] tracking-wide">下次選舉</span>
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
        {sortedElections.map((election, index) => {
          const daysUntil = calculateDaysUntil(election.date);
          const isUpcoming = daysUntil <= 365;

          return (
            <div
              key={election.name}
              className="flex items-center gap-3 py-3"
              style={{
                borderBottom:
                  index < sortedElections.length - 1 ? "1px solid #808080" : "none",
              }}
            >
              {/* 天數倒數 - Win95凹陷面板 */}
              <div className="win95-inset-label flex-shrink-0 text-center min-w-[72px] py-2">
                <p
                  className={`text-[24px] font-bold leading-none ${
                    isUpcoming ? "text-[#000080]" : "text-[#808080]"
                  }`}
                >
                  {daysUntil}
                </p>
                <p
                  className={`text-[10px] font-bold mt-0.5 ${
                    isUpcoming ? "text-[#000080]" : "text-[#808080]"
                  }`}
                >
                  天後
                </p>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold text-black">
                  {election.name}
                </p>
                <p className="text-[11px] text-gray-700 mt-0.5">
                  {formatDate(election.date)}
                </p>
                {election.description && (
                  <p className="text-[10px] text-gray-600 mt-0.5">
                    {election.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
