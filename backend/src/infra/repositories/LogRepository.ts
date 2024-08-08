import { Log } from "../../domain/entities/Log";
import { db } from "./firebase";

export class LogRepository {
  async save(log: Log): Promise<void> {
    await db.collection("logs").add({
      id: log.id,
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
