// pages/Home.js

import React from 'react';
import { DiDatabase, DiScrum} from "react-icons/di";
import { CiMobile3 } from "react-icons/ci";
import { TbBrandSpeedtest } from "react-icons/tb";



function Home() {
  return (
    <div className="homeTab">
      <div className="shortBio"><h1 className="nameText">Hey there, I'm </h1> <h1 className="name">Firdaus Fadlizam</h1>
      <p>Dedicated software engineering student that is motivated in learning and adapting to the
latest software processes and tools. Personal attributes include maintaining positive attitude,
being a team player, the ability to address and communicate with others, and demonstrating
strong work ethics.
</p><div className="iconList">

<div className="icon"><DiDatabase size={30} /><h5 className="role"> Full Stack Developer</h5></div>
<div className="icon"><CiMobile3 size={30}/><h5 className="role"> Mobile App Developer</h5></div>
<div className="icon"><DiScrum size={35}/><h5 className="role">Scrum Master</h5></div>
<div className="icon"><TbBrandSpeedtest size={30}/><h5 className="role">Software Tester</h5></div>
</div>
</div>
      <img src="chicago2.jpg" className="chicago"/>
    </div>
  );
}

export default Home;
