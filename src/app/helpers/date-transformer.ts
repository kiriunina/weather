export class DateTransformer {
  public static fromTimestamp(dt: number): string {
    const date = new Date();
    date.setTime(dt * 1000);

    return date.toLocaleString();
  }
}
