import { createPool } from "mysql2/promise.js";

export const Pool = createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "Medicamentos"
}); 