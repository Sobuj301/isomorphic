import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/shared/sideBar/SideBar";
import InputFeild from "@/components/shared/InputFeild";
import Header from "@/components/ui/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid md:grid-cols-6 gap-5 min-h-screen">

          <div className="border col-span-1  shadow-2xl overflow-auto">
            <Header />
            <SideBar />
          </div>
          <div className="col-span-5 p-10">
            <InputFeild />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
