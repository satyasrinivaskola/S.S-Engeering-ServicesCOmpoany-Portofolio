
import './App.css';
//import style from React;
import SESHEADER from './SESHEADER.JS';
function App() {
  return (
  
    <div>
      <header>
        <h1 id='h1c'>Welcome To S.S Engeering Services</h1>
        <img id='imgc' src={require("./SES_DET.jpeg")}></img>
         <p id='aboutc'>We work based cutosmer requirment we all are using technology<br/>
          but sometimes we will some issue while using machine all elctronic gadgets are more <br/>
          expensove we can't bare again,So one solution for all machina repairs 
         </p>
      </header>
      <div class="row">
  <div className="column">
    <img src={require("./SES_M1.jpeg")} alt="Snow" ></img>
  </div>
  <div className="column">
    <img src={require("./SES_M2.jpeg")} alt="Forest" ></img>
  </div>
  <div className="column">
    <img src={require("./SES_M3.jpeg")} alt="Mountains"></img>
  </div>
</div>
      <div>
        <h1>Let's Chat:</h1>
        <h3>Hours:
          <p>24/7 Availability</p>
        </h3>
        <h3>Address:
          <p>H.NO 5-13, Ananadapuram Village ,SundarayyaPeta GramaPanchayathi
            Kannurapalem Post,Kasimakota Mandal,Anakapalli District -531031
          </p>
        </h3>
        <title>
        Contact Info:
        <p>Phone:9059855729 <br/>
          Email:s.sengineeringservices24@gmail.com.
        </p>
         </title>
      </div>
    </div>
  );
}

export default App;
