export const InfoItems = () => {
    return (
        <>
            <div className='info__item animate__animated animate__fadeIn'>
                <div className='info__icon'>
                    <i className="fa-solid fa-envelope icon"></i>
                </div>
                <div className='info__item__text'>
                    <h3>Email</h3>
                    <p>facundovs84@hotmail.com.ar</p>
                </div>        
            </div>
            <div className='info__item animate__animated animate__fadeIn'>
                <div className='info__icon'>
                    <i className="fa-solid fa-mobile-screen icon"></i>
                </div>
                <div className='info__item__text'>
                    <h3>Celular</h3>
                    <p>+54 3487 233583</p>
                </div>      
            </div>
            <div className='info__item animate__animated animate__fadeIn'>
                <div className='info__icon'>
                    <i className="fa-solid fa-location-dot icon"></i>
                </div>
                <div className='info__item__text'>
                    <h3>Ubicacion</h3>
                    <p>Argentina, Buenos Aires.</p>
                </div> 
            </div>
        </>
    )
}
