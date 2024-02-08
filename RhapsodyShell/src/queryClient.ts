import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Данные считаются устаревшими после 5 минут
      retry: false, // Отключить автоматическую повторную попытку при ошибке запроса
    },
  },
});
