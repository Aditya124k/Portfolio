import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guddu Yadav | Interactive 3D Portfolio & Academic Resume",
  description: "Explore the professional journey of Guddu Yadav, Assistant Professor and Academic Counselor. A premium 3D portfolio illustrating a decade of commitment to higher education, pedagogy, and English literature.",
  keywords: ["Guddu Yadav", "Assistant Professor", "Academic Counselor", "IGNOU", "Gyanveer University", "MCBU Chhatarpur", "Patna", "Bihar", "English Literature", "Pedagogy", "Education", "UGC NET"],
  authors: [{ name: "Guddu Yadav" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-black text-slate-100 font-sans selection:bg-accent-cyan selection:text-black">
        {children}
      </body>
    </html>
  );
}
