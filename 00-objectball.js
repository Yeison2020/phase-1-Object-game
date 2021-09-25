function gameObject() {
  objectGame = {
    home: {
      teamName: "Brookly Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brooke Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        Jason: {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 11,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Andrie": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };

  //--------------------------Syntax Function here
  return objectGame;
}
//----------Helper Function to return my Desires values;

// function goodPratice(game) {
//   let dataGame = game();
//   for (let gameKeys in dataGame) {
//     console.log(gameKeys);
//     let gameValues = dataGame[gameKeys];
//     for (let teamValues in gameValues) {
//       console.log(teamValues);
//     }
//     let dataPlayer = gameValues.players;
//     for (let keyPlayer in dataPlayer) {
//       console.log(keyPlayer);
//     }
//   }
// }

// console.log(goodPratice(gameObject));

function findPlayer(name) {
  let dataGame = gameObject();
  for (const team in dataGame) {
    const players = dataGame[team].players;
    for (const theplayer in players) {
      if (theplayer === name) {
        return players[theplayer];
      }
    }
  }
}

function numPointsScored(playerName) {
  const player = findPlayer(playerName);
  if (player) {
    return player.points;
  }
}

function shoesSize(playerName) {
  const player = findPlayer(playerName);
  if (player) {
    return player.shoe;
  }
}

// console.log(shoesSize("Brendan Haywood"), numPointsScored("Brendan Haywood"));

function teamColor(teamNombre) {
  const dataGame = gameObject();
  for (let i in dataGame) {
    //Here rembember the name of the teams
    if (i === teamNombre) {
      return console.log(dataGame[i].colors);
    }
  }
}

// teamColor("home");

function teamName() {
  let dataName = gameObject();
  let nameArray = [];
  for (let i in dataName) {
    const keys = dataName[i].teamName;
    nameArray.push(keys);
  }
  return console.log(nameArray);
}

// teamName();
// This function get everything from my currenct object players names
function playerNumbers(name) {
  let dataNumber = gameObject();

  for (let key in dataNumber) {
    const player = dataNumber[key];
    for (let i in player.players) {
      if (i === name) {
        return player.players[i].blocks;
      }
    }
  }
}
console.log(playerNumbers("Brendan Haywood"));
