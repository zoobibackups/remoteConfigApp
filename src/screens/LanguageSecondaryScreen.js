import { Box, NativeBaseProvider, Text } from 'native-base';
import React from 'react';
export default function LanguageSecondaryScreen() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>LanguageSecondaryScreen</Text>
      </Box>
    </NativeBaseProvider>
  );
}
