import React, { Component } from 'react';
import axios from 'axios';
import GalleryItems from '../GalleryItems/GalleryItems';
import GalleryLists from '../GalleryList/GalleryList'; 
import Header from '../Header/Header';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import {withStyles} from '@material-ui/core/styles';


//added to props as classes (this.props.classes.root)
const styles = {
  root: {
    backgroundColor: 'darkgray', //style
  }
}

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


// getLists = ()=>{
//   console.log('in getLists ', this.getLists);
//   axios.get('/gallery')
//   .then((response)=>{
// console.log('in getLists promise', response);
// this.setState({currentList: [...this.state.currentList, ...response.data.description]});
//   }).catch((error)=>{
//     console.log('error in getLists', error);
    
//   });
// }





  render() {
   // can put .map() IN HERE
   //const data = {this.state.galleryItem.map((item)})
   
    return (
     
        
      
      <div className={this.props.classes.root}>
         <Header />
        <GalleryLists galleryItems={this.state.galleryItems} likePhoto={this.likePhoto}/>
     <section>
   
   {this.state.galleryItems.map( picture => 

   <Card key={picture.id} className="card">
   <CardHeader > <img src={picture.path} alt="" className="galleryImage" /> </CardHeader>
   <CardBody> <p>{picture.title} <br/> </p></CardBody>
   <CardFooter>Likes: {picture.likes} <br/> 
      <button className="btn btn-xl" onClick={()=>this.putLike(picture.id)}>Like Me Please?</button></CardFooter>
   </Card>)
   
  }
</section>
               <br/> 
               <br/> 
               <br/> 
               <br/>  
               <br/> 
               <br/> 
               <br/> 
               <br/> 
                      {/* used for testing the Array */}
                      {JSON.stringify(this.state.galleryItems)}

</div>
      
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