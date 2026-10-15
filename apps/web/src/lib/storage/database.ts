import Dexie, { type EntityTable } from "dexie";
import type { JournalEntry } from "@pocket-log/shared";

class PocketLogDatabase extends Dexie {
  journalEntries!: EntityTable<JournalEntry, "id">;

  constructor() {
    super("PocketLogDatabase");

    this.version(1).stores({
      journalEntries: "id, createdAt, updatedAt",
    });
  }
}

export const db = new PocketLogDatabase();
