// import Subheader from "./Subheader";
import "../style/Content.css"

function Content({info}){
    // let name="Singh"//props
    
    return(
        <div className="content">
            {/* <Subheader text={text} name={name}/> */}
            {/* <Subheader text={{info,name}} /> */}
            {/* <img src="/image/img2.png" alt=""></img> */}
           
            {/* <div className="login">
                <form>
                    <label>Email</label><br></br><br></br>
                    <input type="email" placeholder="Enter your email"/><br></br><br></br>
                    <label>Password</label><br></br><br></br>
                    <input type="password" placeholder="Enter your password"/><br></br><br></br>
                    <button>Submit</button>
                    </form>
                </div> */}

                <div className="card">
                    <div className="card-image">
                    <img src={`${info.productpic}`} alt=""/>
                   
                    </div>
                    <div className="para1">
                    {/* <p>{info.id}</p> */}
                    <p><strong>{info.brand}</strong></p>
                    <p><strong>{info.price}</strong></p>
                    </div>
                </div>




        </div>
    );
}

export default Content;