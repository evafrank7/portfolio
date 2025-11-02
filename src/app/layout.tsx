import type { Metadata } from "next";
import "@/app/globals.css";
import { Providers } from "providers";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: { template: "%s • Eva Frankovic", default: "Eva Frankovic" },
  description: "Web developer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <Toaster /> {/* sonner */}
        </Providers>
      </body>
    </html>
  );
}