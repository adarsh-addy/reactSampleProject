//functional component

function Header(){
    return (
        <div className="header">


        <div className="logo">
           <img src="/image/logo.jpg" alt=""/>

        </div>
        <div className="content2">
            <div className="address" >
                <i className="fa fa-location-arrow" style={{color: "white"}}></i>
            </div>

            <div className="info">
                <p style={{fontsize: "small",color: "white"}}>Deliver to</p>
                
                {/* <p style={{fontsize: "medium",color: "white"}}>Address</p> */}
            </div>

        </div>

        <div className="searchbar">
            <div className="search">
                <input type="text" placeholder="Search"/>

            </div>
            <div className="icon">
                <i className="fa fa-search"></i>
            </div>

        </div>

        <div className="flag">
            <img src="/image/flag1.png" alt="" className="icon1"/>
        </div>



            

        </div>
    );
}

export default Header;