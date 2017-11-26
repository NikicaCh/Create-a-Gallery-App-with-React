import React from 'react';
import Photo from './Photo';

import InsertSearch from './InsertSearch';
import NotFound from './NotFound';


const Container = props => {

    const data = props.data;
    let images;
    (data.length > 0) 
    ? images = data.map( image => <Photo farm={image.farm} server={image.server} id={image.id} secret={image.secret} key={image.id} />)
    : images = <NotFound />;
    
    return (
        <div className="photo-container">
          <InsertSearch />
          <ul>
            {images}
          </ul>
      </div>
    )
}

export default Container;