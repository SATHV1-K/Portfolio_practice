import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
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
  },grid:{
    display:"grid",
    gridTemplateColumns:"repeat(5,1fr)",
    borderTop:"1px solid black",
    borderRight:"1px solid black",
    boxSizing:"border-box",
    '& span': {
      padding:"8px 4px",
      borderLeft:"1px solid black",
      borderBottom:"1px solid black"
    }
  },
   heading:{
    backgroundColor:"#1A65A2FF",
    color:"white",
  },
  section_heading:{
    fontSize:"larger",
    fontWeight:"bold"
  },section:{
    margin:"15px",
    fontFamily:"Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    fontSize:"large"
  }
})

function Resume() {
  const classes=useStyles()
  return (
      <>
        <div className={classes.description}>
          <h1 className={classes.desc}>Resume</h1>
        </div>
        <section  className={classes.section}>
        <p className={classes.section_heading}>Educational Qualification</p>
        <div className={classes.grid}>
          <span className={classes.heading}>
            <strong>
            Qualification
            </strong></span>
            <span className={classes.heading}>
            <strong>Major</strong>
              </span>
              <span className={classes.heading}>
              <strong>School/College</strong>
              </span>
              <span className={classes.heading}> 
              <strong>Year of Passing</strong>
                </span>
                <span className={classes.heading}>
            <strong>CGPA</strong>
          </span >
              <span>Master of Science</span>
              <span>Computer Information Systems</span>
              <span>Florida Institue of Technology</span>
              <span>2024</span>
              <span>3.5</span>
              <span>Bachelor of Engineering</span>
              <span>Artificial Intelligence</span>
              <span>VJIT</span>
              <span>2023</span>
              <span>8.5</span>
              <span>Higher Secondary School</span>
              <span>---</span>
              <span>Geetanjali High School</span>
              <span>2016</span>
              <span>9.3</span>
        </div>
        </section>
      </>
  )
}

export default Resume