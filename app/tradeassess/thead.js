import Link from 'next/link'
import React from 'react'

const Thead = () => {
  return (
    
                   <thead>
    <tr> <td align="center" colSpan={8} bgcolor="#FFF" height={70}> 
        <nav>
          <Link href="/tradeassess">
            <i className="fa fa-coffee " />
            <b>सब्लिमेशन</b>
          </Link>
          <Link href="/tradeassess_computer">
            <i className="fa fa-desktop" />
            <b>कंप्यूटर</b>
          </Link>
          <Link href="/tradeassess_paperbag">
            <i className="fa fa-shopping-bag" />
            <b>पेपर बैग</b>
          </Link>
          <Link href="/tradeassess_photocopy">
            <i className="fa fa-camera" />
            <b>फोटोकॉपी</b>
          </Link>
          <Link href="/tradeassess_lamination">
            <i className="fa fa-print" />
            <b>लामीनेशन</b>
          </Link>
          <Link href="/tradeassess_jewellery">
            <i className="fa fa-diamond" />
            <b>आभूषण</b>
          </Link>
          <Link href="/tradeassess_softtoy">
            <i className="fa fa-child" />
            <b>नरम खिलौना</b>
          </Link>
          <Link href="/tradeassess_spiral">
            <i className="fa fa-paperclip" />
            <b>सर्पिल बंधन</b>
          </Link>
          <Link href="/tradeassess_doormat">
            <i className="fa-align-justify" />
            <b>डोरमैट</b>
          </Link>
          <span />
        </nav>
      </td></tr></thead>  
  )
}

export default Thead