import type { JournalEntry } from "@pocket-log/shared";
import { db } from "./database";

export async function createJournalEntry(
  input: Pick<JournalEntry, "title" | "content">,
): Promise<JournalEntry> {
  const now = new Date().toISOString();

  const entry: JournalEntry = {
    id: crypto.randomUUID(),
    title: input.title,
    content: input.content,
    createdAt: now,
    updatedAt: now,
  };

  await db.journalEntries.add(entry);

  return entry;
}

export async function getJournalEntries(): Promise<JournalEntry[]> {
  return db.journalEntries.orderBy("createdAt").reverse().toArray();
}

export async function getJournalEntryById(
  id: string,
): Promise<JournalEntry | undefined> {
  return db.journalEntries.get(id);
}

export async function updateJournalEntry(
  id: string,
  changes: Pick<JournalEntry, "title" | "content">,
): Promise<void> {
  const existingEntry = await db.journalEntries.get(id);

  if (!existingEntry) {
    throw new Error(`Journal entry not found: ${id}`);
  }

  await db.journalEntries.update(id, {
    title: changes.title,
    content: changes.content,
    updatedAt: new Date().toISOString(),
  });
}

export async function deleteJournalEntry(id: string): Promise<void> {
  await db.journalEntries.delete(id);
}
