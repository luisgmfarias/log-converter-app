import { db } from "../config/firebase";
import admin from "firebase-admin";

interface ConversionRecord {
  date: string;
  count: number;
}

export class StatisticsRepository {
  private logsCollection = db.collection("logs");
  private conversionsCollection = db.collection("conversions");

  async incrementLogCount(): Promise<void> {
    const logStatsRef = this.logsCollection.doc("logStats");
    const logStatsDoc = await logStatsRef.get();

    if (!logStatsDoc.exists) {
      await logStatsRef.set({ count: 1 });
    } else {
      await logStatsRef.update({
        count: admin.firestore.FieldValue.increment(1),
      });
    }
  }

  async incrementConversionCount(date: string): Promise<void> {
    const docRef = this.conversionsCollection.doc(date);
    const doc = await docRef.get();

    if (doc.exists) {
      await docRef.update({
        count: admin.firestore.FieldValue.increment(1),
      });
    } else {
      await docRef.set({ date, count: 1 });
    }
  }

  async getLogStats(): Promise<number> {
    const doc = await this.logsCollection.doc("logStats").get();
    return doc.exists ? doc.data()?.count ?? 0 : 0;
  }

  async getConversionStats(): Promise<ConversionRecord[]> {
    const snapshot = await this.conversionsCollection.get();
    return snapshot.docs.map((doc) => doc.data() as ConversionRecord);
  }
}
