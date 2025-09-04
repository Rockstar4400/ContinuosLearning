import React from 'react'
import './App.css'
import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImagesList';

class App extends React.Component {
  state = { images: [] };

    async onSearchSubmit (term) {
        const response = await unsplash
        .get('https://api.unsplash.com/search/photos',{
            params: { query: term }
        });

        this.setState({ images: response.data.results});
        
    }

    render(){
    return (
        <div className="ui container" style={{ marginTop: '10px'}}>
            <SearchBar onSubmit={(term) => 
                this.onSearchSubmit(term)}>
            </SearchBar>
            <ImageList images={this.state.images}>

            </ImageList>
            Found: {this.state.images.length} images
        </div>
    );
    }
}

export default App
