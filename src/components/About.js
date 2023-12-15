import React from "react";
import Metadata from "./Metadata";

function About(){
	return(
		<div className="text-center">
			<Metadata title="About Us" description="We are a team of developers that are or were students of Zetech University!" />
			<h1>About Us</h1>
			<p>We are a team of developers that are or were students of <a href="https://www.zetech.ac.ke">Zetech University</a>!</p>
		</div>
	);
}

export default About;
