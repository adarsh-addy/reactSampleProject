function Subheader({info}){//destructuring the props
    // console.log(text)
    return (
        <div className="subheader">
           {/* <p>{text.name}{name}</p> */}
           <p>{info.name}</p>
        </div>
    );
}

export default Subheader;