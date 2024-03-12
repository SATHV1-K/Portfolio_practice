import React from 'react'
import Header from './Header'
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
  },
  parag:{
    padding: "100px",
    textAlign: "justify",
  },
})

function Project() {
  const classes=useStyles()
  return (
    < >
       <div className={classes.description}>
        <h1 className={classes.desc}>My Projects</h1>
      </div>
      <section >
      <p className={classes.parag}> While at college, in the first semester I
    worked on a project, which was an 'Aeroplane Reservation System' based on C
    language. In my 3rd semester, I created the video game ‘Brick Breaker’ using C# and
    Unity 3D. As the curriculum became more advanced in later semesters, so did my work
    on projects. My 6th semester project was an IOT prototype. I worked with a team of four
    to demonstrate a live application of an automatic sanitizer dispenser that could open
    doors automatically by sensing a person's temperature. This idea was chosen to make
    a contribution for safety during the COVID pandemic. In my 7th semester I developed a
    machine learning project titled ‘MonkeyPox Classification’. Here, I trained the model
    using thousands of photographs of humans afflicted with the monkeypox virus, and by
    selecting a fresh image, the model was able to determine whether or not the subject is
    affected with the virus.
    With the intention of gaining first-hand experience, I decided to intern with Exposys Data
    Labs in Hyderabad as an IOT Developer. My role was to create two IOT models: one
    that converts LED light signals into morse code, and the other that transforms morse
    code into LED light signals. For my first model, I used an Arduino Uno R3 and
    connected LEDs, LCD, and other components. I then built a C++ code to have the LEDs
    send signals to the LCD screen when they flashed and when they were idle. For my
    second model, using the same Arduino board I included push buttons and created a
    new C++ code that would cause the LED light to flash and transmit the morse signal
    when the buttons are pressed in the morse order. Once the project was finished, I gave
    a video presentation for the organization's project reviewers where I explained in detail
    the project, its code, devices, and components
  </p>
      </section>
    </>
  )
}

export default Project