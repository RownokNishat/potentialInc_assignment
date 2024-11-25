import localFont from "next/font/local";
import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"], // You can specify other subsets if needed
  weight: ["400", "700"], // Specify the weights you want to use
  variable: "--font-mon",
});

export const metadata = {
  title: "Nishat",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
