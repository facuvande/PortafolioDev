import './ContentLayout.css'

export const ContentLayout = ({children}) => {
    return (
        <main className="content__container animate__animated animate__backInRight">
            { children }
        </main>
    )
}
