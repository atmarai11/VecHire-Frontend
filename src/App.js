import logo from './logo.svg';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import 'bootstrap-css-only/css/bootstrap.min.css'; 
// import 'mdbreact/dist/css/mdb.css';
import {WorkRoute} from './work_route/work_route';
import {BrowserRouter, Router} from 'react-router-dom';
import Header from './header/Header';
import 'font-awesome/css/font-awesome.min.css';
import { ToastProvider, useToasts } from 'react-toast-notifications';


import Footer from './footer/footer'

 
const App = () => {
 

  return (
   
    <ToastProvider
    placement='top-center'
    >

    <BrowserRouter>
      <Header/>
      <WorkRoute/>
      <Footer/>
    </BrowserRouter>
   
    </ToastProvider>
    
    
  );
}

export default App;
