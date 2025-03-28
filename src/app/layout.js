import React from "react";
import LandingPageNavbar from "@/components/navbar/landing-page";
import "./globals.css";
import Footer from "@/components/sections/footer";

export const metadata = {
  title: "GDGC ABESIT - Google Developers Group in College",
  description:
    "GDSC ABESIT is inspired by Google's Developer Family. Our goal is to build an ecosystem of developers in and around the campus, and have fun while we're all at it!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LandingPageNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
