export class Temperature {
  constructor(
    public temp: number,
    public tempMin: number,
    public tempMax: number,
    public pressure: number,
    public seaLevel: number,
    public grndLevel: number,
    public humidity: number,
    public tempKf: number) {
  }
}
