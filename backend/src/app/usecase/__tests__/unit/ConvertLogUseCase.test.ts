import { StatisticsRepository } from "../../../../infra/repositories/StatisticsRepository";
import { ConvertLogUseCase } from "../../ConvertLogUseCase";

jest.mock("../../../../infra/repositories/StatisticsRepository");

describe("ConvertLogUseCase", () => {
  let convertLogUseCase: ConvertLogUseCase;
  let mockStatisticsRepository: jest.Mocked<StatisticsRepository>;

  beforeEach(() => {
    convertLogUseCase = new ConvertLogUseCase(mockStatisticsRepository);
  });

  it("should convert raw logs to the correct format", async () => {
    const rawLogs = [
      '312|200|HIT|"GET /robots.txt HTTP/1.1"|100.2',
      '101|200|MISS|"POST /myImages HTTP/1.1"|319.4',
    ];

    const result = await convertLogUseCase.execute(rawLogs);

    expect(result).toContain(`#Version: 1.0`);
    expect(result).toContain(`"MINHA CDN" GET 200 /robots.txt 100 312 HIT`);
    expect(result).toContain(`"MINHA CDN" POST 200 /myImages 319 101 MISS`);
  });
});
