// import MyCard from "./component/MyCard";

// // import "./App.css";
// function App() {
//   return (
//     <>
//     <MyCard/>
//     </>
//   );
// }

//export default App;

import {Route,Routes} from 'react-router-dom'
import MyCounter from './component/MyCounter'
import HomePage from './component/HomePage'
import MyCard from './component/MyCard'
import Languages from './component/Languages'
import Navbar from './component/Navbar'
import ErrorPage from './component/ErrorPage'
import About from './component/About'
import Student from './component/Student'
import Product from './component/Product'
import Product1 from './component/Product1'
import Product2 from './component/Product2'
import Product3 from './component/Product3'
function App(){
  return(
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/MyCard" element={<MyCard />}/>
    <Route path="/MyCounter" element={<MyCounter />}/>
    <Route path="/Languages" element={<Languages />}/>
    <Route path="/About" element={<About />}/>
    <Route path="/Student" element={<Student />}>
      <Route path="/Student/:name" element={<Student />}/>
    </Route>
    <Route path="/Product" element={<Product />}>
        <Route path="Product1" element={<Product1 />}/>
        <Route path="Product2" element={<Product2 />}/>
        <Route path="Product3" element={<Product3 />}/>
    </Route>
    <Route path="*" element={<ErrorPage/>}/>
    </Routes>
</>
  );
};

export default App;
