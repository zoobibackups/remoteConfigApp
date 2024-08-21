import { Box, NativeBaseProvider, Text } from 'native-base';
import React from 'react';
export default function IntroductionScreen() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>IntroductionScreen</Text>
      </Box>
    </NativeBaseProvider>
  );
}
