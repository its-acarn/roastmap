import { Platform } from 'react-native';
import { Button, Flex, Heading, Pressable, ScrollView, VStack } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
  const router = useRouter()

  return (
    <ScrollView showsVerticalScrollIndicator={false} bg={'primary.500'}>
      <VStack flex={1} safeArea pt={8} px={4} bg={'primary.500'} space={4}>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        <Heading color={'secondary.500'} fontSize={'4xl'}>Hi, James</Heading>
        <Pressable><Flex bg={'primary.800'} h={350} rounded={'50'}></Flex></Pressable>
        <Pressable><Flex bg={'secondary.500'} h={350} rounded={'50'}></Flex></Pressable>
        <Button size={'lg'} onPress={() => router.push("/modal")} rounded={'full'}>View Account</Button>
      </VStack >
    </ScrollView>
  );
}
