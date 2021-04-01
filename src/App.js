import { useEffect, useState } from 'react';
import './App.css';
import ApiHelper from './ApiHelper';

const Game = (props) => {
  return (
    <div className="game">
      <div>ID: { props.game.id }</div>
      <div>Name: { props.game.name }</div>
      <div>Description: { props.game.description }</div>
      <div>Rating: { props.game.rating }</div>
    </div>
  );
};

const Home = (props) => {
  return (
    <div className="games">
      <div>Home</div>
      <div>
        {
          props.games.map((game) => {
            return (
              <div key={game.id} onClick={() => props.clickHandler(game)}>
                { game.name }
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

function App() {
  const [games, setGames] = useState([]);
  const [currentGame, setGame] = useState({});

  useEffect(async () => {
    const api = new ApiHelper();
    const response = await api.fetchGames();
    setGames(response);
  }, []);

  const clickHandler = (gameName) => {
    setGame(gameName);
  };

  return (
    <div className="App">
      <header className="App-header">
        {
          !currentGame.id ?
            <Home games={games} clickHandler={clickHandler}/> :
            <Game game={currentGame}/>
        }
      </header>
    </div>
  );
}

export default App;
