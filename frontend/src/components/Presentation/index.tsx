import MainImage from 'assets/img/welcome.jpeg';
import './styles.css'

const Presentation = () => {
  return (
      <div className="presentation-container">
          <div className="image-presentation-container">
            <img src={MainImage} alt="Logo" />
          </div>
          <div className="title-presentation-container">
              <h2>OLÁ! SOMOS A TIJOLINHO IDEAL</h2>
              <p>Especialistas em produção e instalação de Tijolinhos Rústico de Gesso.
                Unimos qualidade e dedicação para entregar ao seu ambiente a decoração que ele merece.</p>
          </div>
      </div>
  );
};

export default Presentation;
