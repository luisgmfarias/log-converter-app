import express from "express";
import cors from "cors";
import { LogController } from "../../controllers/LogController";
import { StatisticsController } from "../../controllers/StatisticsController";
import { ConvertLogUseCase } from "../../app/usecase/ConvertLogUseCase";
import { StatisticsRepository } from "../../infra/repositories/StatisticsRepository";

const app = express();

app.use(cors());

app.use(express.json());

const statisticsRepository = new StatisticsRepository();
const convertLogUseCase = new ConvertLogUseCase(statisticsRepository);
const logController = new LogController(convertLogUseCase);
const statisticsController = new StatisticsController(statisticsRepository);

app.post("/convert_log", logController.convertLog.bind(logController));
app.get("/stats", statisticsController.getStats.bind(statisticsController));

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
