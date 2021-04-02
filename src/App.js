import { useEffect, useState } from 'react';
import './App.css';

/*
{
  "fr": 317,
  "sov": 94,
  "rank": 51,
  "search_term": "dry cat food"
}
*/

const Bubble = (props) => {
  const widthPercentage = props.data.fr / props.maxX;
  const heightPercentage = props.data.sov / props.maxY;
  const style = {
    height: props.data.rank / 5,
    width: props.data.rank / 5,
    left: `calc(${widthPercentage * 100}% - ${props.data.rank/2}px)`,
    bottom: `calc(${heightPercentage * 100}% - ${props.data.rank/2}px)`
  };

  return (
    <div className="bubble" style={style}>
      { props.data.search_term }
    </div>
  );
};

function App() {
  const [dataSet, setData] = useState([]);
  const [intersection, setIntersection] = useState({x: 5, y: 5});

  const getMaxRanges = (arr) => {
    let maxX = 0;
    let maxY = 0;

    for (let i = 0; i < arr.length; i++) {
      maxX = Math.max(maxX, arr[i].fr);
      maxY = Math.max(maxY, arr[i].sov);
    }

    return {maxX, maxY};
  };

  useEffect(() => {
    fetch('https://api.mocki.io/v1/b71caef9')
      .then(response => response.json())
      .then(res => {
        setData(res); // set data
        const maxRanges = getMaxRanges(res);
        setIntersection({
          x: maxRanges.maxX / 2,
          y: maxRanges.maxY / 2
        });
      });
  }, []);

  return (
    <div className="App">
      {
        dataSet.map(data => {
          return (
            <Bubble data={data} maxX={intersection.x * 2} maxY={intersection.y * 2}/>
          )
        })
      }
      <div className="chart">
        <div className="row row1">
          <div className="quad1"></div>
          <div className="quad2"></div>
        </div>
        <div className="row row2">
          <div className="quad3"></div>
          <div className="quad4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
