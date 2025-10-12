import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[85vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-sf text-6xl font-semibold">Err 404</h1>

        <p className="font-wdxl text-2xl font-medium">Page not found</p>
        <Link href="/">
          <Button variant="fancy-outline" className="mt-2 px-4 py-1.5">
            Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
