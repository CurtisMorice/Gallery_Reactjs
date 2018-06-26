import React, { Component } from 'react';
import { render } from "react-dom";
import '../GalleryItems//GalleryItem.css';
import GalleryList from '../GalleryList/GalleryList';
import {  Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import { GridListTile } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
  });
  

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
                <GridListTile col={2}>
            <div onClick={this.toggleDescription} >
                 <Card key={this.props.itemInfo.id}  className="card">     
                    <CardHeader > {itemToRender} </CardHeader>
                    < CardFooter>Likes: {this.props.itemInfo.likes} <br/> 
                    <div>
                    <CardBody  > <p>{this.props.itemInfo.title} <br/> </p></CardBody>
                    
                        <Button onClick={()=> this.props.putLike(this.props.itemInfo.id)} variant="fab" color="secondary" aria-label="edit" className={this.props.itemInfo.button}>
                        <Icon> L</Icon>
                        </Button>
                        </div>
                       </CardFooter>
                </Card>
                </div>
                </GridListTile>
            )
        }
    }

            





export default GalleryItems;