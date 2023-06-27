import './PortafolioApp.css'
import { Info } from './components/Info/Info'
import { Navbar } from './components/Navbar/Navbar'
import { AppRouter } from './router/AppRouter'

export const PortafolioApp = () => {
    return (
        <>
            <Navbar/>
            <div className='main__container'>
                <Info/>
                <AppRouter/>
            </div>
        </>
    )
}
