import { Inter } from "next/font/google";
import "./sublimation.css"
import Header from "../assessment/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jewellery assessment",
  description: "Assessment to check student knowledge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header/>
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
