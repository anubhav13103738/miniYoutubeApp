// import React from 'react';

// class SearchBar extends React.Component {
//     render() {
//         return <input />;
//     };
// };

// export default SearchBar;

//following is the syntactic sugar but same as above 


import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term : '' };
    };

    render() {
        return(
            <div className="search-bar">
                <input placeholder = 'search' onChange = {event => this.onInputChange(event.target.value)}/>
            </div>
        );
    };

    onInputChange(term) {
        if(!term){
            term = 'travel';
        }
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
};

export default SearchBar;