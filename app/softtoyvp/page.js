"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import VideoPlayer from '@/app/controls/videoplayer';
export default function computer() {

    return (
      <div style={{ position: 'relative' }}>
      <img className="bg" src="../softtoyvp.png" style={{ width: '100vw', height: '100vh' }} />
      <Link href='/'><button id="home"  className="ti"/></Link>
      <Link href='/about'><button id="about"  className="ti"/></Link>
      <Link href='/contact'><button id="contact"  className="ti"/></Link>   
      <Link href='/curriculum'><button id="curriculumt"  className="bi"/></Link>  
      <Link href='/softtoy'><button id="pretraining"  className="bi"/></Link>  
      <div className='pc'>
      <VideoPlayer
        src="./English/softtoy.mp4"
        startTime={0}
        endTime={507}
        id={"start"}
        cn={"playbutton"}
      />
      <VideoPlayer
        src="./English/softtoy.mp4"
        startTime={0}
        endTime={28}
        id={"first"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./English/softtoy.mp4"
        startTime={28}
        endTime={44}
        id={"second"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./English/softtoy.mp4"
        startTime={44}
        endTime={116}
        id={"third"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./English/softtoy.mp4"
        startTime={116}
        endTime={174}
        id={"fourth"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./English/softtoy.mp4"
        startTime={176}
        endTime={220}
        id={"fifth"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./English/softtoy.mp4"
        startTime={225}
        endTime={466}
        id={"sixth"}
        cn={"playbutton"}
      /> 
                  <VideoPlayer
        src="./English/softtoy.mp4"
        startTime={469}
        endTime={507}
        id={"seventh"}
        cn={"playbutton"}
      /> 
      </div>
  </div>
    );
}



