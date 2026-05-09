"use client";

import { redirect } from "next/navigation";

const FORM_URL = "https://forms.gle/ug2KErfngurbgGmj8";

export default function Apply() {
  redirect(FORM_URL);
}
