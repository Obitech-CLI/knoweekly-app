import { Footer } from "./components/footer";
import { Header } from "./components/header";
import {
  ErrorModalProvider,
  SuccessModalProvider,
} from "./contexts/feedbackContext";
import "./globals.css";
import "./components/components.css";
import { ErrorModal, SuccessModal } from "./components/FeedbackModal";
import { Inter, Poppins, Plus_Jakarta_Sans } from "next/font/google";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${jakarta.variable}`}
      >
        <SuccessModalProvider>
          <ErrorModalProvider>
            <Header />
            {children}
            <SuccessModal />
            <ErrorModal />
            <Footer />
          </ErrorModalProvider>
        </SuccessModalProvider>
      </body>
    </html>
  );
}
