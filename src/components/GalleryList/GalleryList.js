import React, { Component } from 'react';


class GalleryList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li key={this.props.description}>{this.props.description}</li>
                </ul>
            </div>
        );
    }
}

export default GalleryList;