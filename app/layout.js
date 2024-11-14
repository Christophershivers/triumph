import localFont from "next/font/local";
import "./globals.css";
import GetUser from "./components/GetUser";
import '@mantine/core/styles.css';
import { Roboto } from 'next/font/google'
import { MantineProvider } from '@mantine/core';


const roboto = Roboto({weight: '400' , subsets: ['latin']})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        <MantineProvider>
          <GetUser/>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
