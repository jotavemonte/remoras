import * as mongoose from "mongoose";
import config from "../config";

export default async (): Promise<any> => {
  mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  return db;
};
