import { createStackNavigator, createAppContainer } from 'react-navigation';

const mainNavigator = createStackNavigator({
  App: { screen: App },
  Coords: { screen: CoordsScreen }
});

const Navigator = createAppContainer(mainNavigator);

export default Navigator;