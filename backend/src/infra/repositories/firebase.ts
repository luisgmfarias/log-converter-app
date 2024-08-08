import admin from "firebase-admin";
import serviceAccount from "../../../logconverter-firebase-adminsdk.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: "https://logconverter.firebaseio.com",
});

const db = admin.firestore();

export { db };
