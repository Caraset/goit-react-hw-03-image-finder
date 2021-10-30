import { Component } from 'react/cjs/react.production.min';
import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar';

const KEY = '23292870-e9e1fc8f4fc8bd7151266ea82';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
  };

  componentDidMount() {
    fetch(
      `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(respons => respons.json())
      .then(res => this.setState({ images: res.hits }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query === this.state.query &&
      prevState.page === this.state.page
    ) {
      return;
    }

    fetch(
      `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(respons => respons.json())
      .then(res => this.setState({ images: res.hits }));
  }

  onSearchSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { images } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSearchSubmit}></Searchbar>
        <ImageGallery images={images} />
      </div>
    );
  }
}

export default App;
