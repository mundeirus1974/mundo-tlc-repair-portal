import "../styles/globals.css";

export const metadata = {
  title: "Mundo TLC | Realtor Repair Portal",
  description: "Submit property repair tasks for Mundo TLC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
