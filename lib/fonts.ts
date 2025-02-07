import { DM_Serif_Display, Teachers, Young_Serif } from "next/font/google";

const dm_serif_display = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"]
});

export const dm_serif_display_font = dm_serif_display.className;

const teachers = Teachers({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const teachers_font = teachers.className;


const young_serif = Young_Serif({
  weight: ["400"],
  subsets: ["latin"]
});

export const young_serif_font = young_serif.className;