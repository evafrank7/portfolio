import type { Metadata } from "next";
import "@/app/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Providers } from "providers";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: { template: "%s • Eva Frankovic", default: "Eva Frankovic" },
  description: "Web developer portfolio",
  icons: {
    icon: [
      { url: "/E.png", type: "image/png", sizes: "32x32" },
      { url: "/E.png", type: "image/png", sizes: "16x16" }
    ],
    apple: "/E.png",
  },
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