import { Inter, Fira_Code, Kumbh_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const kumbSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const interFont = inter.className;
export const firaCodeFont = firaCode.className;
export const kumbSansFont = kumbSans.className;
