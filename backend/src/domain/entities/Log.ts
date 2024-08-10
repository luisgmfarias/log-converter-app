export class Log {
  constructor(
    public httpMethod: string,
    public statusCode: number,
    public uriPath: string,
    public timeTaken: number,
    public responseSize: number,
    public cacheStatus: string
  ) {}

  static fromInputLog(inputLog: string): Log {
    const parts = inputLog.split("|");

    const methodAndUri = parts[3]?.match(/"(.*?) (.*?) HTTP\/1.1"/);
    const httpMethod = methodAndUri ? methodAndUri[1] : "";
    const uriPath = methodAndUri ? methodAndUri[2] : "";

    const responseSize = parseInt(parts[0]);
    const statusCode = parseInt(parts[1]);
    const cacheStatus = parts[2];
    const timetaken = Math.round(parseFloat(parts[4]));

    return new Log(
      httpMethod,
      statusCode,
      uriPath,
      timetaken,
      responseSize,
      cacheStatus
    );
  }
}
