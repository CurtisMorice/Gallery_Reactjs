import React, { Component } from 'react';
import axios from 'axios';
// import GalleryItems from '../GalleryItems/GalleryItems';
// import GalleryLists from '../GalleryList/GalleryList'; 
import Header from '../Header/Header';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

class App extends Component {

constructor(props){
super(props);
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
console.log('in getPhotos ', this);

axios.get('/gallery')
.then((response)=>{
  console.log('response in GET client', response);
  this.setState({galleryItems: [...response.data]});
}).catch((error)=>{
  console.log('error in GET client', error);

});

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
   
    return (
     
        
      
      <div className="App">
         <Header />
               <br/> 
               <br/> 
               <br/> 
               <br/>  
     <section>
   
   {this.state.galleryItems.map( picture => 

   <Card key={picture.id} className="card">
   
   <CardHeader > <img src={picture.path} alt="" /> </CardHeader>
   
   <CardBody> <p>{picture.title}</p></CardBody>
   <CardFooter>Likes: {picture.likes} <button className="btn btn-xl">Like Me Please?</button></CardFooter>
   </Card>)
   
  }
</section>

      </div>
      
    );
  }
}

export default App;


{/* <ul>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/galleryList'>Gallery Descriptions</Link></li>
           <li><Link to='/galleryPhotos'>Gallery Photos</Link></li>
         </ul>
         <Route path='/galleryList' component={GalleryLists}/>
         <Route path='/galleryPhotos' component={GalleryItems}/> */}