"use client";

import { useEffect } from "react";

const FORM_URL = "https://forms.gle/ug2KErfngurbgGmj8";

export default function Apply() {
  useEffect(() => {
    window.location.replace(FORM_URL);
  }, []);

  return (
    <main className="flex min-h-[85vh] items-center justify-center p-6 text-center">
      <p>
        Redirecting to the application form. If you are not redirected, {" "}
        <a className="underline" href={FORM_URL}>
          continue to the form
        </a>
        .
      </p>
    </main>
  );
}
