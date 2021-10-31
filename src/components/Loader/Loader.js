import Loader from 'react-loader-spinner';

function MarkUpLoader() {
  return (
    <div className="loader">
      <Loader type="Grid" color="#3f51b5" height={80} width={80} />
    </div>
  );
}

export default MarkUpLoader;
