import React from 'react'
import Link from 'next/link';

const Nav = () => {
  return (
               <nav className="nav">
    <Link href="/pretraining">
      <i className="fa fa-coffee " />
      <b>Pretraining skills</b>
    </Link>
    <Link href="/assessment">
      <i className="fa fa-desktop" />
      <b>Generic skills</b>
    </Link>
    <span />
  </nav>      
  )
}

export default Nav