import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

import Logo from '../../assets/img/Logo.png';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} alt="WalterFlix logo" className="Logo"/>
            </Link>
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;