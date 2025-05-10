import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState, type FC, type ReactNode } from "react";

interface QueryProviderProps {
    children: ReactNode;
}

export const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: 3,
                        staleTime: 1000 * 60 * 5,
                        // @ts-ignore
                        cacheTime: 1000 * 60 * 10,
                        refetchOnWindowFocus: true,
                        enabled: true,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
