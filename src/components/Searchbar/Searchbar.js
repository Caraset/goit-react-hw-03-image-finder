import { Component } from 'react';
// import PropTypes from 'prop-types';
// import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  onSubmitHandler = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.reset();
  };

  onInput = e => {
    const query = e.currentTarget.value;
    this.setState({ query });
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitHandler}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            onChange={this.onInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
