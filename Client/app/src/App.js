import react, { useState, useEffect } from 'react';
import axiso from 'axios';


const App = () => {
  let initalvalues = [];
  const [values, setValues] = useState(initalvalues);

  useEffect(() => {
    axiso.get('http://localhost:8000/api/read')
      .then((datas) => {
         console.log(datas);
        //etValues({...values,})
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <h1>Heyy</h1>
  )
}

export default App;