import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import Card from './Card';

function Type() {

    const id = window.location.href.split('/')[4]

    const [type, setType] = useState({})
    const [loading, setLoading] = useState(true)

    const getData = () => {
      fetch('https://pokeapi.co/api/v2/type/' + id)
      .then( res => res.json() )
      .then( (result) => {
        setType(result)
        setLoading(false)
      })
    }

    useEffect( () => {
      getData();
    }, []);

    if(loading){
      return <div><h1>Carregando...</h1></div>
    }

    return (
        <div>
          {type.pokemon.map((item) => (
            <Card key={item.pokemon.name} info={item.pokemon}></Card>
          ))}
          <h1>Recebe dano dobrado em pokemons do tipo:</h1>
          {type.damage_relations.double_damage_from.map((item) => (
            <h2>{item.name}</h2>
          ))} 
        </div>
    )
}

export default Type
