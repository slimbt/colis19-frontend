import React, { useState, useEffect } from 'react';
import { Button } from './buttons/Button';
import { Link, NavLink } from 'react-router-dom';
import '../assets/css/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Avatar, fade, InputBase, makeStyles, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SignInModal from './modals/SignInModal';
import useModal from './hooks/useModal';
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    color: '#fff',
    margin: '15px 50px 0px 50px',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.45),
      transition: '0.4s'
    },
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: '100%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    width: '30%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    marginTop: '8px',
    marginBottom: '-10px',
    padding: theme.spacing(1, 3, 3, 3),
    //margin: theme.spacing(3, 3, 3, 3),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(2em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '80px',
      '&:focus': {
        width: '150px',
      },
    },
  },
}));


function Navbarr() {

  const classes = useStyles();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { isShowing, toggle } = useModal();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();

  const history = useHistory();

  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/");

    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };


  // const classes = useStyles();

  //     const [click, setClick] = useState(false);
  //     const [button, setButton] = useState(true);
  //     const [navbar, setNavbar] = useState(false);

  //     const handleClick = () => setClick(!click);
  //     const closeMobileMenu = () => setClick(false);

  //     const showButton = () => {
  //         if(window.innerWidth <= 960) {
  //             setButton(false);
  //         } else {
  //             setButton(true);
  //         }
  //     };

  //     useEffect(() => {
  //         showButton();
  //     }, []);

  //     window.addEventListener('resize', showButton);

  //     const changeBackground = () => {
  //         if(window.scrollY >= 50) {
  //             setNavbar(true);
  //         }
  //         else {
  //             setNavbar(false);
  //         }
  //     }

  //     window.addEventListener('scroll', changeBackground);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              {/* <i class="fas fa-box-open" />&nbsp;COLIS-19 */}
              <img src="../../images/logo/lg.png" alt='logo-colis-19' /> Couronne de Laurier
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-search'>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
              </li>
              <li className='nav-item'>
                <NavLink
                  exact
                  to='/'
                  activeClassName='nav-links--active'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Accueil
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/services'
                  activeClassName='nav-links--active'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/contact'
                  activeClassName='nav-links--active'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/about-us'
                  activeClassName='nav-links--active'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  A Propos
                </NavLink>
              </li>      
              {user ? (
                <>
                  <Avatar alt={user.result.name} src={user.result.imageUrl}>
                    {user.result.name.charAt(0)}
                  </Avatar>
                  <Typography variant="h6" className='user-name'>{user.result.name}</Typography>
                  {button ? (
                    <Link to='/' className='btn-link' onClick={logout}>
                      <Button buttonStyle='btn--outline'>Déconnexion</Button>
                    </Link>
                  ) : (
                    <Link to='/sign-up' className='btn-link'>
                      <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--mobile'
                        onClick={closeMobileMenu}
                      >
                        LOGOUT
                </Button>
                    </Link>
                  )}
                </>
              ) : (
                <div>
                  <li className='nav-btn'>
                    {button ? (
                      <Link to='/sign-up' className='btn-link'>
                        <Button buttonStyle='btn--outline'>S'inscrire</Button>
                      </Link>
                    ) : (
                      <Link to='/sign-up' className='btn-link'>
                        <Button
                          buttonStyle='btn--outline'
                          buttonSize='btn--mobile'
                          onClick={closeMobileMenu}
                        >
                          SIGN UP
                </Button>
                      </Link>
                    )}
                  </li>
                  <li className='nav-btn'>
                    <SignInModal
                      isShowing={isShowing}
                      hide={toggle}
                    />
                    {button ? (
                      <div className='btn-link'>
                        <Button buttonStyle='btn--primary'
                          onClick={toggle}>Se Connecter</Button>
                      </div>
                    ) : (
                      <div className='btn-link'>
                        <Button
                          buttonStyle='btn--primary'
                          buttonSize='btn--mobile'
                          onClick={closeMobileMenu}
                        >
                          SIGN IN
                        </Button>
                      </div>
                    )}
                  </li>
                </div>

              )}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbarr;
