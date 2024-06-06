import {
    integer,
    pgEnum,
    pgTable,
    serial,
    uniqueIndex,
    varchar,
    boolean,
    timestamp,
  //   defaultCurrentTimestamp()
  } from "drizzle-orm/pg-core";
  
  import { relations } from "drizzle-orm";

  // userTable creation
export const usersTable = pgTable("users", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    contact_phone: varchar("contact_phone", { length: 20 }),
    phone_verified: boolean("phone_verified"),
    email: varchar("email", { length: 256 }),
    email_verified: boolean("email_verified"),
    confirmation_code: varchar("confirmation_code", { length: 256 }),
    password: varchar("password", { length: 256 }),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: varchar("created_at", { length: 256 }),
  });