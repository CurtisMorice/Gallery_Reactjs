import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GalleryItems from '../GalleryItems/GalleryItems';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 600,
      height: 600,
    },
    subheader: {
      width: '100%',
    },
  });
class GalleryList extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
       
        return (
            <section>
   
            {this.props.galleryItems.map( item => 
             <GalleryItems key={item.id} itemInfo={item} putLike={this.props.putLike} />
            
            
            )}
        
            
        </section>
        );
    }
}

export default GalleryList;