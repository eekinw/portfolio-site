import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ee Kin Wong',
  description: 'Portfolio Site of Ee Kin Wong',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
