import './globals.css';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vim for React Developers',
  description: 'A bite-sized course to get you quickly productive with Vim.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen w-full bg-[#1a1b26] ${firaCode.className} text-sm pb-8`}
      >
        {children}
      </body>
    </html>
  );
}
