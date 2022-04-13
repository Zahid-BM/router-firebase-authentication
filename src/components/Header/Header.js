import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import useFirebase from '../../hooks/useFirebase';


const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div>
            <Navbar bg="success" variant='dark' expand="lg">
                <Container>
                    <LinkContainer to='/home'>
                        <NavLink>
                            <Navbar.Brand className='fw-bold fs-3'>
                                React-Bootstrap
                            </Navbar.Brand>
                        </NavLink>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to='/home'>
                                <NavLink>Home</NavLink>
                            </LinkContainer>
                            <LinkContainer to='/products'>
                                <NavLink>Products</NavLink>
                            </LinkContainer>
                            <LinkContainer to='/orders'>
                                <NavLink>Orders</NavLink>
                            </LinkContainer>
                            <LinkContainer to='/register'>
                                <NavLink>Register</NavLink>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <NavLink>Login</NavLink>
                            </LinkContainer>

                        </Nav>

                        {
                            user?.displayName && <img style={{ height: '45px', width: '45px' }} className='rounded-circle me-3' src={user.photoURL} alt="" />
                        }
                        {
                            user?.uid && <Button onClick={handleSignOut} variant='secondary'>Log out</Button>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;