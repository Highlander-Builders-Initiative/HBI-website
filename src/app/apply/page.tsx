"use client";

import { redirect } from "next/navigation";

const FORM_URL = "https://forms.gle/YeqQe2s54oTN2DyZ8";

export default function Apply() {
  redirect(FORM_URL);
}
