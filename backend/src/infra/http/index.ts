import express from "express";
import { LogController } from "../../controllers/LogController";
import { ConvertLogUseCase } from "../../app/usecase/ConvertLogUseCase";

const app = express();
app.use(express.json());

const convertLogUseCase = new ConvertLogUseCase();
const logController = new LogController(convertLogUseCase);

app.post("/convert-log", logController.convertLog.bind(logController));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
