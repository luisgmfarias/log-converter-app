export class Log {
  constructor(
    public id: number,
    public statusCode: number,
    public cacheStatus: string,
    public httpMethod: string,
    public uriPath: string,
    public timeTaken: number,
    public responseSize: number
  ) {}

  static fromRawLog(rawLog: string): Log {
    const parts = rawLog.split("|");

    const methodAndUri = parts[3]?.match(/"(.*?) (.*?) HTTP\/1.1"/);
    const httpMethod = methodAndUri ? methodAndUri[1] : "";
    const uriPath = methodAndUri ? methodAndUri[2] : "";

    return new Log(
      parseInt(parts[0]),
      parseInt(parts[1]),
      parts[2],
      httpMethod,
      uriPath,
      Math.round(parseFloat(parts[4])),
      parseInt(parts[5])
    );
  }
}
