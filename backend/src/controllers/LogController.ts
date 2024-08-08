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

    try {
      const response = await axios.get(sourceUrl);
      const rawLogText = response.data;

      const rawLogs = rawLogText.trim().split("\n");

      const result = this.convertLogUseCase.execute(rawLogs);

      res.setHeader("Content-Type", "text/plain");
      res.send(result);
    } catch (error) {
      console.error("Erro ao converter log:", error);
      res.status(500).send("Erro ao processar a conversão do log.");
    }
  }
}
