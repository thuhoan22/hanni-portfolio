import db from "data/db.json";

type DbCollectionName = keyof typeof db;

const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value));

export type ProfileRecord = (typeof db.profile)[number];
export type BlogRecord = (typeof db.blog)[number];
export type ClientRecord = (typeof db.client)[number];
export type CardRecord = (typeof db.card)[number];

export const getCollection = <T,>(
  collectionName: DbCollectionName,
  options?: { limit?: number; page?: number }
): { data: T[]; total: number } => {
  const source = clone(db[collectionName]) as T[];
  const total = source.length;

  if (!options?.limit) {
    return { data: source, total };
  }

  const page = options.page ?? 1;
  const start = (page - 1) * options.limit;
  const end = start + options.limit;

  return { data: source.slice(start, end), total };
};

export const getById = <T extends { id?: number },>(
  collectionName: DbCollectionName,
  id: number
): T | undefined => {
  const source = clone(db[collectionName]) as unknown as T[];
  return source.find((item) => item.id === id);
};
