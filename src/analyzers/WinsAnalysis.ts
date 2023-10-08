import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { Matchresult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}
  run(matches: MatchData[]): string {
    let teamWins = 0;

    matches.forEach((match: MatchData) => {
      if (match[1] === "Man United" && match[5] === Matchresult.HomeWin) {
        teamWins++;
      } else if (
        match[2] === "Man United" &&
        match[5] === Matchresult.AwayWin
      ) {
        teamWins++;
      }
    });
    return `This ${this.teamName} won ${teamWins} matches`;
  }
}
