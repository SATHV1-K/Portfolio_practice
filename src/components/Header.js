import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { useState,useEffect } from 'react';

const useStyles = createUseStyles({
    
    wrapper: {
        padding: 20,
        backgroundColor: " #1A65A2FF",
        fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        color: 'white'
    },
    li_style:{
        color:'white',display:"inline-block",
        paddingRight:"0.5em"
    },
    ul_style:{
        color:"white",
        padding:"0.25em",
        textDecoration:"none",
        marginRight:"0.5rem",
    },
    header:{
        color:"transparent",
        backgroundClip:"text",
        background: "linear-gradient(to right, #FFA62E, #EA4D2C)",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },active:{
        color:"F6872EFF",
        padding:"0.25em",
        color:"white",
        textDecoration:"none",
        border:"1px solid #F6872EFF",
    },
    navlink:{
        color:"white",
        padding:"0.25em",
        textDecoration:"none",
        marginRight:"0.5rem",
        '&.active':{
            border:"1px solid white"
        }
    },
    unactive_navlist:{
    },
    '@media (max-width: 768px)': {
        li_style:{
            color:'white',display:"block",
            padding:"8px",
            width:"100%",
            marginRight:"7px",
            textDecoration:"none",
            marginBottom:"10px"
        }
        ,
        navlink:{
            display:"block",
             width:"80%",
             border:"1px solid white",
             '&.active':{
                border:"1px solid white",
                display:"block",
                width:"80%",
                background: "linear-gradient(to right, #FFA62E, #EA4D2C)",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
            },
            unactive_navlist:{
                display:"block",
                 width:"80%",
                 border:"10px solid white",
                 color:"white"
        }
        }
    }
})

function Header() {
    const[activeclass,setActiveclass]=useState("About")
    const classes = useStyles()
    let links = [{ href: '/about', text: "About" }, { href: '/skills', text: "Skills" }, { href: '/project', text: "Project" }, { href: '/resume', text: "Resume" }, { href: '/contact', text: "Contact" }]
    return (
        <header className={classes.wrapper}>
            <nav>
                <h1 className={classes.header}>Sathvik's Portfolio</h1>
                <ul >                 
                    {
                        links.map((link) =>                   
                                <li className={classes.li_style}>
                                    <NavLink className={classes.navlink}to={link.href} onClick={()=>setActiveclass(link.text)} > {link.text}
                                    </NavLink>
                                </li>                        
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header