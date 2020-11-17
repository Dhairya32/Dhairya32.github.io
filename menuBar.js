class MenuBar extends HTMLElement{
  constructor(){
    super();
    this.innerHTML = `
    <style>
      .header{
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 24px;
      }
      .header-img{
        height: 100px;
      }
      .menuItems{
        display: flex;
        justify-content: space-evenly;
        border-top: 2px solid #bbb;
        border-bottom: 2px solid #bbb;

      }
      .mobileMenuItems{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
      .dropbtn {
        border: none;
        cursor: pointer;
        width: 24px;
      }

      /* The container <div> - needed to position the dropdown content */
      .dropdown {
        position: relative;
        display: none;
      }

      /* Dropdown Content (Hidden by Default) */
      .dropdown-content {
        display: none;
        position: absolute;
        z-index: 1;
      }

      /* Links inside the dropdown */
      .dropdown-content a {
        text-decoration: none;
        text-align: right;
        margin-left: -72px;
        display: block;
        width: 80px;
        background: white;
        padding: 16px;
        border-left: 0px solid #bbb;
        border-bottom: 1px solid #bbb;
      }

      /* Change color of dropdown links on hover */
      .dropdown-content a:hover {
      }

      /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
      .show {display:block;}

      .menuButton{
        padding-top: 12px;
        padding-bottom: 12px;
        display: block;
        padding: 8px;


        background:
           linear-gradient(
             to bottom, #071F60  100%,
             #071F60 100%
           );
          background-position: 0 100%;
          background-repeat: repeat-x;
          background-size: 0px 0px;
        color: #343434;
        text-decoration: none;
        transition: background-size .2s;
        letter-spacing: 2px;
        word-spacing: 2px;
        text-align: center;


        /* background-color: #dddddd; */
      }
      .menuButton:hover {
        background-size: 4px 50px;
        color: #F7FFF7;
      }

      @media screen and (max-width: 500px) {
        .dropdown{
          display: inline-block;
          justify-content: left;
        }
        .menuItems{
          display: none;
        }
        .mobileMenuItems{
          justify-content: space-between;
        }
        .menuButton{
          padding-top: 8px;
          padding-bottom: 8px;

        }
        .header{
          border-bottom: 2px solid #bbb;
          padding-left: 10px;
          padding-right: 28px;
        }
        .menuButton:hover {
          background-size: 4px 50px;
          color: #F7FFF7;
          background: #071F60;
        }
      }
    </style>

    <div class="header">
      <div class="mobileMenuItems">
        <div>
          <img class="header-img" src="images/Excel Engineering Logo.jpeg"></img>
        </div>
        <div class="dropdown">
          <img onclick="myFunction()" class="dropbtn" src="images/menu.png"></img>
          <div id="myDropdown" class="dropdown-content">
          <a class="menuButton" href="/">Our Company</a>
          <a class="menuButton" href="services.html">Services</a>
          <a class="menuButton" href="gallery.html">Gallery</a>
          <a class="menuButton" href="contact-us.html">Contact</a>
          </div>
        </div>
      </div>
      <div class="menuItems">
        <a class="menuButton" href="/">Our Company</a>
        <a class="menuButton" href="services.html">Services</a>
        <a class="menuButton" href="gallery.html">Gallery</a>
        <a class="menuButton" href="contact-us.html">Contact</a>
      </div>
    </div>
    `;
  }
}
window.customElements.define('menu-bar', MenuBar);
