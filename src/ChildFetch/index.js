import { useState, useEffect } from 'react';

export default function ChildFetch() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  useEffect(() => 
  {
     setError("");
     setLoading(true);

     fetch("https://my-json-server.typicode.com/lucky-katty-sniper/json/posts")
       .then(res => res.json())
       .then(val => setData(val))
       .catch(err => setError(err.message))
       .finally(() => setLoading(false));
  }, []);
  
  if(error !== "") {
    return <div>{error}</div>;
  }  
  
  if(loading) {
    return <div>Loading ...</div>;
  }
  
  return (
    <div>
      {data.map(item => (<div key={item.someKey}>{item.someValue}</div>))}
    </div>
  );
}
