"use server";

import { cookies } from "next/headers";

export const getServerToken = async () => {
  const token = (await cookies()).get("token");
  return token?.value;
};

export const setServerToken = async (token: string) => {
  (await cookies()).set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
};

export const removeServerToken = async () => {
  (await cookies()).delete("token");
};