import { Box, NativeBaseProvider, Text } from 'native-base';
import React from 'react';
import AdView from '../components/AdView';
export default function PermissionScreen() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <AdView />
      </Box>
    </NativeBaseProvider>
  );
}
