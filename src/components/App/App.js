import React, { Component } from 'react';
import axios from 'axios';
import GalleryItems from '../GalleryItems/GalleryItems';
import GalleryLists from '../GalleryList/GalleryList'; 
import Header from '../Header/Header';
import {withStyles} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import GalleryList from '../GalleryList/GalleryList';


const styles = {
  root: {
    backgroundColor: 'darkgray'
  }
}

const theme = createMuiTheme({
             palette: {
             primary: orange
}

})




class App extends Component {

constructor(){
super();
//keeps track of the GalleryList
this.state = {
galleryItems: [],

}
}

componentDidMount = () => {
  console.log('App did mount');
 
this.getPhotos();


}

getPhotos = () => {
axios.get('/gallery')
.then((response)=>{
  console.log('response in GET client', response.data);
  //update gallery items and calls render
  this.setState({galleryItems: [...response.data]});
}).catch((error)=>{
  console.log('error in GET client', error);

});

}

putLike = (photoId) =>{
      console.log('click worked', photoId);
      axios.put(`/gallery/like/${photoId}`).then((response)=>{
      console.log('response back from putLike', response);
      this.getPhotos();
    }).catch((error)=>{
      console.log('error in the put on client', error);

  })
}


  render() {
   // can put .map() IN HERE
   //const data = {this.state.galleryItem.map((item)})
   
    return (  
      <MuiThemeProvider theme={theme}>
          <div className={this.props.classes.root}>
         <Header />
         <GalleryList galleryItems={this.state.galleryItems} putLike={this.putLike}/>
     

                      {/* used for testing the Array
                      {JSON.stringify(this.state.galleryItems)} */}

          </div>
      </MuiThemeProvider>
              );
  }
}


export default withStyles(styles)(App);


{/* <ul>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/galleryList'>Gallery Descriptions</Link></li>
           <li><Link to='/galleryPhotos'>Gallery Photos</Link></li>
         </ul>
         <Route path='/galleryList' component={GalleryLists}/>
         <Route path='/galleryPhotos' component={GalleryItems}/> */}