import { redirect } from "next/navigation";
import { PATH } from "@/base/constants/path";
import { getToken } from "@/base/utils";

export default async function MainScreen() {
  const token = await getToken();

  if (token) {
    redirect(PATH.dashboard);
  } else {
    redirect(PATH.login);
  }
}
