"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';


export default function Home() {

    return (
      <div style={{ position: 'relative' }}>
      <img className="bg" src="./curriculum.png" style={{ width: '100vw', height: '100vh' }} />
      <Link href='/'><button id="home"  className="ti"/></Link>
      <Link href='/about'><button id="about"  className="ti"/></Link>
      <Link href='/contact'><button id="contact"  className="ti"/></Link>
      <div id="trades"className='flex flex-col '>
      <Link href='/computer'><button id="computer"  className="trade"/></Link>
      <Link href='/photocopy'><button id="photocopy"  className="trade"/></Link>
      <Link href='/sublimation'><button id="sublimation"  className="trade"/></Link>
      <Link href='/lamination'><button id="lamination"  className="trade"/></Link>
      
      <Link href='/spiral'><button id="spiral"  className="trade"/></Link>
      <Link href='/paperbag'><button id="paperbag"  className="trade"/></Link>
      <Link href='/softtoy'><button id="softtoy"  className="trade"/></Link>
      <Link href='/doormat'><button id="doormat"  className="trade"/></Link>
      <Link href='/jewellery'><button id="doormat"  className="trade"/></Link>
      </div>
      <Link href='/assessment'><button id="assessmentt"  className="bi"/></Link>
      
      


      
  </div>
    );
}



