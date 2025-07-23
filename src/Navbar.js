import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

const Navbar = () => {
  

  const [search, setSearch] = useState("india");
  const [newsdata, setnewsdata] = useState(null);

  const word = (e) => {
    setSearch(e.target.value);
  };

  // Core API fetch function
  const fetchNews = async (query) => {
    const getdata = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${api_key}`
    );
    const response = await getdata.json();
    setnewsdata(response.articles);
  };

  // On form search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchNews(search); // use the current search value
  };

  // On topic button click
  const user = (e) => {
    const topic = e.target.value;
    setSearch(topic);
    fetchNews(topic); // fetch directly with button value
  };

  // Initial load with default "india"
  useEffect(() => {
    fetchNews("india");
  }, []);

  return (
    <>
      <div className="navv">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="title">
          <h3>NewsVerse</h3>
        </div>

        <div className="btnn">
          <div className="btn1">
            <button>Login</button>
          </div>
          <div className="btn2">
            <button>Sign-Up</button>
          </div>
        </div>
      </div>

      <div className="nav2">
        <button onClick={user} value="Health">Health</button>
        <button onClick={user} value="Sports">Sports</button>
        <button onClick={user} value="Entertainment">Entertainment</button>
        <button onClick={user} value="Politics">Politics</button>
        <button onClick={user} value="Event">Event</button>

        <div className="form">
          <form onSubmit={handleSearchSubmit}>
            <input
              onChange={word}
              type="search"
              value={search}
              placeholder="search"
            />
            <button type="submit">SEARCH</button>
          </form>
        </div>
      </div>

      {newsdata && (
        <div className="card-container">
          <Card data={newsdata} />
        </div>
      )}
    </>
  );
};

export default Navbar;
