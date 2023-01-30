import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="primary" expand="lg" >
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mx-auto parent'>
                <NavLink className="d-inline p-2  text-dark justify-content-center" to="/">
                    Ana Sayfa
                </NavLink>
                <NavLink className="d-inline p-2  text-dark justify-content-center" to="/department">
                    Takımlar
                </NavLink>
                <NavLink className="d-inline p-2  text-dark justify-content-center" to="/employee">
                    Oyuncular
                </NavLink>
                <NavLink className="d-inline p-2  text-dark justify-content-center" to="/misyonumuz">
                    Misyonumuz
                </NavLink>
                <NavLink className="d-inline p-2  text-dark  justify-content-center" to="/iletisim">
                    İletişim
                </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}