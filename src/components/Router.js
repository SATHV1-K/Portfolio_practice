import React from 'react'
import{Link} from 'react-router-dom';
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './About';

import Skills from './Skills';
import Project from './Project';
import Resume from './Resume';
import Contact from './Contact';

function Router() {
  return (
    <div>
          <Routes>
          <Route path="/" activeClassName="active" element={<About/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
  )
}

export default Router