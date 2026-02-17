// routes.jsx 
import {Routes,Route} from 'react-router-dom';
import Login from '../pages/login';
import SignUp from '../pages/signup';
import AddCustomer from '../pages/addCustomer';
import SearchCustomer from '../pages/searchCustomer';
function MyRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/addCustomer' element={<AddCustomer/>}/>
            <Route path='/searchCustomer' element={<SearchCustomer/>}/>
        </Routes>
    )
}
export default MyRoutes