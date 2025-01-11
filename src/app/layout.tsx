import { ReactNode } from 'react';
import { ClientProvider } from '../../components/ClientProvider/ClientProvider';


export const metadata = {
  title: "Productivity Tracker",
  description: "A Promodoro timer and focus time tracker for effective time management",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
