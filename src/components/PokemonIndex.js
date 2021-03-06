import React from 'react';
import PokemonCollection from './PokemonCollection';
// import PokemonForm from './PokemonForm';
import Loading from './Loading';
import { Search } from 'semantic-ui-react';

class PokemonIndex extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={null} showNoResults={false} />
        <br />
        <PokemonCollection />
        <br />
        {/*<PokemonForm />*/}
      </div>
    )
  }
}

export default PokemonIndex;
