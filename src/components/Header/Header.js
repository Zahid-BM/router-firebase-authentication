import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LinkContainer } from 'react-router-bootstrap';
import firebaseApp from '../../firebase.init';

const auth = getAuth(firebaseApp);

const Header = () => {
    const [user] = useAuthState(auth);
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
                            {
                                user && <LinkContainer to='/history'>
                                    <NavLink>History</NavLink>
                                </LinkContainer>
                            }
                            <LinkContainer to='/register'>
                                <NavLink>Register</NavLink>
                            </LinkContainer>
                            {
                                !user?.displayName && <LinkContainer to='/login'>
                                    <NavLink>Login</NavLink>
                                </LinkContainer>
                            }

                        </Nav>
                        {
                            user?.displayName && <Navbar.Text className='me-2 text-dark'>{user?.displayName}</Navbar.Text>
                        }

                        {
                            user?.displayName && <img style={{ height: '45px', width: '45px' }} className='rounded-circle me-3' src={user.photoURL} alt="" />
                        }
                        {
                            user?.uid && <Button className='text-info' onClick={() => signOut(auth)} variant='success'>Log out</Button>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;