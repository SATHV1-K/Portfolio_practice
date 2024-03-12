import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    modal:{
        position:"absolute",
        width:"50%",
        top:"50%",
        height:"300px",
        border:"1px solid black",
        left:"140px",
        backgroundColor:"white",
        borderRadius:"10px",
        textAlign:"center",
        display:"flex",
        flexDirection:"column",
        '& button':{
            color:"white",
            backgroundColor:"#1A65A2FF",
            alignItems:"center",
            justifyContent:"center",
            marginLeft:"170px",
            height:"16%",
            width:"20%",
            borderRadius:"5px",marginTop:"20px"
        },
    },
    '@media (max-width: 768px)': {
        modal:{
            position:"absolute",
            width:"80%",
            height:"300px",
            border:"1px solid black",
            left:"50px",
            backgroundColor:"white",
            borderRadius:"10px",
            textAlign:"center",
            display:"flex",
            flexDirection:"column",
            padding:"20px",
            '& button':{
                color:"white",
                backgroundColor:"#1A65A2FF",
                alignItems:"center",
                justifyContent:"center",
                marginLeft:"160px",
                height:"16%",
                width:"40%",
                borderRadius:"5px",marginTop:"20px",
                fontSize:"large"
            },
        }
    }
})

const Modal = (props) => {
    const classes=useStyles()
    console.log(props)
    const setStatus=()=>{
        props.status(false)
        props.changeFormdata()
    }
  return (
    <div className={classes.modal}>
        <h1>Hello,{props.formdata.name}</h1>
        <p style={{fontSize:"large"}}> Thank You for Contacting me, I will connect with you shortly</p>
        <p style={{fontSize:"large"}}> Contact feature is coming soon...</p>
        <button onClick={setStatus}>Close</button>
    </div>
  )
}

export default Modal