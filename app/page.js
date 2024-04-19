"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {

    return (
      <div style={{ position: 'relative' }}>
      <img className="bg" src="./frontpage.png" style={{ width: '100vw', height: '100vh' }} />
      <Link href='/'><button id="home"  className="ti"/></Link>
      <Link href='/about'><button id="about"  className="ti"/></Link>
      <Link href='/contact'><button id="contact"  className="ti"/></Link>
      <Link href='/curriculum'><button id="curriculum"  className="bi"/></Link>
      <Link href='assessment'><button id="assessment"  className="bi"/></Link>
      
  </div>
    );
}



