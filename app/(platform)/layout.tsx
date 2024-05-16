import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";

import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";

interface PlatformLayoutProps {
  children: React.ReactNode;
  pageProps: any; // Типизируйте pageProps соответствующим образом
}

const PlatformLayout = ({ children, pageProps }: PlatformLayoutProps) => {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
        {/* Вставляем Component и передаем ему pageProps */}
        {/* Не забудьте проверить наличие Component, если он задан как prop */}
        {pageProps && pageProps.Component && <pageProps.Component {...pageProps} />}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
