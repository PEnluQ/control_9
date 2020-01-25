import React from 'react';
import {NavLink as Link} from "react-router-dom";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";

const Toolbar = () => {
    return (
        <header className='Main-toolbar'>
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={Link} to='/' exact>
                    Contacts
                </NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to='/new' exact >Add new contact</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Toolbar;