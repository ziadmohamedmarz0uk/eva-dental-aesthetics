import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مركز إيڤا | طب وتجميل وجراحة الأسنان والجلدية والليزر — الشيخ زايد والتجمع الخامس",
  description: "عيادات متخصصة في طب وجراحة الأسنان والعلاجات الجلدية التجميلية بأحدث المعايير الطبية الأوروبية في أركان بلازا (الشيخ زايد) والتسعين الشمالي (التجمع الخامس).",
  keywords: [
    "مركز إيڤا",
    "Eva Dental & Aesthetics",
    "عيادة أسنان الشيخ زايد",
    "جلدية وليزر التجمع الخامس",
    "أركان بلازا",
    "تجميل الأسنان مصر",
    "زراعة أسنان فورية",
    "فينير أسنان طبيعي",
    "كانديلا برو بلس",
  ],
  authors: [{ name: "Eva Dental & Aesthetics" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2F5D50",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans min-h-screen bg-[#FAF9F6] text-stone-900 antialiased selection:bg-sage-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
