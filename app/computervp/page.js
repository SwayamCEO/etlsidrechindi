"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import VideoPlayer from '@/app/controls/videoplayer';
export default function computer() {

    return (
      <div style={{ position: 'relative' }}>
      <img className="bg" src="../computervp.png" style={{ width: '100vw', height: '100vh' }} />
      <Link href='/'><button id="home"  className="ti"/></Link>
      <Link href='/about'><button id="about"  className="ti"/></Link>
      <Link href='/contact'><button id="contact"  className="ti"/></Link>   
      <Link href='/curriculum'><button id="curriculumt"  className="bi"/></Link>  
      <Link href='/computer'><button id="pretraining"  className="bi"/></Link>  
      <div className='pc'>
      <VideoPlayer
        src="./English/computer.mp4"
        startTime={0}
        endTime={432}
        id={"start"}
        cn={"playbutton"}
      />
      <VideoPlayer
        src="./English/computer.mp4"
        startTime={31}
        endTime={59}
        id={"first"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./English/computer.mp4"
        startTime={61}
        endTime={75}
        id={"second"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./English/computer.mp4"
        startTime={75}
        endTime={142}
        id={"third"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./English/computer.mp4"
        startTime={142}
        endTime={220}
        id={"fourth"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./English/computer.mp4"
        startTime={220}
        endTime={270}
        id={"fifth"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./English/computer.mp4"
        startTime={270}
        endTime={325}
        id={"sixth"}
        cn={"playbutton"}
      /> 
                  <VideoPlayer
        src="./English/computer.mp4"
        startTime={326}
        endTime={432}
        id={"seventh"}
        cn={"playbutton"}
      /> 
      </div>
  </div>
    );
}



