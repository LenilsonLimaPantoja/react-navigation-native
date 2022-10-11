import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackRoutes from './src/routes/AuthStack.routes';
import { StatusBar } from 'react-native';
export default function App() {
  return (
    <NavigationContainer>
        <AuthStackRoutes/>
        <StatusBar />
    </NavigationContainer>
  );
}