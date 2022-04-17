import { useState } from 'react'
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import WalletConnect from './WalletConnect';
import styled from 'styled-components';

const Navigation = ({className}) => {
    return(
        <div className={className}>
            <Navbar collapseOnSelect fixed='top' expand='sm'>
            <Navbar.Brand className="margin"  href='/'>CryptoWorld</Navbar.Brand>
                    <Navbar.Toggle className="margin" aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav  className="m-auto">
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/mint'>Mint</Nav.Link>
                            <Nav.Link href='/stake'>Stake</Nav.Link>
                        </Nav>
                    <Form className={'margin'}>
                        <WalletConnect/>
                    </Form>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

const NavigationBar = styled(Navigation)`

.nav-link{
    color: ${props => props.theme.primaryOrange}  !important;
    text-shadow: 2px 2px ${props => props.theme.primaryBlack};
}
.nav-link:hover {
    color: ${props => props.theme.primaryPurple}  !important;
    font-size: 1.2rem;
    padding: 0.5rem  0.5rem 0 0.5rem;
}
.navbar-brand{
    margin-right: 2rem;
}
.navbar-toggler{
    background-color: ${props => props.theme.primaryPurple};
    color: white;
}
.margin{
    margin-right:10px;
    margin-left:10px;

}
`;

export default NavigationBar;