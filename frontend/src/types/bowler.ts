import { team } from './team.ts';

export type bowler = {
  bowlerID: number;
  bowlerFirstName: string;
  bowlerLastName: string;
  bowlerMiddleInit: string;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  teamID: number;
  team: team;
};
