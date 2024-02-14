import { Route, Routes } from 'react-router-dom'
import Home from '../../components/Home/Home'
import Details from '../../components/Details/Details'


function Main () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Details/:city' element={<Details/>} />
            </Routes>
        </div>
    )
}
export default Main