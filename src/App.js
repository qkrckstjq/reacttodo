import { Head } from './components/Head';
import { Main } from './components/Main'
import { Aside } from './components/Aside';
import { useState } from 'react';
import { useTheme } from 'styled-components';

function App() {
  const time = new Date;
  
  let [year,setyear] = useState(time.getFullYear());
  let [month, setmonth] = useState(time.getMonth()+1);
  let [date,setdate] = useState(time.getDate());
  let [Updating,setUpdating] = useState(false);
  
  return (
    <>
      <Head time={time} DateInfo = {{year,setyear,month,setmonth,setdate}} setUpdating={setUpdating}>

      </Head>

      <Main DateInfo={{year,month,date}} setUpdating={setUpdating} Updating={Updating}>

      </Main>

    </>
  );
}

export default App;
