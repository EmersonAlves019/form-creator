export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen w-full items-center justify-center">
        {children}
      </body>
    </html>
  );
}
