import MainImage from 'assets/img/welcome_2.jpeg';
import './styles.css'

const AboutUs = () => {
  return (
      <div className="aboutus-container">
          <div className="image-aboutus-container">
            <img src={MainImage} alt="Logo" />
          </div>
          <div className="title-aboutus-container">
              <h2>NOSSO TRABALHO</h2>
              <p>Sem sujeira, barulho ou quebra quebra, instalamos tijolinhos um a um em seu ambiente, proporcionando um resultado único!</p>
          </div>
      </div>
  );
};

export default AboutUs;
