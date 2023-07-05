import { Head } from './components/Head';
import { Main } from './components/Main'
import { Aside } from './components/Aside';
import { useState } from 'react';

function App() {
  const time = new Date;
  let [year,setyear] = useState(time.getFullYear());
  let [month, setmonth] = useState(time.getMonth()+1);
  let [date,setdate] = useState(time.getDate());
  console.log(`${year},${month},${date}`);
  return (
    <>
      <Head time={time} DateInfo = {{year,setyear,month,setmonth,setdate}}>

      </Head>

      <Main DateInfo={{year,month,date}}>

      </Main>

    </>
  );
}

export default App;
