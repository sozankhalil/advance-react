
import './App.css';
import { App2} from './context/App2';
import ControlledForm from './creating form/ControlledForm';
import Form from './creating form/Form';
import App1 from './lab-form/App1';
import Lab1 from './lab1/Lab1';
import App4 from './little-lemon-goal-app/App4';

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
<App4/>
  
    </>
  );
}

export default App;
