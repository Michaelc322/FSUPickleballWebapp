import styled from 'styled-components';
import { useState } from 'react';
import '../styles/styles.css';


const Nav = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f0f0f0;
    height: 80px;
    width: 100%;
    overflow: hidden;
    z-index: 100;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);


    @media screen and (max-width: 768px){
        nav{
            display: none;
        }
    }

    
`

const NavLink = styled.a`
    text-align: center;
    font-family: Reddit Sans;
    font-weight: 700;
    text-decoration: none;
    padding-left: 5px;
    padding-right: 5px;
    margin-right:40px;
    font-size: 18px;
    position: relative;;
    cursor: pointer;
    
    background-image: linear-gradient(90deg, white, white);
    background-clip: text;
    -webkit-text-fill-color: #2C2A29;
    &:hover:after{
        width: 100%;
        transition: 0.3s;
    }


    &:after{
        content:"";
        position: absolute;
        background-image: linear-gradient(90deg, #782F40, #CEB888);
        height: 3px;
        width: 0;
        left: 0;
        bottom: -7px;
        transition: 0.3s;
    
    }

    i{
        margin-right: 10px;
        margin-left: 5px;

    
    }


`


const LogoImage = styled.img`
    height: 80px;
    width: 80px;

`

const LogoNav = styled.a`
    display: flex;
    text-align: center;
    height: 100%;
    margin-left:20px;
    top: 0px;
    position: relative;
    text-decoration: none;
    color: #2C2A29;
`

const LogoTitle = styled.h1`
    font-size: 25px;
    padding-left: 10px;
    font-family: Poppins;
    font-weight: 300;
    position: relative;
    top: -10px;
`

const MenuDiv = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;
    height: 50px;
    background-color: #1a1a1a;
    width: 150px;
    position: fixed;
    right: 40px;
    z-index: 2;
    flex-direction: column;

    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

    top: 80px;
    transition: transform 0.3s ease;

    
`


const Hamburger = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        right: 30px;
        position: relative;
        cursor: pointer;
        i{
            font-size: 26px;
        }
    }
`

const MobileMenuDiv = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        position: fixed;
        z-index: 13;
        background-color: #121212;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        top: 80px;
        padding-top: 20px;
        padding-bottom: 20px;
        align-items: center;
        left:100%;
        transition: all 0.5s ease;

        &.menuActive{
            left: 0%;
            transition: all 0.5s ease;
        }
    }

`

const MenuLink = styled.a`
    width: 100%;
    padding: 10px;
    text-align: center;
    font-family: Poppins;
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    color: white;



    i{
        margin-right: 10px;
        margin-left: 5px;

    
    }

`

const DonateBtn = styled.a`
    color: #782F40;
    text-align: center;
    font-family: Reddit Sans;
    font-weight: 700;
    letter-spacing: 1px;
    text-decoration: none;
    padding-left: 5px;
    padding-right: 5px;
    margin-right:40px;
    font-size: 18px;
    position: relative;
    cursor: pointer;
  background-color: #CEB888;
  padding: 6px 16px;
  border-radius: 10px;
  border: solid 1px transparent;

  &:hover{
    background-color: transparent;
    color: #782F40;
    padding: 6px 16px;
    border-radius: 10px;
    border: solid 1px;
    transition: all 0.3s ease;
  }
`

function Navbar(){
    const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);


    const openHamburger = () => {
        setOpenHamburgerMenu(!openHamburgerMenu);
    }


  return (
    <>
        <Nav>
            <LogoNav href ="/">
                <LogoImage src=".\src\assets\fsupblogo.png"/>
                {/* <LogoTitle>FSU Pickleball</LogoTitle> */}
            </LogoNav>

        
            <nav>
                <NavLink target="_blank" href="https://thetundra.com/conventionsnews/florida-state?fbclid=PAZXh0bgNhZW0CMTEAAaaH_wUuI0WpFbDOtYdURA1rUIA5TRURuJaZ5ZwcPTQimc9m60WoZUY_GRo_aem_AaJqWDpAstYVS08ftPk2VFsRob6cGeA7xd-7jBzhwOp-O2ZRiPzLG9kZemwdc6-YCxwb9-f4g7Lr7tqSX0cVxIDB">Read About Us!</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contact">Contact Us</NavLink>
                <DonateBtn href="/donate">Support Us</DonateBtn>


            </nav>

            <Hamburger><i onClick={openHamburger} className={openHamburgerMenu ? "fa-solid fa-x":"fa-solid fa-bars"}></i></Hamburger>

              

        </Nav>


        <MobileMenuDiv className={openHamburgerMenu ? "menuActive" : ""}>
            <MenuLink href="/">Home<i className="fa-solid fa-house"></i></MenuLink>
            <MenuLink href="/getstarted">Documentation<i className="fa-solid fa-folder-open"></i></MenuLink>
            <MenuLink href="/reserve-courts">Reserve<i className="fa-solid fa-calendar-days"></i></MenuLink>

        </MobileMenuDiv>   
        
        
        
    </>
  )
}

export default Navbar