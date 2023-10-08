import fs from "fs";
import { dateStringToDate } from "../utils";
import { Matchresult } from "../MatchResult";

export abstract class CsvFileReader<T> {
  constructor(public fileName: string) {}
  data: T[] = [];

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((match: string): string[] => {
        return match.split(",");
      })
      .map((row: string[]): T => this.mapRow(row));
  }
}
