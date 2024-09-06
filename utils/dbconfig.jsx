import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(
  "postgresql://moolamaster_owner:JkTMXGE1O4VY@ep-young-mountain-a13l9f43.ap-southeast-1.aws.neon.tech/MoolaMaster?sslmode=require"
);
export const db = drizzle(sql, { schema });