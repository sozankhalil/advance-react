
import './App.css';
import App15 from './Radio/App15';
import LiveOrders from './childrenDynamically/App13';
import { App2} from './context/App2';
import ControlledForm from './creating form/ControlledForm';
import Form from './creating form/Form';
import App10 from './custom hook/App10';
import App12 from './jsxComponentAndElement/App12';
import App1 from './lab-form/App1';
import Lab1 from './lab1/Lab1';
import App4 from './little-lemon-goal-app/App4';
import App17 from './render props/App17';
import Test from './useEffect/Test';
import App6 from './useEffectLab/UseEffect';
import App8 from './useReducer/App8';
import Excercise from './useState lab excercise/Excercise';

function App() {
  const desserts = [
    {
      title: 'Chocolate Cake',
      description: 'Chocolate cake is a cake flavored with melted chocolate',
      calories: 500,
    }
  ];
  
  const newDesserts = desserts.map((dessert) => {
    return {
      title: dessert.title.toUpperCase(),
      ...dessert,
      kCal: dessert.calories / 1000,
    };
  });
  console.log({newDesserts})
  return (
    <>
     {/* <Lab1/>
     <Form/>
     <ControlledForm/> */}
     {/* <App1/> */}
{/* <App4/>
  <Excercise/>
  <Test/> */}
  <App6/>
  <App8/>
  <App10/>
  <App12/>
  <LiveOrders/>
  <App15/>
  <App17/>
    </>
  );
}

export default App;
