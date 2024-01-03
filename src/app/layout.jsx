import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import NavBar from "@/components/NavBar/NavBar";
import { Montserrat } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer/Footer";
config.autoAddCss = false;

const generalFont = Montserrat({
   weight: ["400", "500", "600", "700"],
   styles: ["normal", "italic"],
   subsets: ["latin"],
});

const Playfair = Playfair_Display({
   weight: ["400", "500", "600", "700", "800", "900"],
   styles: ["normal", "italic"],
   subsets: ["latin"],
});

export const metadata = {
   title: "Mentalis",
   description: "PSICOLOGIA & HUMANIDADES",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${generalFont.className} ${Playfair.className}`}>
            <div>
               <NavBar />
            </div>
            <div className="children">{children}</div>
            <div>
               <Footer />
            </div>
         </body>
      </html>
   );
}
