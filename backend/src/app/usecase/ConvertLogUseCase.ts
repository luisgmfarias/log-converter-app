import { Log } from "../../domain/entities/Log";

export class ConvertLogUseCase {
  execute(rawLogs: string[]): string {
    const header = [
      "#Version: 1.0",
      `#Date: ${new Date().toLocaleString()}`,
      "#Fields: provider http-method status-code uri-path time-taken response-size cache-status",
    ];

    const entries = rawLogs.map((log) => {
      const entry = Log.fromRawLog(log);
      return `"MINHA CDN" ${entry.httpMethod} ${entry.statusCode} ${entry.uriPath} ${entry.timeTaken} ${entry.responseSize} ${entry.cacheStatus}`;
    });

    return [...header, ...entries].join("\n");
  }
}
