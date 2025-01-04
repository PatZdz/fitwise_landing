import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const wishlistTable = sqliteTable("wishlist", {
  id: int().primaryKey({ autoIncrement: true }),
  email: text().notNull().unique(),
  createdAt: text().default(sql`CURRENT_TIMESTAMP`),
});

export const contactFormTable = sqliteTable("contact_form", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull(),
  phone: text(),
  company: text().notNull(),
  location: text(),
  facilityType: text().notNull(),
  otherFacilityType: text(),
  facilityCount: text().notNull(),
  message: text(),
  createdAt: text().default(sql`CURRENT_TIMESTAMP`),
});
