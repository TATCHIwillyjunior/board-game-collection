"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
  sectionPrefix,
}: {
  href: string;
  children: ReactNode;
  sectionPrefix?: string;
}) {
  const pathname = usePathname();
  const isPage = pathname === href;
  const isInSection =
    pathname.startsWith(`${href}/`) ||
    (sectionPrefix !== undefined &&
      (pathname === sectionPrefix ||
        pathname.startsWith(`${sectionPrefix}/`)));

  return (
    <Link
      href={href}
      aria-current={isPage ? "page" : isInSection ? "true" : undefined}
      className="text-sm text-zinc-700 hover:text-emerald-800 hover:underline aria-[current=page]:font-bold aria-[current=true]:font-semibold aria-[current=page]:text-emerald-800 aria-[current=true]:text-emerald-800"
    >
      {children}
    </Link>
  );
}
