import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Lookup from './Lookup';
import ViewList from './View';

const Router = ({ pokeList, setPokeList }) => {
    function updatePokeList(newPoke) {
        const copyList = [...pokeList];
        copyList.push(newPoke);
        setPokeList(copyList);
      }
    
    return(
        <div>
            <Route path="/lookup">
                <Lookup addFunc={updatePokeList}/>
            </Route>
            <Route path="/view">
                <ViewList pokeList={pokeList}/>
            </Route>
            <Redirect from="/" to="/lookup" />
        </div>
    )
}

export default Router;