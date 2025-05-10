import "./globals.css";
import ClientLayout from "./layout";
import { metadata } from "./metadata";

// const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
} 