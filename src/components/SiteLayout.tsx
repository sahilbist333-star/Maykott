/**
 * @fileoverview Shared site layout wrapper used across all pages.
 * Wraps content with Navigation and Footer components.
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <Navigation />
      <main className="pt-20" id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
