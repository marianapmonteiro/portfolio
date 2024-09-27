import { Roboto } from '@next/font/google';
import { Plus_Jakarta_Sans } from '@next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar"
import { Toaster } from "@/components/ui/toaster";


const roboto = Roboto({
  subsets: ['latin'],
  weight: ["400", "500", "700"], 
  variable: '--font-roboto',
});
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-plus-jakarta-sans',
});

export const metadata = {
  title: "Mariana.Dev",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} ${roboto.className}`}
      >
       <Navbar />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
