import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GalleryItems from '../GalleryItems/GalleryItems';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 400,
      height: 400,
    },
    subheader: {
      width: '100%',
    },
  });

class GalleryList extends Component {
    constructor() {
        super();
        
    }
    
    render() {
       
        return (
            
            <div className={this.props.root}>
              <GridList cellHeight={160} className={this.props.gridList} cols={3}>
            {this.props.galleryItems.map( item => (
             <GalleryItems key={item.id} itemInfo={item} putLike={this.props.putLike} />
            
            
         ))}
                </GridList>
            </div>
        );
        
    }
}

export default GalleryList;