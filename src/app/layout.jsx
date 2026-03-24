import '@/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Qaiser Farooq - AI Engineer Portfolio',
  description:
    'Qaiser Farooq is an AI Engineer and Researcher. Portfolio features AI projects, experience, education, and an AI chatbot assistant.',
  keywords: ['AI', 'Engineer', 'Portfolio', 'Machine Learning', 'Research'],
  openGraph: {
    title: 'Qaiser Farooq - AI Engineer Portfolio',
    description: 'Explore my AI engineering projects and experience',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
