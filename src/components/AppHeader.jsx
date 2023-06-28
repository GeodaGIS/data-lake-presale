// import { useMemo } from 'react';
import '../styles/app-header.css';
// import { NavLink, useLocation } from 'react-router-dom';
import geodaLogo from '../icons/geoda_logo.png';


export const AppHeader = () => {
    return (
        <div className="app-header-container">

            <img src={geodaLogo} width={60} height={55} title='גאודע' />

            <section className='contact-container'>
                <div>
                    <span className='make-contact'>{'צור קשר'}</span>
                    <span className="pi pi-phone"></span>
                    <strong className="pi pi-pause"></strong>
                </div>
                <div>
                    <span className="pi pi-search"></span>
                </div>
            </section>

        </div>
    )
}