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
              <p>Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
          </div>
      </div>
  );
};

export default Presentation;
