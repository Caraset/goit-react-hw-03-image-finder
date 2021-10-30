function ImageGalleryItem({ image, alt }) {
  return (
    <li className="ImageGalleryItem">
      <img src={image} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
}

export default ImageGalleryItem;
