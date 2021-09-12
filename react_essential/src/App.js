import './App.css';
import { useState, useEffect } from 'react';

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);

  }, [login])

  if (loading) return <h1>Loading....</h1>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;


  return (
    data ?
      <div>
        <h1>API call from fetch using react : </h1>
        <h2>Name : {data.name}</h2>
        <h2>Location : {data.location}</h2>
        <img alt={data.login} src={data.avatar_url} height={200}></img>
      </div>
      : null
  )

}

export default App;
