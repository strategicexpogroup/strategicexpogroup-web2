"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

type LayoutShellProps = {
  children: ReactNode;
  /** Clave Web3Forms inyectada desde el servidor (WEB3FORMS_ACCESS_KEY o NEXT_PUBLIC_*). */
  web3AccessKey?: string;
};

export function LayoutShell({ children, web3AccessKey }: LayoutShellProps) {
  const pathname = usePathname();
  const isLockPage = pathname === "/en-proceso";

  if (isLockPage) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer web3AccessKey={web3AccessKey} />
    </>
  );
}
