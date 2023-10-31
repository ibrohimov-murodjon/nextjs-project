import Navbar from "./components/Navbar";

import "./globals.css";

export const metadata = {
  title: "Home Page",
  description: "Mohlaroyim's Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
