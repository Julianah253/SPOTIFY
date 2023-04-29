import React from 'react'
import './menu.css'
import './unem.js'
const Menu = () => {
  return (
    <div class="both">
          <div className="spotify__menu">
            <aside> 
                <a href="#" className="green"> <i className="fa-brands fa-spotify"></i> Spotify </a>
                <br/><br/>
                <a href="" className="a__href"> <i className="fa-solid fa-house"></i> Home </a>
                <br/>
                {/* <div class="placeholder">
                    <input placeholder="Search..." />
                </div> */}

                <a href="" className="a__href"> <i className="fa-solid fa-search"></i> Search </a> 
                <br/>
                <a href="" className="a__href"> <i className="fa-solid fa-music"></i>Radio </a>
            </aside>

            <br/><br/><br/>
            <div className="bottom">
                <h4> YOUR LIBRARY </h4>
                <p> Made For You </p>
                <p> Recently Played </p>
                <p> Liked Songs </p>
                <p> Albums </p>
                <p> Artists </p>
                <p> Podcasts </p>
                
                <br/><br/><br/><br/><br/>
                <h4> PLAYLISTS </h4>
                <p> Today's Top Hits </p>
                <p> Discover Weekly </p> 
                <p> Release Radar </p>
                <p> Chill </p>
            </div>            
         </div>

         <div class="main">
             <div id="icon">
                <div className="arrows">
                  <i class="fa-solid fa-angle-left"></i>
                  <i class="fa-solid fa-angle-right"></i>
                </div>

                <div className="user">
                   <a href=""><i class="fa-solid fa-circle-user"></i> Harley Quinn  </a>
                   <i class="fa-solid fa-angle-down"></i>
                </div>
             </div>

             <br/><br/><br/><br/><br/><br/> <br/><br/><br/>
            <div className="div">
             <div className="img_all">
              <img src="euphoria.jpg"/>
             </div>

              <div className="heading">
                <h6> Album </h6>
                <h1> Euphoria (Original Score from the HBO Series) </h1>
              </div>
            </div>  

         </div>
         <script src="unem.js"></script>
    </div>
  )
}

export default Menu