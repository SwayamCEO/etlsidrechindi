"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import VideoPlayer from '@/app/controls/videoplayer';
export default function computer() {

    return (
      <div style={{ position: 'relative' }}>
      <img className="bg" src="../laminationvp.png" style={{ width: '100vw', height: '100vh' }} />
      <Link href='/'><button id="home"  className="ti"/></Link>
      <Link href='/about'><button id="about"  className="ti"/></Link>
      <Link href='/contact'><button id="contact"  className="ti"/></Link>   
      <Link href='/curriculum'><button id="curriculumt"  className="bi"/></Link>  
      <Link href='/lamination'><button id="pretraining"  className="bi"/></Link>  
      <div className='pc'>
      <VideoPlayer
        src="./English/lamination.mp4"
        startTime={0}
        endTime={126}
        id={"start"}
        cn={"playbutton"}
      />
      <VideoPlayer
        src="./English/lamination.mp4"
        startTime={0}
        endTime={22}
        id={"first"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./English/lamination.mp4"
        startTime={20}
        endTime={32}
        id={"second"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./English/lamination.mp4"
        startTime={32}
        endTime={126}
        id={"third"}
        cn={"playbutton"}
      />
            {/* <VideoPlayer
        src="./videos/Joren_Falls_Izu_Jap.mp4"
        startTime={2}
        endTime={8}
        id={"fourth"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./videos/Joren_Falls_Izu_Jap.mp4"
        startTime={8}
        endTime={14}
        id={"fifth"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./videos/Joren_Falls_Izu_Jap.mp4"
        startTime={13}
        endTime={15}
        id={"sixth"}
        cn={"playbutton"}
      /> 
                  <VideoPlayer
        src="./videos/Joren_Falls_Izu_Jap.mp4"
        startTime={3}
        endTime={10}
        id={"seventh"}
        cn={"playbutton"}
      />  */}
      </div>
  </div>
    );
}



