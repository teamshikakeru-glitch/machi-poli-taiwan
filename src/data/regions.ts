import { RegionData } from "@/types/politics";

// 政黨顏色
const DPP_COLOR = "#1B9431";
const KMT_COLOR = "#000099";
const TPP_COLOR = "#28C8C8";
const NPP_COLOR = "#FABE00";
const TSP_COLOR = "#C41900";
const NPSU_COLOR = "#FF8C00";
const TUF_COLOR = "#8B0000";
const SDP_COLOR = "#FF69B4";
const NP_COLOR = "#CCCC00";
const IND_COLOR = "#999999";
const VACANT_COLOR = "#c0c0c0";

export const regionsData: Record<string, RegionData> = {
  "台北市": {
    region: "台北市",
    regionType: "直轄市",
    mayor: {
      name: "蔣萬安",
      role: "台北市長",
      party: "中國國民黨",
      since: "2022/12/25",
      electionCount: 1,
      summary: "推動智慧城市建設與都市更新，致力於提升市民生活品質與國際競爭力。",
    },
    legislators: [
      { name: "吳思瑤", role: "立法委員", party: "民主進步黨", district: "第1選區" },
      { name: "王世堅", role: "立法委員", party: "民主進步黨", district: "第2選區" },
      { name: "王鴻薇", role: "立法委員", party: "中國國民黨", district: "第3選區" },
      { name: "高嘉瑜", role: "立法委員", party: "民主進步黨", district: "第4選區" },
      { name: "吳沛憶", role: "立法委員", party: "民主進步黨", district: "第5選區" },
      { name: "羅智強", role: "立法委員", party: "中國國民黨", district: "第6選區" },
      { name: "徐巧芯", role: "立法委員", party: "中國國民黨", district: "第7選區" },
      { name: "賴士葆", role: "立法委員", party: "中國國民黨", district: "第8選區" },
    ],
    council: {
      name: "台北市議會",
      totalSeats: 61,
      parties: [
        { party: "中國國民黨", seats: 28, color: KMT_COLOR },
        { party: "民主進步黨", seats: 19, color: DPP_COLOR },
        { party: "台灣民眾黨", seats: 4, color: TPP_COLOR },
        { party: "新黨", seats: 1, color: NP_COLOR },
        { party: "社會民主黨", seats: 1, color: SDP_COLOR },
        { party: "無黨籍", seats: 1, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "市長、市議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 74.28,
    avgCouncilAge: 52.3,
  },

  "新北市": {
    region: "新北市",
    regionType: "直轄市",
    mayor: {
      name: "侯友宜",
      role: "新北市長",
      party: "中國國民黨",
      since: "2018/12/25",
      electionCount: 2,
      summary: "以安居樂業為施政主軸，推動社會住宅與公共安全政策，曾參選2024年總統。",
    },
    legislators: [
      { name: "洪孟楷", role: "立法委員", party: "中國國民黨", district: "第1選區" },
      { name: "林淑芬", role: "立法委員", party: "民主進步黨", district: "第2選區" },
      { name: "李坤城", role: "立法委員", party: "民主進步黨", district: "第3選區" },
      { name: "吳秉叡", role: "立法委員", party: "民主進步黨", district: "第4選區" },
      { name: "蘇巧慧", role: "立法委員", party: "民主進步黨", district: "第5選區" },
      { name: "張宏陸", role: "立法委員", party: "民主進步黨", district: "第6選區" },
      { name: "葉元之", role: "立法委員", party: "中國國民黨", district: "第7選區" },
      { name: "張智倫", role: "立法委員", party: "中國國民黨", district: "第8選區" },
      { name: "林德福", role: "立法委員", party: "中國國民黨", district: "第9選區" },
      { name: "吳琪銘", role: "立法委員", party: "民主進步黨", district: "第10選區" },
      { name: "羅明才", role: "立法委員", party: "中國國民黨", district: "第11選區" },
      { name: "廖先翔", role: "立法委員", party: "中國國民黨", district: "第12選區" },
    ],
    council: {
      name: "新北市議會",
      totalSeats: 66,
      parties: [
        { party: "中國國民黨", seats: 30, color: KMT_COLOR },
        { party: "民主進步黨", seats: 28, color: DPP_COLOR },
        { party: "無黨團結聯盟", seats: 2, color: NPSU_COLOR },
        { party: "台灣民眾黨", seats: 1, color: TPP_COLOR },
        { party: "無黨籍", seats: 3, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "市長、市議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 72.78,
    avgCouncilAge: 53.8,
  },

  "桃園市": {
    region: "桃園市",
    regionType: "直轄市",
    mayor: {
      name: "張善政",
      role: "桃園市長",
      party: "中國國民黨",
      since: "2022/12/25",
      electionCount: 1,
      summary: "曾任行政院院長，以科技背景推動桃園智慧城市轉型與航空城開發計畫。",
    },
    legislators: [
      { name: "牛煦庭", role: "立法委員", party: "中國國民黨", district: "第1選區" },
      { name: "涂權吉", role: "立法委員", party: "中國國民黨", district: "第2選區" },
      { name: "魯明哲", role: "立法委員", party: "中國國民黨", district: "第3選區" },
      { name: "萬美玲", role: "立法委員", party: "中國國民黨", district: "第4選區" },
      { name: "呂玉玲", role: "立法委員", party: "中國國民黨", district: "第5選區" },
      { name: "邱若華", role: "立法委員", party: "中國國民黨", district: "第6選區" },
    ],
    council: {
      name: "桃園市議會",
      totalSeats: 57,
      parties: [
        { party: "中國國民黨", seats: 30, color: KMT_COLOR },
        { party: "民主進步黨", seats: 24, color: DPP_COLOR },
        { party: "無黨籍", seats: 3, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "市長、市議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 72.22,
    avgCouncilAge: 54.1,
  },

  "台中市": {
    region: "台中市",
    regionType: "直轄市",
    mayor: {
      name: "盧秀燕",
      role: "台中市長",
      party: "中國國民黨",
      since: "2018/12/25",
      electionCount: 2,
      summary: "以空氣品質改善著稱，推動交通建設與觀光發展，民調支持度全台名列前茅。",
    },
    legislators: [
      { name: "蔡其昌", role: "立法委員", party: "民主進步黨", district: "第1選區" },
      { name: "顏寬恒", role: "立法委員", party: "中國國民黨", district: "第2選區" },
      { name: "楊瓊瓔", role: "立法委員", party: "中國國民黨", district: "第3選區" },
      { name: "廖偉翔", role: "立法委員", party: "中國國民黨", district: "第4選區" },
      { name: "黃健豪", role: "立法委員", party: "中國國民黨", district: "第5選區" },
      { name: "羅廷瑋", role: "立法委員", party: "中國國民黨", district: "第6選區" },
      { name: "何欣純", role: "立法委員", party: "民主進步黨", district: "第7選區" },
      { name: "江啓臣", role: "立法委員", party: "中國國民黨", district: "第8選區" },
    ],
    council: {
      name: "台中市議會",
      totalSeats: 65,
      parties: [
        { party: "中國國民黨", seats: 32, color: KMT_COLOR },
        { party: "民主進步黨", seats: 24, color: DPP_COLOR },
        { party: "台灣民眾黨", seats: 1, color: TPP_COLOR },
        { party: "無黨籍", seats: 7, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "市長、市議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 73.85,
    avgCouncilAge: 54.5,
  },

  "台南市": {
    region: "台南市",
    regionType: "直轄市",
    mayor: {
      name: "黃偉哲",
      role: "台南市長",
      party: "民主進步黨",
      since: "2018/12/25",
      electionCount: 2,
      summary: "推動台南科學園區發展與古都文化觀光，致力於城市現代化與歷史保存的平衡。",
    },
    legislators: [
      { name: "賴惠員", role: "立法委員", party: "民主進步黨", district: "第1選區" },
      { name: "郭國文", role: "立法委員", party: "民主進步黨", district: "第2選區" },
      { name: "陳亭妃", role: "立法委員", party: "民主進步黨", district: "第3選區" },
      { name: "林宜瑾", role: "立法委員", party: "民主進步黨", district: "第4選區" },
      { name: "林俊憲", role: "立法委員", party: "民主進步黨", district: "第5選區" },
      { name: "王定宇", role: "立法委員", party: "民主進步黨", district: "第6選區" },
    ],
    council: {
      name: "台南市議會",
      totalSeats: 57,
      parties: [
        { party: "民主進步黨", seats: 28, color: DPP_COLOR },
        { party: "中國國民黨", seats: 12, color: KMT_COLOR },
        { party: "無黨團結聯盟", seats: 2, color: NPSU_COLOR },
        { party: "台灣基進", seats: 1, color: TSP_COLOR },
        { party: "台灣團結聯盟", seats: 1, color: TUF_COLOR },
        { party: "無黨籍", seats: 13, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "市長、市議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 71.98,
    avgCouncilAge: 55.2,
  },

  "高雄市": {
    region: "高雄市",
    regionType: "直轄市",
    mayor: {
      name: "陳其邁",
      role: "高雄市長",
      party: "民主進步黨",
      since: "2020/08/24",
      electionCount: 2,
      summary: "醫師從政，推動高雄產業轉型、半導體產業進駐，以及城市交通與港灣建設。",
    },
    legislators: [
      { name: "邱議瑩", role: "立法委員", party: "民主進步黨", district: "第1選區" },
      { name: "邱志偉", role: "立法委員", party: "民主進步黨", district: "第2選區" },
      { name: "李柏毅", role: "立法委員", party: "民主進步黨", district: "第3選區" },
      { name: "林岱樺", role: "立法委員", party: "民主進步黨", district: "第4選區" },
      { name: "李昆澤", role: "立法委員", party: "民主進步黨", district: "第5選區" },
      { name: "黃捷", role: "立法委員", party: "民主進步黨", district: "第6選區" },
      { name: "許智傑", role: "立法委員", party: "民主進步黨", district: "第7選區" },
      { name: "賴瑞隆", role: "立法委員", party: "民主進步黨", district: "第8選區" },
    ],
    council: {
      name: "高雄市議會",
      totalSeats: 65,
      parties: [
        { party: "中國國民黨", seats: 28, color: KMT_COLOR },
        { party: "民主進步黨", seats: 27, color: DPP_COLOR },
        { party: "無黨團結聯盟", seats: 3, color: NPSU_COLOR },
        { party: "台灣團結聯盟", seats: 1, color: TUF_COLOR },
        { party: "台灣基進", seats: 1, color: TSP_COLOR },
        { party: "無黨籍", seats: 4, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "市長、市議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 71.25,
    avgCouncilAge: 54.8,
  },

  "基隆市": {
    region: "基隆市",
    regionType: "省轄市",
    mayor: {
      name: "謝國樑",
      role: "基隆市長",
      party: "中國國民黨",
      since: "2022/12/25",
      electionCount: 1,
      summary: "推動基隆港區轉型與城市再生，致力於改善交通連結與觀光發展。",
    },
    legislators: [
      { name: "林沛祥", role: "立法委員", party: "中國國民黨", district: "基隆市" },
    ],
    council: {
      name: "基隆市議會",
      totalSeats: 31,
      parties: [
        { party: "中國國民黨", seats: 14, color: KMT_COLOR },
        { party: "民主進步黨", seats: 10, color: DPP_COLOR },
        { party: "無黨籍", seats: 7, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "市長、市議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 70.57,
    avgCouncilAge: 56.2,
  },

  "新竹市": {
    region: "新竹市",
    regionType: "省轄市",
    mayor: {
      name: "高虹安",
      role: "新竹市長",
      party: "台灣民眾黨",
      since: "2022/12/25",
      electionCount: 1,
      summary: "科技背景出身，因司法案件目前停職中。新竹市為台灣半導體產業重鎮。",
    },
    legislators: [
      { name: "鄭正鈐", role: "立法委員", party: "中國國民黨", district: "新竹市" },
    ],
    council: {
      name: "新竹市議會",
      totalSeats: 33,
      parties: [
        { party: "中國國民黨", seats: 15, color: KMT_COLOR },
        { party: "民主進步黨", seats: 11, color: DPP_COLOR },
        { party: "台灣民眾黨", seats: 2, color: TPP_COLOR },
        { party: "無黨籍", seats: 5, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "市長、市議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 74.59,
    avgCouncilAge: 50.8,
  },

  "嘉義市": {
    region: "嘉義市",
    regionType: "省轄市",
    mayor: {
      name: "黃敏惠",
      role: "嘉義市長",
      party: "中國國民黨",
      since: "2018/12/25",
      electionCount: 2,
      summary: "通算三屆市長，推動嘉義市觀光與醫療產業發展，致力於打造宜居城市。",
    },
    legislators: [
      { name: "王美惠", role: "立法委員", party: "民主進步黨", district: "嘉義市" },
    ],
    council: {
      name: "嘉義市議會",
      totalSeats: 23,
      parties: [
        { party: "中國國民黨", seats: 10, color: KMT_COLOR },
        { party: "民主進步黨", seats: 8, color: DPP_COLOR },
        { party: "無黨籍", seats: 5, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "市長、市議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 72.90,
    avgCouncilAge: 57.1,
  },

  "新竹縣": {
    region: "新竹縣",
    regionType: "縣",
    mayor: {
      name: "楊文科",
      role: "新竹縣長",
      party: "中國國民黨",
      since: "2018/12/25",
      electionCount: 2,
      summary: "推動竹科周邊發展與交通建設，致力於平衡科技園區與農村地區的發展差距。",
    },
    legislators: [
      { name: "徐欣瑩", role: "立法委員", party: "中國國民黨", district: "第1選區" },
      { name: "林思銘", role: "立法委員", party: "中國國民黨", district: "第2選區" },
    ],
    council: {
      name: "新竹縣議會",
      totalSeats: 36,
      parties: [
        { party: "中國國民黨", seats: 20, color: KMT_COLOR },
        { party: "民主進步黨", seats: 8, color: DPP_COLOR },
        { party: "無黨籍", seats: 8, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "縣長、縣議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 73.46,
    avgCouncilAge: 55.6,
  },

  "苗栗縣": {
    region: "苗栗縣",
    regionType: "縣",
    mayor: {
      name: "鍾東錦",
      role: "苗栗縣長",
      party: "中國國民黨",
      since: "2022/12/25",
      electionCount: 1,
      summary: "無所屬當選後加入國民黨，推動客家文化保存與在地產業發展。",
    },
    legislators: [
      { name: "陳超明", role: "立法委員", party: "無黨籍", district: "第1選區" },
      { name: "邱鎮軍", role: "立法委員", party: "中國國民黨", district: "第2選區" },
    ],
    council: {
      name: "苗栗縣議會",
      totalSeats: 38,
      parties: [
        { party: "中國國民黨", seats: 22, color: KMT_COLOR },
        { party: "民主進步黨", seats: 6, color: DPP_COLOR },
        { party: "無黨籍", seats: 10, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "縣長、縣議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 71.69,
    avgCouncilAge: 57.3,
  },

  "彰化縣": {
    region: "彰化縣",
    regionType: "縣",
    mayor: {
      name: "王惠美",
      role: "彰化縣長",
      party: "中國國民黨",
      since: "2018/12/25",
      electionCount: 2,
      summary: "推動彰化產業升級與環境保護，致力於改善交通基礎建設。",
    },
    legislators: [
      { name: "陳秀寳", role: "立法委員", party: "民主進步黨", district: "第1選區" },
      { name: "黃秀芳", role: "立法委員", party: "民主進步黨", district: "第2選區" },
      { name: "謝衣鳳", role: "立法委員", party: "中國國民黨", district: "第3選區" },
      { name: "陳素月", role: "立法委員", party: "民主進步黨", district: "第4選區" },
    ],
    council: {
      name: "彰化縣議會",
      totalSeats: 54,
      parties: [
        { party: "中國國民黨", seats: 25, color: KMT_COLOR },
        { party: "民主進步黨", seats: 18, color: DPP_COLOR },
        { party: "無黨籍", seats: 11, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "縣長、縣議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 72.41,
    avgCouncilAge: 56.9,
  },

  "南投縣": {
    region: "南投縣",
    regionType: "縣",
    mayor: {
      name: "許淑華",
      role: "南投縣長",
      party: "中國國民黨",
      since: "2022/12/25",
      electionCount: 1,
      summary: "推動南投觀光與農業發展，致力於提升山區交通安全與防災能力。",
    },
    legislators: [
      { name: "馬文君", role: "立法委員", party: "中國國民黨", district: "第1選區" },
      { name: "游顥", role: "立法委員", party: "中國國民黨", district: "第2選區" },
    ],
    council: {
      name: "南投縣議會",
      totalSeats: 37,
      parties: [
        { party: "中國國民黨", seats: 20, color: KMT_COLOR },
        { party: "民主進步黨", seats: 8, color: DPP_COLOR },
        { party: "無黨籍", seats: 9, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "縣長、縣議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 71.11,
    avgCouncilAge: 57.8,
  },

  "雲林縣": {
    region: "雲林縣",
    regionType: "縣",
    mayor: {
      name: "張麗善",
      role: "雲林縣長",
      party: "中國國民黨",
      since: "2018/12/25",
      electionCount: 2,
      summary: "推動雲林農業現代化與食品安全，致力於六輕工業區環境治理。",
    },
    legislators: [
      { name: "丁學忠", role: "立法委員", party: "中國國民黨", district: "第1選區" },
      { name: "劉建國", role: "立法委員", party: "民主進步黨", district: "第2選區" },
    ],
    council: {
      name: "雲林縣議會",
      totalSeats: 43,
      parties: [
        { party: "中國國民黨", seats: 15, color: KMT_COLOR },
        { party: "民主進步黨", seats: 14, color: DPP_COLOR },
        { party: "無黨籍", seats: 14, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "縣長、縣議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 68.54,
    avgCouncilAge: 58.2,
  },

  "嘉義縣": {
    region: "嘉義縣",
    regionType: "縣",
    mayor: {
      name: "翁章梁",
      role: "嘉義縣長",
      party: "民主進步黨",
      since: "2018/12/25",
      electionCount: 2,
      summary: "推動嘉義農業品牌化與觀光發展，致力於改善偏鄉醫療與教育資源。",
    },
    legislators: [
      { name: "蔡易餘", role: "立法委員", party: "民主進步黨", district: "第1選區" },
      { name: "陳冠廷", role: "立法委員", party: "民主進步黨", district: "第2選區" },
    ],
    council: {
      name: "嘉義縣議會",
      totalSeats: 37,
      parties: [
        { party: "民主進步黨", seats: 14, color: DPP_COLOR },
        { party: "中國國民黨", seats: 10, color: KMT_COLOR },
        { party: "無黨籍", seats: 13, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "縣長、縣議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 69.71,
    avgCouncilAge: 58.5,
  },

  "屏東縣": {
    region: "屏東縣",
    regionType: "縣",
    mayor: {
      name: "周春米",
      role: "屏東縣長",
      party: "民主進步黨",
      since: "2022/12/25",
      electionCount: 1,
      summary: "法官出身，推動屏東觀光與農業發展，致力於偏鄉公共服務均等化。",
    },
    legislators: [
      { name: "鍾佳濱", role: "立法委員", party: "民主進步黨", district: "第1選區" },
      { name: "徐富癸", role: "立法委員", party: "民主進步黨", district: "第2選區" },
    ],
    council: {
      name: "屏東縣議會",
      totalSeats: 55,
      parties: [
        { party: "民主進步黨", seats: 20, color: DPP_COLOR },
        { party: "中國國民黨", seats: 16, color: KMT_COLOR },
        { party: "無黨籍", seats: 19, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "縣長、縣議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 70.33,
    avgCouncilAge: 57.6,
  },

  "宜蘭縣": {
    region: "宜蘭縣",
    regionType: "縣",
    mayor: {
      name: "林姿妙（停職中）",
      role: "宜蘭縣長",
      party: "中國國民黨",
      since: "2022/12/25",
      electionCount: 1,
      summary: "因司法案件停職中，由代理縣長林茂盛代理縣政。宜蘭以觀光農業聞名。",
    },
    legislators: [
      { name: "陳俊宇", role: "立法委員", party: "民主進步黨", district: "宜蘭縣" },
    ],
    council: {
      name: "宜蘭縣議會",
      totalSeats: 34,
      parties: [
        { party: "民主進步黨", seats: 14, color: DPP_COLOR },
        { party: "中國國民黨", seats: 12, color: KMT_COLOR },
        { party: "無黨籍", seats: 8, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "縣長、縣議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 70.99,
    avgCouncilAge: 56.4,
  },

  "花蓮縣": {
    region: "花蓮縣",
    regionType: "縣",
    mayor: {
      name: "徐榛蔚",
      role: "花蓮縣長",
      party: "中國國民黨",
      since: "2018/12/25",
      electionCount: 2,
      summary: "推動花蓮觀光與原住民文化保存，致力於提升東部交通與防災能力。",
    },
    legislators: [
      { name: "傅崐萁", role: "立法委員", party: "中國國民黨", district: "花蓮縣" },
    ],
    council: {
      name: "花蓮縣議會",
      totalSeats: 33,
      parties: [
        { party: "中國國民黨", seats: 18, color: KMT_COLOR },
        { party: "民主進步黨", seats: 5, color: DPP_COLOR },
        { party: "無黨籍", seats: 10, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "縣長、縣議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 65.72,
    avgCouncilAge: 56.8,
  },

  "台東縣": {
    region: "台東縣",
    regionType: "縣",
    mayor: {
      name: "饒慶鈴",
      role: "台東縣長",
      party: "中國國民黨",
      since: "2018/12/25",
      electionCount: 2,
      summary: "推動台東慢活觀光品牌與熱氣球嘉年華，致力於提升偏鄉教育與醫療。",
    },
    legislators: [
      { name: "黃建賓", role: "立法委員", party: "中國國民黨", district: "台東縣" },
    ],
    council: {
      name: "台東縣議會",
      totalSeats: 30,
      parties: [
        { party: "中國國民黨", seats: 16, color: KMT_COLOR },
        { party: "民主進步黨", seats: 5, color: DPP_COLOR },
        { party: "無黨籍", seats: 9, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "縣長、縣議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 62.01,
    avgCouncilAge: 57.4,
  },

  "澎湖縣": {
    region: "澎湖縣",
    regionType: "縣",
    mayor: {
      name: "陳光復",
      role: "澎湖縣長",
      party: "民主進步黨",
      since: "2022/12/25",
      electionCount: 1,
      summary: "通算第二屆縣長，推動澎湖觀光國際化與離島交通改善。",
    },
    legislators: [
      { name: "楊曜", role: "立法委員", party: "民主進步黨", district: "澎湖縣" },
    ],
    council: {
      name: "澎湖縣議會",
      totalSeats: 19,
      parties: [
        { party: "中國國民黨", seats: 8, color: KMT_COLOR },
        { party: "民主進步黨", seats: 5, color: DPP_COLOR },
        { party: "無黨籍", seats: 6, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "縣長、縣議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 53.70,
    avgCouncilAge: 58.9,
  },

  "金門縣": {
    region: "金門縣",
    regionType: "縣",
    mayor: {
      name: "陳福海",
      role: "金門縣長",
      party: "無黨籍",
      since: "2022/12/25",
      electionCount: 1,
      summary: "通算第二屆縣長，推動金門觀光與兩岸交流，致力於離島基礎建設。",
    },
    legislators: [
      { name: "陳玉珍", role: "立法委員", party: "中國國民黨", district: "金門縣" },
    ],
    council: {
      name: "金門縣議會",
      totalSeats: 19,
      parties: [
        { party: "中國國民黨", seats: 10, color: KMT_COLOR },
        { party: "無黨籍", seats: 9, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "縣長、縣議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 36.37,
    avgCouncilAge: 59.3,
  },

  "連江縣": {
    region: "連江縣",
    regionType: "縣",
    mayor: {
      name: "王忠銘",
      role: "連江縣長",
      party: "中國國民黨",
      since: "2022/12/25",
      electionCount: 1,
      summary: "推動馬祖觀光與離島特色發展，致力於改善離島交通與生活品質。",
    },
    legislators: [
      { name: "鄭學聖", role: "立法委員", party: "中國國民黨", district: "連江縣" },
    ],
    council: {
      name: "連江縣議會",
      totalSeats: 9,
      parties: [
        { party: "中國國民黨", seats: 5, color: KMT_COLOR },
        { party: "無黨籍", seats: 4, color: IND_COLOR },
      ],
    },
    elections: [
      { name: "2026年統一地方選舉", date: "2026-11-28", description: "縣長、縣議員改選" },
      { name: "2028年總統暨立委選舉", date: "2028-01-15", description: "總統、副總統、立法委員改選" },
    ],
    voterTurnout: 51.32,
    avgCouncilAge: 60.1,
  },
};

export function findRegion(address: string): RegionData | null {
  for (const [key, data] of Object.entries(regionsData)) {
    if (address.includes(key)) return data;
  }
  return null;
}
