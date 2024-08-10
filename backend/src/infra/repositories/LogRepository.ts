import { Log } from "../../domain/entities/Log";
import { db } from "../config/firebase";

export class LogRepository {
  async save(log: Log): Promise<void> {
    await db.collection("logs").add({
      statusCode: log.statusCode,
      cacheStatus: log.cacheStatus,
      httpMethod: log.httpMethod,
      uriPath: log.uriPath,
      timeTaken: log.timeTaken,
      responseSize: log.responseSize,
      createdAt: new Date(),
    });
  }
}
