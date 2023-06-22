import './PortafolioApp.css'
import { Navbar } from './components/Navbar/Navbar'
import { AppRouter } from './router/AppRouter'

export const PortafolioApp = () => {
    return (
        <>
            <Navbar/>
            <h1>PortafolioApp</h1>
            <AppRouter/>
        </>
    )
}
