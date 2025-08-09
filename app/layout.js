import "./globals.css";
import { Provider } from "@/app/provider";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { Toaster } from "@/components/ui/sonner";
import MobileBlocker from "@/components/MobileBlocker";

export const metadata = {
  title: "CodeForge – AI-Powered Web App Builder",
  description:
    "Effortlessly create stunning, AI-generated websites with Trinity Build. Experience the future of web design with intelligent automation and seamless customization.",
  icons: {
    icon: "/CodeForge_logo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body cz-shortcut-listen="true">
        <MobileBlocker />
        <ConvexClientProvider>
          <Provider>
            {children}
            <Toaster />
          </Provider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
