import Home from '../screen/Home';
import Detail from '../screen/Detail';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export function Navigation(){

    return(
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options= {{headerShown: false}} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}