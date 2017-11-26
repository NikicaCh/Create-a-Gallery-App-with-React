import React, { Component } from 'react';
import apikey from '../config.js';
import axios from 'axios';
import Spinner from 'react-spinkit';


import Container from './Container';


class Fetch extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          images: [],
          loading: true,
          tag: props.match.params.tag ,
        }
      };


    componentDidMount() {
        this.search(this.state.tag);
    };
    
    search = (tag) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${tag}&per_page=12&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState(
                {
                    images: response.data.photos.photo,
                    loading: false
                }
            );
        })
        .catch(error => {
            console.log(error);
        });
    };
    

    render() {
        return (
            <div>
                {
                (this.state.loading)
                ?<Spinner fadeIn='none' name="ball-beat" />
                :<Container data={this.state.images} />
                }
            </div>
        );
    };
}

export default Fetch;