export default class ApiHelper {
  fetchGames = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let games = [
          {
            id: '230940239409382',
            name: 'Memory Matix',
            description: "This is the description for memory matrix",
            rating: 4.0,
          },
          {
            id: '2309402394239382',
            name: 'Train of Thought',
            description: "This is the description for Train of thought",
            rating: 4.0,
          },
          {
            id: '2309340239409382',
            name: 'Highway Hazards',
            description: "This is the description for Highway Hazards",
            rating: 4.0,
          },
          {
            id: '2309139409382',
            name: 'River Ranger',
            description: "This is the description for River Rangerr",
            rating: 4.0,
          },
          {
            id: '2309402419409382',
            name: 'Speed Match',
            description: "This is the description for Speed Match",
            rating: 4.0,
          },
          {
            id: '230940599409382',
            name: 'Tidal Treasures',
            description: "This is the description for Tidal Treasures",
            rating: 4.0,
          },
        ];
        resolve(games)
      }, 5000)
    })
  };
}
