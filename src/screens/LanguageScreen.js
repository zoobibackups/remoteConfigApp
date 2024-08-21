import { Box, NativeBaseProvider, Text } from 'native-base';
import React from 'react';
import { AdView } from '../components/AdView';
export default function LanguageScreen() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>LanguageScreen</Text>
      </Box>
      <AdView />
    </NativeBaseProvider>
  );
}
