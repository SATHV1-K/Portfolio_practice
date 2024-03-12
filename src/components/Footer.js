import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        padding: "20",
        backgroundColor: " #1A65A2FF",
        fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        color: "white",
        width: "100%",
        display: "flex",
        flex: "column",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center"
    }, linkTag: {
        textDecoration: "none",
        color: "white",
        padding: "0.5em",
    }, li_style: {
        color: 'white', display: "inline-block",
        paddingRight: "0.5em",
    }, ul_style: {
        alignItems: "center",
    },
    social_media:{
    },
    social_media_li_style: {
        color: 'white', 
        display: "inline-block",
        paddingRight: "0.5em",
    },
    copyright:{
    },
    '@media (max-width: 768px)': {
        li_style:{
            display:"block",
            alignItems:"start",
            textAlign:"start",
            '&:before':{
                content:'">"'
            }
        },
        social_media:{
            marginLeft:"50px",
           paddingLeft:"0px",
           borderTop:"2px solid white",
           display:"block",
           width:"100%"
       },
        social_media_li_style :{
            display:"block",
            marginLeft:"-50px"
        },
        wrapper:{
            alignItems:"start",
            justifyContent:"end",
        },copyright:{
            textAlign:"center",
            width:"100%",
        }
      }
})

function Footer() {
    let links = [{ href: '/about', text: "About" }, { href: '/skills', text: "Skills" }, { href: '/project', text: "Project" }, { href: '/resume', text: "Resume" }, { href: '/contact', text: "Contact" }]
    let socialMedia_links=[{href:"",text:"LinkedIn"},{href:"",text:"GitHub"},{href:"",text:"Google Scholar"}]
    const classes = useStyles();
    return (
        <footer className={classes.wrapper}>
            <nav>
                <ul className={classes.ul_style}>
                    {
                        links.map((link) => {
                            return (
                                <li className={classes.li_style} key={link.href}>
                                    <NavLink className={classes.linkTag} to={link.href}  >{link.text}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <nav className={classes.social_media}>
                <ul>
                {
                    socialMedia_links.map((link)=>(
                        <li className={classes.social_media_li_style }>
                            <a  className={classes.linkTag} href={link.href}>{link.text}</a>
                        </li>
                    ))
                }
                </ul>
            </nav>
            <nav  className={classes.copyright}>
                <p >&copy; {new Date().getFullYear()}-Sathvik</p>
            </nav>
        </footer>
    )
}

export default Footer