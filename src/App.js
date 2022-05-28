import "./App.css";
import Header from "./component/Header";
import Subheader from "./component/Subheader";
import Contentcom from "./component/Contentcom";
import Footer from "./component/Footer";

function App() {
  let simple = "xyz"; //props
  let sub=[{
    id: '1',
    name: 'This is my subheader',
  }]
 const subArr=sub.map(ele=>{
   return(

    <Subheader info={ele}/>
   )
 })
  // let head = { name: "Addy" }; //destructor--->es6 latest updation-->array,number,string etc
  return (
    <div className="App">
      {/* header is component which is rendering in app component */}
      <Header />
      {/* <Subheader data={sub}/> */}
      {subArr}

   <Contentcom/>
      {/* props drilling */}


      <Footer name={simple} />
    </div>
  );
}

export default App;
