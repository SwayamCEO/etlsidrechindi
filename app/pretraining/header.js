import React from "react";
import Link from 'next/link';
export default function Header(){
    return(
        <>
        <header className="header">
  <h1 className="logo"> <img src="./etlsid.png" alt="Logo" /></h1>
  <ul className="main-nav" id="myTopnav">
    <li>
      <Link href="/">
        <div className="icon">
          <i className="fa fa-home" />
          <i className="fa fa-home" /> 
        </div>
        <div className="name"><span >HOME</span></div>
      </Link>
    </li>
    <li>
      <Link href="./about">
        <div className="icon">
          <i className="fa fa-file-text-o" />
          <i className="fa fa-file-text-o" />
        </div>
        <div className="name"><span >ABOUT</span></div>
      </Link>
    </li>
    <li>
      <Link href="./tradeassess">
        <div className="icon">
          <i className="fa fa-cogs" />
          <i className="fa fa-cogs" />
        </div>
        <div className="name"><span >TRAINING</span></div>
      </Link>
    </li>
    <li>
      <Link href="./assessment">
        <div className="icon">
          <i className="fa fa-book" />
          <i className="fa fa-book" />
        </div>
        <div className="name"><span >ASSESSMENT</span></div>
      </Link>
    </li>
    <li>
      <Link href="./contact">
        <div className="icon">
          <i className="fa fa-phone" />
          <i className="fa fa-phone" />
        </div>
        <div className="name"><span >CONTACT</span></div>
      </Link>
    </li>
  </ul>
</header>

        </>
    )
}