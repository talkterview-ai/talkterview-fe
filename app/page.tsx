import { redirect } from "next/navigation";
import { PATH } from "@/base/constants/path";

export default function MainScreen() {
  redirect(PATH.dashboard);
}
