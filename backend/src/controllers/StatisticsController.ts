import { Request, Response } from "express";
import { StatisticsRepository } from "../infra/repositories/StatisticsRepository";

export class StatisticsController {
  private statisticsRepository: StatisticsRepository;

  constructor(statisticsRepository: StatisticsRepository) {
    this.statisticsRepository = statisticsRepository;
  }

  public async getStats(req: Request, res: Response): Promise<void> {
    const logCount = await this.statisticsRepository.getLogStats();
    const conversionStats =
      await this.statisticsRepository.getConversionStats();

    res.json({
      logCount,
      conversionStats,
    });
  }
}
