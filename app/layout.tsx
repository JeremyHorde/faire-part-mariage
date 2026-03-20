import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

// Chargement des polices avec les bons graisses (weights)
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant' 
});

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['200', '300', '400'],
  variable: '--font-montserrat' 
});

export const metadata: Metadata = {
  title: 'Émilie & Jason - Invitation au mariage',
  description: 'Nous avons la joie de vous inviter à célébrer notre union.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased font-sans text-mariage-kaki">
        
        {/* L'ÉCRAN DU TÉLÉPHONE : Bloqué à 430px, centré, avec une ombre */}
        <main className="w-full max-w-[430px] min-h-screen bg-mariage-white shadow-2xl overflow-x-hidden relative">
          {children}
        </main>
        
      </body>
    </html>
  );
}