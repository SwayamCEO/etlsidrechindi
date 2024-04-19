"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import TextToSpeech from '../controls/t2s';
import VideoPlayer from '../controls/videoplayer';
export default function Home() {

    return (
      <div style={{ position: 'relative' }}>
      <img className="bg" src="./softtoy.png" style={{ width: '100vw', height: '100vh' }} />
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
      <div id='ts1' className='absolute grid  grid-cols-3 gap-8'>
      <TextToSpeech text="Furry Cloth" />
      <TextToSpeech text="Thread Strings" />
      <TextToSpeech text="Eyes" />
      <TextToSpeech text="Needle" />
      <TextToSpeech text="Thread" />
      <TextToSpeech text="Glue" />
      <TextToSpeech text="Scissor" />
      </div> 
      <Link href='/softtoyvp'><button id="computervp"  className="bi"/></Link> 
  </div>
    );
}



