import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFoodieStore } from '../store/useFoodieStore';

export const unstable_settings = {
  anchor: '(tabs)',
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 mins
    },
  },
});

export default function RootLayout() {
  const isDarkMode = useFoodieStore((state) => state.isDarkMode);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="state/[id]"
            options={{ headerShown: false, presentation: 'card' }}
          />
          <Stack.Screen
            name="city/[id]"
            options={{ headerShown: false, presentation: 'card' }}
          />
          <Stack.Screen
            name="food/[id]"
            options={{ headerShown: false, presentation: 'card' }}
          />
          <Stack.Screen
            name="ai-guide"
            options={{ headerShown: false, presentation: 'modal' }}
          />
          <Stack.Screen
            name="festivals"
            options={{ headerShown: false, presentation: 'card' }}
          />
          <Stack.Screen
            name="offers"
            options={{ headerShown: false, presentation: 'card' }}
          />
          <Stack.Screen
            name="restaurant/[id]"
            options={{ headerShown: false, presentation: 'card' }}
          />
          <Stack.Screen
            name="admin"
            options={{ headerShown: false, presentation: 'card' }}
          />
        </Stack>
        <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
