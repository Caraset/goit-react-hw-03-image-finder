import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className="ImageGallery">
        {images.map(({ tags, webformatURL, id }) => {
          return <ImageGalleryItem key={id} image={webformatURL} alt={tags} />;
        })}
      </ul>
    );
  }
}

export default ImageGallery;
