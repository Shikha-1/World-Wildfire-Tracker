import './App.css';
import { useEffect, useState } from 'react';
import Header from "./components/Header";
import Loader from "./components/Loader";
import Map from "./components/Map";

function App() {
  const url = `https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?source=InciWeb,EO&status=open`
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((eventData) => {
        setEventData(eventData);
        setLoading(false);
      })
      .catch(() => console.log("Something Went Wrong! Try Again Later..")); // eslint-disable-next-line
  }, [])
  return (
    <div className="App">
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader/>}
    </div>
  );
}

export default App;