import {Routes, Route, Navigate} from 'react-router-dom'
import { Sobremi } from '../components/Sobremi/Sobremi'
import { Portafolio } from '../components/Portafolio/Portafolio'
import { Contacto } from '../components/Contacto/Contacto'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={<Navigate to='/sobremi'/>}/>
            <Route path='/sobremi' element={<Sobremi/>}/>
            <Route path='/portafolio' element={<Portafolio/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
    )
}
