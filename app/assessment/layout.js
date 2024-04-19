import { Inter } from "next/font/google";
import "./assessment.css";
// import "./ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Assessment",
  description: "Check your knowledge wit some simple questions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
