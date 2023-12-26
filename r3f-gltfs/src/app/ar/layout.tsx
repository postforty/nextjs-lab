import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
}
