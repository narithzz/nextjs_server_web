import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Next.js Landing Page',
  description: 'A modern landing page built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <div className="flex flex-col min-h-screen">
          <Header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md" />
          <main className="flex-grow pt-20">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}