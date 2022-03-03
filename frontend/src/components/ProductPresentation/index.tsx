import MainImage from 'assets/img/tijolinho.jpeg';
import './styles.css'

const ProductPresentation = () => {
  return (
      <div className="ProductPresentation-container">
          <div className="image-ProductPresentation-container">
            <img src={MainImage} alt="Logo" />
          </div>
          <div className="title-ProductPresentation-container">
              <h2>NOSSOS TIJOLINHOS</h2>
              <p>Nossa produção é 100% artesanal. 
                Confeccionados um a um com moldes de gesso, os tijolinhos passam por um processo de secagem sob luz 
                indireta por 15 dias antes de serem instalados. Isso faz com que a instalação ocorra sem problemas 
                e não danifique sua parede.</p>
          </div>
      </div>
  );
};

export default ProductPresentation;
