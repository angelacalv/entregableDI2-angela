import "./globals.css";

export const metadata = {
  title: "Viajeros Aventureros",
  description: "Descubre el mundo con nosotros",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}


