import React from "react";
import './index.css';


const Header = () => {
 const url =`https://i.pinimg.com/280x280_RS/7b/eb/40/7beb401620fabf62dc1841484eb47844.jpg`
 return (
   <div className='header'>
     <div className='elements'>
       <span className='inner'>
         <img src={url} alt='AE' className='logo' />
       </span>
       <h1>Aviation Explorer</h1>
     </div>
   </div>
 )
}

export default Header;