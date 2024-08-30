
import "./globals.css";
import Theme from "@/components/Theme";
import DarkLight from "@/components/DarkLight";


export const metadata = {
  title: "Maricii",
  description: "Hello I'm Maricii , A Music Producer Who Produces EDM Music From India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <DarkLight/>
        {children}
        </Theme>
        </body>
    </html>
  );
}
