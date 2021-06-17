async function tempo(resquest, response) {
    const dynamicDate = new Date();
    
    const nomeDb = await fetch("http://localhost:3000/api/games")
    const nomeDbJson = await nomeDb.json();
    const nomeTitlo = nomeDbJson.title;
    const games = nomeDbJson.games;
    const nameName = nomeDbJson.games[4].name;

    response.json({
       date: dynamicDate.toGMTString(),
       nomeTitlo: nomeTitlo,
       nameName: nameName,
       games: games,
    });

}

export default tempo;