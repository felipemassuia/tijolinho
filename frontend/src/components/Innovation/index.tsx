import MainImage from 'assets/img/aplicacao.jpeg';
import './styles.css'

const Inovation = () => {
  return (
      <div className="inovation-container">
          <div className="image-inovation-container">
            <img src={MainImage} alt="Logo" />
          </div>
          <div className="title-inovation-container">
              <h2>NOSSO DIFERENCIAL</h2>
              <p>Tijolinho Ideal é sinônimo de qualidade. 
                Nosso processo de secagem torna os tijolinhos mais homogêneos e resistentes. 
                Nossa instalação é composta por 3 fases: aplicação, selagem e pintura. 
                Assim, todo o trabalho é conosco! Você não tem preocupação ou gasto posterior algum!</p>
          </div>
      </div>
  );
};

export default Inovation;
