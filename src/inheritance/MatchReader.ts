import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "../utils";
import { Matchresult } from "../MatchResult";

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  Matchresult,
  string
];

export class MatchReader extends CsvFileReader<MatchData> {
  returnType = MatchReader;
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as Matchresult,
      row[6],
    ];
  }
}
