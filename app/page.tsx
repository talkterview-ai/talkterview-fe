import { redirect } from "next/navigation";
import { PATH } from "@/shared/constants/path";

export default function MainScreen() {
  redirect(PATH.dashboard);
}
