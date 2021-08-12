import NotAvailable from '../../assets/notAvailable.jpeg';
import './Movie.css';

export function Movie({ imageUrl, name, onClick }) {
  return (
    <img 
      alt={name} 
      className="Movie" 
      onClick={onClick}
      src={imageUrl || NotAvailable} 
      title={name} />
  );
}
