import '@/app/dashboard/ui/global.css';
import { inter } from '@/app/dashboard/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`$(inter.className} antialiassed`}>{children}</body>
    </html>
  );
}
