import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
/* import Courses from './Courses/Courses';
 */import SignUp from './components/SignUp';
import Contact from './components/Contact';
/* import Banner from './components/Banner'
import Freebook from './components/Freebook' */
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Course from './components/Course';

const App = () => {
    return (
        <Router>
            <div className='dark:bg-slate-900 dark:text-white'>
            <Navbar></Navbar> 
            <Routes>
            <Route path='/' exact element={<Home></Home>}></Route>
            <Route path='/course' exact element={<Course></Course>}></Route>
            <Route path='/signup' exact element={<SignUp></SignUp>}></Route>
            <Route path='/contact'exact  element={<Contact></Contact>}></Route>
   </Routes>
   <Footer></Footer>
            </div>
        </Router>
    )
}
/* const App = () => {
    return (

        
        <>
        
        <div className='dark:bg-slate-900 dark:text-white'>


        { <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/course' element={<Courses></Courses>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes> }
        </div>
       
       
        
        
        </>
    );
}; */

export default App;