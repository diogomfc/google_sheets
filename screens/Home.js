import React from 'react';
import Header from './Header/Header'


export default function Home({ games, title}){
   
    return(
        
        <main>
            <Header  />
            <h1>🎮 Top Jogos Da Vida - Diogo 🎮 {title}</h1>

            <ol>
                {games.map((game,index) => {
                    
                    const position = index + 1;
                    const medals = ["🥇","🥈","🥉","🥉"]

                    return (
                        <li key={game.name}>
                            <span>
                                <span className="indice">
                                    {position}
                                </span>

                                <span className="name">
                                    {medals[index]}
                                    {'   '}
                                    {game.name}
                                </span>
                            </span>
                            
                            <img src={game.image} alt={`Capa de ${game.name}`}/>
                        </li>
                    )
                })}
            </ol>
        </main>
    )
}
