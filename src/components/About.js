import React from 'react'
import Header from './Header'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    padding: 20,
    backgroundColor: " #002855",
    fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    color: 'white'
  },
  section: {
    boxSizing: "border-box",
    padding:"2rem",
    minHeight:"440px"
  },
  description: {
    backgroundColor: "#1A65A2FF",
    marginTop: "-22px",
    padding: "0px", 
    color: "white",
     paddingLeft: "30px",
    paddingBottom: "20px",
  },
  desc:{
    borderBottom:"2px solid white",
  },
  content:{
    fontSize: "large",
    fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
  }
})

function About() {
  const classes = useStyles()
  return (
    <>
     <div className={classes.description}>
        <h1 className={classes.desc}>About Me</h1>
      </div>
    <section className={classes.section}>
     <p className={classes.content}>
     The ubiquitous influence and presence of technology in our daily lives makes it one of
  the most fascinating subjects I have studied. What I find engaging is its multifaceted and
  versatile nature; the constant evolution and advancement in technology can be adopted
  at multiple levels across various sectors. I remember being inseparable from my gaming
  console for years growing up; computer games not only got more enjoyable over the
  years but also had more advanced and sophisticated graphics and mechanisms. At high
  school, when I first built my own custom computer system, I could see how it was a
  great first step into the world of computers.
  To further my penchant for the world of computers, I enrolled in the bachelor's program
  in artificial intelligence at the Vidya Jyothi Institute of Technology. The undergraduate
  curriculum exposed me to courses like Computer Architecture, Operating Systems,
  Artificial Intelligence and Machine Learning.
     </p>
    </section>
    </>
  )
}

export default About