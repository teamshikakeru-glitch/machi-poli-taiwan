import { CityType, getCityType } from "./national-average";

export interface RankingEntry {
  region: string;
  voterTurnout: number;
  avgCouncilAge: number;
  cityType: CityType;
}

const rawData: Array<{ region: string; voterTurnout: number; avgCouncilAge: number }> = [
  { region: "台北市", voterTurnout: 74.28, avgCouncilAge: 52.3 },
  { region: "新北市", voterTurnout: 72.78, avgCouncilAge: 53.8 },
  { region: "桃園市", voterTurnout: 72.22, avgCouncilAge: 54.1 },
  { region: "台中市", voterTurnout: 73.85, avgCouncilAge: 54.5 },
  { region: "台南市", voterTurnout: 71.98, avgCouncilAge: 55.2 },
  { region: "高雄市", voterTurnout: 71.25, avgCouncilAge: 54.8 },
  { region: "基隆市", voterTurnout: 70.57, avgCouncilAge: 56.2 },
  { region: "新竹市", voterTurnout: 74.59, avgCouncilAge: 50.8 },
  { region: "嘉義市", voterTurnout: 72.90, avgCouncilAge: 57.1 },
  { region: "新竹縣", voterTurnout: 73.46, avgCouncilAge: 55.6 },
  { region: "苗栗縣", voterTurnout: 71.69, avgCouncilAge: 57.3 },
  { region: "彰化縣", voterTurnout: 72.41, avgCouncilAge: 56.9 },
  { region: "南投縣", voterTurnout: 71.11, avgCouncilAge: 57.8 },
  { region: "雲林縣", voterTurnout: 68.54, avgCouncilAge: 58.2 },
  { region: "嘉義縣", voterTurnout: 69.71, avgCouncilAge: 58.5 },
  { region: "屏東縣", voterTurnout: 70.33, avgCouncilAge: 57.6 },
  { region: "宜蘭縣", voterTurnout: 70.99, avgCouncilAge: 56.4 },
  { region: "花蓮縣", voterTurnout: 65.72, avgCouncilAge: 56.8 },
  { region: "台東縣", voterTurnout: 62.01, avgCouncilAge: 57.4 },
  { region: "澎湖縣", voterTurnout: 53.70, avgCouncilAge: 58.9 },
  { region: "金門縣", voterTurnout: 36.37, avgCouncilAge: 59.3 },
  { region: "連江縣", voterTurnout: 51.32, avgCouncilAge: 60.1 },
];

export const rankingData: RankingEntry[] = rawData.map((d) => ({
  ...d,
  cityType: getCityType(d.voterTurnout, d.avgCouncilAge),
}));
