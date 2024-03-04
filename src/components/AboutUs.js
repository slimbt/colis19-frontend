import React from 'react'
import '../assets/css/AboutUs.css'

function AboutUs() {
    return (
        <>
            <div className='aboutus__hero-section'>
                <div className='aboutus-container'>
                    <div className='row aboutus__hero-row'>
                        <div className='about-us-col'>
                            <div className='aboutus__hero-text-wrapper'>
                                {/* <div className='top-line'></div> */}
                                <h1 className='about-us-heading'>
                                    A propos de Couronne de Laurier
                                </h1>
                                <p className='aboutus__hero-subtitle'>
                                    Couronne de Laurier vous offre que du beaux produits Fleurs coupées, Créations Florale,Plantes...
                                    Couronne de Laurier : Partenaire de votre réussite :)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
