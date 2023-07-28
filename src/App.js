import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import {UserData} from './Data'

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Lost",
      data: UserData.map((data) => data.userLost),
      backgroundColor: ["red", "green", "blue", "yellow", "purple"],


      },
    ],
  })

  return (
    <div className="App">
      <div style={{width: 700}}>
        <BarChart chartData={userData}/>
      </div>
    </div>
  );
}

export default App;
