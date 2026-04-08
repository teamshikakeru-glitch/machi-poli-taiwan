export interface Politician {
  name: string;
  role: string;
  party: string;
  district?: string;
  since?: string;
  electionCount?: number;
  summary?: string;
  source?: string;
  image?: string;
}

export interface CouncilComposition {
  name: string;
  parties: PartySeats[];
  totalSeats: number;
}

export interface PartySeats {
  party: string;
  seats: number;
  color: string;
}

export interface ElectionSchedule {
  name: string;
  date: string;
  daysUntil?: number;
  description?: string;
}

export interface President {
  name: string;
  party: string;
  since: string;
  vicePresident: string;
  image?: string;
}

export interface RegionData {
  region: string;
  regionType: string;
  mayor: Politician;
  legislators: Politician[];
  council: CouncilComposition;
  elections: ElectionSchedule[];
  voterTurnout?: number;
  avgCouncilAge?: number;
}
