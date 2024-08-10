import { Log } from "../../Log";

describe("Log Entity", () => {
  it("should correctly parse a input log string", () => {
    const rawLog = '312|200|HIT|"GET /robots.txt HTTP/1.1"|100.2';
    const log = Log.fromInputLog(rawLog);

    expect(log.responseSize).toBe(312);
    expect(log.statusCode).toBe(200);
    expect(log.cacheStatus).toBe("HIT");
    expect(log.httpMethod).toBe("GET");
    expect(log.uriPath).toBe("/robots.txt");
    expect(log.timeTaken).toBe(100);
  });
});
