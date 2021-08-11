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
          <div className='damage'>
            <div className='damage__list'>
              <h1>Recebe dano dobrado de pokemons do tipo:</h1>
              {type.damage_relations.double_damage_from.map((item) => (
                <h2 className={'app__list__card__category__button--' + item.name}>{item.name}</h2>
              ))} 
            </div>
            <div className='damage__list'>
              <h1>Causa dano dobrado em pokemons do tipo:</h1>
              {type.damage_relations.double_damage_to.map((item) => (
                <h2 className={'app__list__card__category__button--' + item.name}>{item.name}</h2>
              ))} 
            </div>
          </div>
          <div className='app__list'>
            {type.pokemon.map((item) => (
              <Card key={item.pokemon.name} info={item.pokemon}></Card>
            ))}
          </div>
        </div>
    )
}

export default Type
