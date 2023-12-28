"use client";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
  model: ReactNode;
};

export default function Layout({ children, model }: Props) {
  const pathname = usePathname();

  return (
    <>
      <main>
        {children}
        {model}
      </main>
    </>
  );
}
