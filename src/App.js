import './App.css';
import { Typography } from "@material-tailwind/react";
import Dashboard from './Components/Modules/DashBoard/Dashboard';

function App() {

  return (
    <div className="App p-5">
      <div className='grid place-items-center gap-5 p-20'>
        <Typography variant="h3" className=' text-blue-700'>Covid Statistics</Typography>
        <Typography className='text-gray-500 font-light'>
          Coronavirus COVID-19 Statistics API Based on public data by Johns Hopkins CSSE.
          It includes search by country, province, and date. Returns diff for confirmed, deaths,
          and recovered, compared with the previous day.
        </Typography>
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
