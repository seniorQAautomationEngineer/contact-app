// install react-navigation

import HomeScreen from "./screens/HomeScreen";
import AddNewContact from "./screens/AddNewContact";
import ViewContact from "./screens/ViewContact";
import EditContact from "./screens/EditContact";

import * as firebase from "firebase";

import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Add: { screen: AddNewContact },
    View: { screen: ViewContact },
    Edit: { screen: EditContact },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#B83227",
      },
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const App = createAppContainer(MainNavigator);

//TODO: Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBq8EBadWm15LHiZ_quXVt0qzMt7mafLJI",
  authDomain: "contact-app-5de32.firebaseapp.com",
  projectId: "contact-app-5de32",
  storageBucket: "contact-app-5de32.appspot.com",
  messagingSenderId: "114084258400",
  appId: "1:114084258400:web:7abb7ac5c454d394421905",
  measurementId: "G-TY1PSQ56GC",
};

//FirebaseTODO create firebase real-time database with rules

// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }
export default App;
