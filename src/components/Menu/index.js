import React from 'react';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

import Logo from '../../assets/img/Logo.png';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="WalterFlix logo" className="Logo"/>
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;