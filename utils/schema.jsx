import {
    integer,
    numeric,
    pgTable,
    serial,
    varchar,
    pgSchema,
} from "drizzle-orm/pg-core";

// Define your schema
export const mySchema = pgSchema('my_schema');

// Define your tables within the schema
export const Budgets = mySchema.table("budgets", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    amount: varchar("amount").notNull(),
    icon: varchar("icon"),
    createdBy: varchar("createdBy").notNull(),
});

export const Incomes = mySchema.table("incomes", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    amount: varchar("amount").notNull(),
    icon: varchar("icon"),
    createdBy: varchar("createdBy").notNull(),
});

export const Expenses = mySchema.table("expenses", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    amount: numeric("amount").notNull().default(0),
    budgetId: integer("budgetId").references(() => Budgets.id),
    createdAt: varchar("createdAt").notNull(),
});
