import React, { Component } from 'react'

import ServiceCard from '../cards/ServiceCard'

import Delivery from '../../Delivery.jpg'
import Suivi from '../../Suivi.jpg'
import importation from '../../importation.jpg'
import points from '../../points.jpg'
import livreurr from '../../livreurr.jpg'
 import CardItem from '../cards/CardItem'
import '../../assets/css/Services.css'


 class Services extends Component {
    render() {
        return (
             
            <div className='services__hero-text-wrapper'>
                                {/* <div className='top-line'></div> */}
                                <h1 className='services-heading'>
                                    Nos Services
                                </h1>
                               
                            
            <div className="services-container">
                <ServiceCard number="1" image={Delivery} title="Livraison à domicile" paragraph="Avec un simple clic Colis-19 vous aide à transporter votre colis à n'importe quel région en tunisie avec une flexibilité garantie et une sécurité optimale."/>
                <ServiceCard number="2" image={Suivi} title="Suivi des colis" paragraph="Vous disposez d’un espace client personnalisé, protégé par un mot de passe et un identifiant unique, sans aucun logiciel à installer et accessible depuis notre site Colis-19 qui permet de suivre votre colis en temps réel avec une map et des notifications."/>
                <ServiceCard number="3" image={importation} title="Restez chez vous" paragraph="Si vous voulez envoyer un colis ne t'inquiète pas, un livreur de Colis-19 porte la responsabilité pour récupérer votre colis de chez vous et le transporter jusqu'a votre destination souhaitée." />
                <ServiceCard number="4" image={points} title="Collecter et gagner" paragraph="À chaque fois vous envoyer un colis via notre site vous gagner 10 points de fidélités et avec 50 points vous pouvez envoyer gratuitement un colis et avec 100 points vous entrez dans un tirage au sort pour gagner un téléphone."/>
                <ServiceCard number="5" image={livreurr} title="Rejoignez nous" paragraph="Colis-19 vous offre l'oportunité pour devenir un nombre de notre equipe , il faut juste bien remplir le formulaire situé dans la page d'accueil et bonne chance" /> 
                </div>
                <div className='service__hero-text-wrapper'>
                                {/* <div className='top-line'></div> */}
                                <h1 className='service-heading'>
                                    Nos Critères 
                                </h1>
                                <div className="services-container">
                                                    
    {/* <Divider style={{height: '2px', backgroundColor: '#82171f'}} /> */}
      {/* <OfferSlider /> */}
      <CardItem
                    src='images/rapide.jpg'
                    text='LA RAPIDITÉ DU TRANSFERT'
                    // label='Offres'
                    path='/services'
                />
    
    <CardItem
                    src='images/sec.jpg'
                    text='LA SÉCURITÉ DE VOS COLIS'
                    // label='Offres'
                    path='/services'
                />
                <CardItem
                    src='images/res.jpg'
                    text='LE RESPECT DE VOS DÉLAIS'
                    // label='Offres'
                    path='/services'
                />
                <CardItem
                    src='images/conf.jpg'
                    text='LA CONFIANCE 
                     :LES COLIS SONT SOUS NOTRE RESPONSABILITÉ'   
                   
                    // label='Recrutement'
                    path='/services'
                />
                <CardItem
                    src='images/prof.jpg'
                    text='LE PROFESSIONNALISME DE NOS LIVREURS '
                    // label='Discover'
                    path='/services'
                />     
            </div> 
            </div>
            </div>
            
            
        );
         
    }
}

export default Services
