import { Footer } from "./components/footer";
import { Header } from "./components/header";
import {
  ErrorModalProvider,
  SuccessModalProvider,
} from "./contexts/feedbackContext";
import "./globals.css";
import "./components/components.css";
import { ErrorModal, SuccessModal } from "./components/FeedbackModal";
import {
  Inter,
  Poppins,
  Plus_Jakarta_Sans,
  Bodoni_Moda,
  Fraunces,
} from "next/font/google";
import { AppThemeProvider } from "./contexts/themeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${jakarta.variable} ${bodoni.variable} ${fraunces.variable}`}
      >
        <AppThemeProvider>
          <SuccessModalProvider>
            <ErrorModalProvider>
              <Header />
              {children}
              <SuccessModal />
              <ErrorModal />
              <Footer />
            </ErrorModalProvider>
          </SuccessModalProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}
