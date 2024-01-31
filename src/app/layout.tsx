// Styles
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="mx-auto container px-5">{children}</div>
      </body>
    </html>
  );
}
