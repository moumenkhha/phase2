
import "./globals.css";


export const metadata = {
  title: "Project Phase 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-10">{children}</body>
    </html>
  );
}
