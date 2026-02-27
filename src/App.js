import logo from './logo.svg';
import './Counter.css'
import Counter from './Counter';
import Demo from './Demo'
import Dynamic from './Dynamic'
import Table from './Table'
function App()
 {
   const arr=[1,2,3,4,5];
  const arrobj=[{Name:"karthi"},{age:18},{city:"salem"}]
    return(
      <div>
      <Table/>
      <Demo test={arrobj}/>
      changes to test github
      </div>
    );
    }
    export default App;


 /*
  const name="karthika"
  const age=18
  const city="salem"
  return (
    <div className="App">
      <div className='divOne'>
      <h1 className="nameAge">Hi my name is {name}<br/>and my age is {age}<br/>and i am from {city}</h1>
      </div>
      <div className='divTwo'>
      {
        age >=18?<h1 className="success" >you are eligible for voting</h1>:<h1  className="failure">you are not eligible for voting</h1>
      }
      </div>
    <div className='divThree'>
    <p id="para">Ferrero Rocher, one of the most iconic brands of the Ferrero Group was created in 1982 in Alba, a small town in the hills of Piedmont in Italy. It was inspired by the desire to make all the pleasure of a sophisticated chocolate speciality accessible to a much wider public.</p>
    </div>
  

    <div class="dashboard">
        <div class="card tall">Income Graph</div>
        <div class="card wide">Sales Report</div>
        <div class="card">Stats</div>
        <div class="card big">Main Visualization</div>
        <div class="card">Bubble Chart</div>
        <div class="card wide">Timeline</div>
        <div class="card tall">Social Metrics</div>
        <div class="card">Settings</div>
      </div>
    </div>
  );
}

export default App;*/

