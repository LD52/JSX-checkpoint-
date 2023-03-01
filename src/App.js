import './App.css';
import photo from './star.svg'

function App() {
  return (
       <div className="Root">

    
    <div  className="Tree">
      <div className="Branch">
         <div className="Img">
      <img src={photo} alt="logo" className="Log"></img>
      </div> 
     <div className="Box">
     <div className="How">  <h1>How did we do ? </h1> </div>
     <div className="Please"><h3>Please let us know how we did with your suppport request. All feedback is appreciated to help us improve our offering! </h3></div> 
     </div>
     <div className="Number">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
     </div>
     <div className="Before">
      <div className="End">
        <h3>S</h3>
        <h3>U</h3>
        <h3>B</h3>
        <h3>M</h3>
        <h3>I</h3>
        <h3>T</h3>

        </div>
        </div>

      </div>
   
</div>

    </div>
   
  );
}



export default App;
