import React, { Component } from 'react';
import './GalleryItem.css';
import GalleryList from '../GalleryList/GalleryList';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";



class GalleryItems extends Component {
    constructor() {
    super();
    this.state = {
    showDescription: false
        }
    }
    handleLikeClick = (event) => {
        console.log('like button was clicked');
        this.props.putLike(this.props.itemInfo.id);
    }

    toggleDescription = (event) => {
        console.log('hie');
        this.setState({
            showDescription: !this.state.showDescription
        })
    }

    render() {
        let itemToRender;
        if(this.state.showDescription) {
            itemToRender = <p>{this.props.itemInfo.description}</p>;
        } else {
            itemToRender = <img className="gallery-image" src={this.props.itemInfo.path} />
        }
            return ( 

                <div >
                    <ul>
                        <li onClick={this.toggleDescription}>
                            {itemToRender}
                        </li>
                    </ul>
                </div>

            //  <Card key={this.props.itemInfo.id} onClick={this.toggleDescription} className="card">     
            // <CardHeader > {itemToRender} </CardHeader>
            // <CardBody> <p>{this.props.itemInfo.title} <br/> </p></CardBody>
            // <CardFooter>Likes: {this.props.itemInfo.likes} <br/> 
            //     <button  onClick={()=> this.props.putLike(this.props.itemInfo.id)}>Like Me Please?</button></CardFooter>
            // </Card>
      
        
            )
        }
            

}



export default GalleryItems;