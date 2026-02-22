// routes.jsx 
import {Routes,Route} from 'react-router-dom';
import Landing from '../pages/landingPage';
import Login from '../pages/login';
import SignUp from '../pages/signup';
import Dashboard from '../pages/dashboard';
import AddCustomer from '../pages/addCustomer';
import SearchCustomer from '../pages/searchCustomer';
function MyRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/addCustomer' element={<AddCustomer/>}/>
            <Route path='/searchCustomer' element={<SearchCustomer/>}/>
        </Routes>
    )
}
export default MyRoutes