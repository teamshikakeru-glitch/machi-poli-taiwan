export const nationalAverage = {
  voterTurnout: 71.86,
  avgCouncilAge: 56.2,
};

export type CityType = "高度參與型" | "穩定發展型" | "潛力成長型" | "沉睡城市型";

export function getCityType(voterTurnout: number, avgCouncilAge: number): CityType {
  if (voterTurnout >= 70 && avgCouncilAge < 55) return "高度參與型";
  if (voterTurnout >= 70 && avgCouncilAge >= 55) return "穩定發展型";
  if (voterTurnout < 70 && avgCouncilAge < 55) return "潛力成長型";
  return "沉睡城市型";
}
