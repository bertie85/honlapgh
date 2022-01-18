import Page from '../../components/page/page';
import Section from '../../components/section/section';
import "./style.css";

const Rolunk = (props) => (
  <Page title="Rólunk">
    <Section title="">
      <p>
        Intézményünk 1995-ben nyitotta meg kapuit a Magyarok Nagyasszonya Ferences Rendtartomány fenntartásában.
        A kerület - elsősorban - idős lakosai számára nyújtunk szolgáltatásokat. Célunk az, hogy ellátottjaink egy szeretetteljes, békés közösségre
        találjanak egy szép és nyugodt környezetben.
        Már a kezdetektől szerződésszerűen látunk el önkormányzati feladatokat, beleértve a szociális étkeztetést, nappali ellátást és a házi segítségnyújtást.
        Hitből fakadó meggyőződésünk révén elkötelezettek vagyunk a szolgáltatásaink lehető legmagasabb színvonalon való nyújtásában.
      </p>

      <p>
        "Jöjjetek hozzám mind, akik fáradtak vagytok és terhet hordoztok, és én felüdítelek titeket."
      </p>

      <cite>/Mt 11,28</cite>

      <div className="img-container mb-3">
        <img className="rolunk-img" src="rolunkimg.jpg" alt='gondviseles haza' loading='lazy'></img>
      </div>
    </Section>
  </Page>
);

export default Rolunk;
