import { HttpCore } from "./core";

const IS_SERVER = typeof window === "undefined";

export const API_BASE_URL = IS_SERVER
  ? process.env.API_BASE_URL
  : process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchClient = new HttpCore(API_BASE_URL!);
