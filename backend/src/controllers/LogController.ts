import axios from "axios";
import { Request, Response } from "express";
import { ConvertLogUseCase } from "../app/usecase/ConvertLogUseCase";

export class LogController {
  private convertLogUseCase: ConvertLogUseCase;

  constructor(convertLogUseCase: ConvertLogUseCase) {
    this.convertLogUseCase = convertLogUseCase;
  }

  public async convertLog(req: Request, res: Response): Promise<void> {
    const { sourceUrl } = req.body;

    if (!sourceUrl) {
      res.status(400).send("sourceUrl is required");
      return;
    }

    try {
      const response = await axios.get(sourceUrl);
      const inputLogText = response.data;

      const inputLogs = inputLogText.trim().split("\n");

      const convertedLog = await this.convertLogUseCase.execute(inputLogs);

      const result = {
        inputLog: inputLogs,
        outputLog: convertedLog,
      };

      res.setHeader("Content-Type", "text/plain");
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao processar a conversão do log.");
    }
  }
}
