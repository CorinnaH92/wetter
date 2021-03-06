import React from "react";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            currentLocation: ""
        }
    }

    handleChange = () => {
        let newLocation = document.getElementById('searchInput').value
        if(newLocation !== ""){
            this.setState({
                currentLocation: newLocation
            });
        }
        return
    }

    render() {
        return (
            <header>
                <h1>Forecaster</h1>
                <input
                    placeholder="Select a new location"
                    aria-label="Enter a new town for an updated forcast"
                    list="locations"
                    className="search-input"
                    id="searchInput"
                    onChange={this.handleChange}
                />
                <datalist id="locations">
                    <option value="London" />
                    <option value="Prague" />
                    <option value="Switzerland" />
                    <option value="Austria" />
                    <option value="Germany" />
                </datalist>
                <button className="search-button" type="button"
                        onClick={this.props.updateLocationClick.bind(this, this.state.currentLocation)}>

                    <svg className="svg-icon" viewBox="0 0 20 20">
                        <path d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z" />
                    </svg>
                </button>
            </header>
        );
    }
};

export default Header;