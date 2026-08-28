"use client";

import type { ReactNode } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function CheckoutLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  function trackCheckout() {
    window.fbq?.("track", "InitiateCheckout");
  }

  return (
    <a href={href} className={className} onClick={trackCheckout}>
      {children}
    </a>
  );
}
