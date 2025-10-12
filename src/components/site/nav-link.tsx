import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export default function NavLink({
  href,
  children,
  className,
  ...rest
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "font-instrument text-neutral-700 decoration-neutral-300 decoration-2 hover:text-black hover:underline",
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
