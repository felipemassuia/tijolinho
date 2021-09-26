import MainImage from 'assets/img/welcome_2.jpeg';
import './styles.css'

const AboutUs = () => {
  return (
      <div className="aboutus-container">
          <div className="image-aboutus-container">
            <img src={MainImage} alt="Logo" />
          </div>
          <div className="title-aboutus-container">
              <h2>QUEM SOMOS</h2>
              <p>Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla</p>
          </div>
      </div>
  );
};

export default AboutUs;
