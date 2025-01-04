import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});

export const wishlistTable = sqliteTable("wishlist", {
  id: int().primaryKey({ autoIncrement: true }),
  email: text().notNull().unique(),
  createdAt: text().default(sql`CURRENT_TIMESTAMP`),
});
