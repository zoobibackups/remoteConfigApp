import { Box, NativeBaseProvider, Text } from 'native-base';
import React from 'react';
export default function PermissionScreen() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>PermissionScreen</Text>
      </Box>
    </NativeBaseProvider>
  );
}
