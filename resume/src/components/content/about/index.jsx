
import React from 'react'
import SectionHeader from '../section-header'
import Skills from './skills'
import Intro from './intro'


const About = () => {
  return (
    <section id="about" className="about">

			<div className="section-header">
				<SectionHeader title="About Me" />
                <Intro />
                <Skills />
               
			</div>

	
			
		
			
		</section>
  )
}

export default About




