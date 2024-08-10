import { Log } from "../../domain/entities/Log";
import { StatisticsRepository } from "../../infra/repositories/StatisticsRepository";

export class ConvertLogUseCase {
  private statisticsRepository: StatisticsRepository;

  constructor(statisticsRepository: StatisticsRepository) {
    this.statisticsRepository = statisticsRepository;
  }

  async execute(inputLogs: string[]): Promise<string> {
    const header = [
      "#Version: 1.0",
      `#Date: ${new Date().toLocaleString()}`,
      "#Fields: provider http-method status-code uri-path time-taken response-size cache-status",
    ];

    const entries = inputLogs.map((log) => {
      const entry = Log.fromInputLog(log);
      return `"MINHA CDN" ${entry.httpMethod} ${entry.statusCode} ${entry.uriPath} ${entry.timeTaken}  ${entry.responseSize} ${entry.cacheStatus}`;
    });

    await this.statisticsRepository.incrementLogCount();
    await this.statisticsRepository.incrementConversionCount(
      new Date().toISOString().split("T")[0]
    );

    return [...header, ...entries].join("\n");
  }
}
