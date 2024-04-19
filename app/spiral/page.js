"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import TextToSpeech from '../controls/t2s';
import VideoPlayer from '../controls/videoplayer';
export default function Home() {

    return (
      <div style={{ position: 'relative' }}>
      <img className="bg" src="./spiral.png" style={{ width: '100vw', height: '100vh' }} />
      <Link href='/'><button id="home"  className="ti"/></Link>
      <Link href='/about'><button id="about"  className="ti"/></Link>
      <Link href='/contact'><button id="contact"  className="ti"/></Link>   
      <Link href='/curriculum'><button id="curriculumt"  className="bi"/></Link> 
      <VideoPlayer
        src="./videos/Joren_Falls_Izu_Jap.mp4"
        startTime={0}
        endTime={15}
        id={"start"}
        cn={"playbutton"}
      />
      <div id='ts' className='absolute grid grid-cols-3 gap-11'>
      <TextToSpeech text="Spiral Binding Machine" />
      <TextToSpeech text="Transparent Cover" />
      <TextToSpeech text="Scissor" />
      {/* <TextToSpeech text="Mouse" />
      <TextToSpeech text="Printer" />
      <TextToSpeech text="Cd or Dvd" /> */}
      </div> 
      <Link href='/spiralvp'><button id="computervp"  className="bi"/></Link> 
  </div>
    );
}



