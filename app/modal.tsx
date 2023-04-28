import { useRouter, useSearchParams } from 'expo-router';
import { Box, CloseIcon, Flex, Heading, IconButton } from 'native-base';
import Colors from '../constants/Colors';

export default function ModalScreen() {
  const router = useRouter()
  const params = useSearchParams()
  return (
    <Flex flex={1} bg={Colors.primary[500]} justify='space-between' safeAreaBottom>
      <Heading color={Colors.tertiary[500]}>{params.name}</Heading>
      <Box mr={4} mb={4} alignSelf={'flex-end'}>
        <IconButton w={'60px'} h={'60px'} rounded={'full'} bg={Colors.primary[100]} onPress={() => router.back()} icon={<CloseIcon size={'lg'} />} />
      </Box>
    </Flex>
  );
}
