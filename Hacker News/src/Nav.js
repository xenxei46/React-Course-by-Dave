import React from "react";
import './index.css'

const Nav = () => {
 return (
   <div className='nav'>
     <nav>
       <span className='y-news'>
         <Logo />
       </span>
       <span className='list-item'>
         <strong>Hacker News</strong> news | threads | comments | show | ask |
         jobs | submit
       </span>
     </nav>
   </div>
 )
}

function Logo() {
  const url = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png`
  return <img src={url} className='logo' alt='Y-logo' />
}
export default Nav;