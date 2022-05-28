import "../style/Footer.css"
function Footer(props){
    console.log(props)
    return(
        <div className="footer">
            <p>@All Resource Reserved By {props.name}</p>
            

        </div>
    );
}

export default Footer;