import object from "../Object"
import Content from "./Content";
function Contentcom(){
    let contentArr=object.map((ele,idx)=>{
        console.log(ele);
        return(
          <>
            <Content info={ele} key={idx} />
          </>
        )
      })
      return(
        <div>{contentArr}</div>
      )
}
export default Contentcom;