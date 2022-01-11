import Page from '../../components/page/page';
import Section from '../../components/section/section';

const Home = (props) => (
  <Page title="">
    <Section title="">
      <p>
        Kedves Látogató!
      </p>

      <p>
        Isten hozta honlapunkon! Intézményünk 1995-ben nyitotta meg kapuit a Magyarok Nagyasszonya Ferences Rendtartomány égisze alatt.
        A kerület - elsősorban - idős lakosai számára nyújtunk szolgáltatásokat. Célunk az, hogy ellátottjaink egy szeretetteljes, békés közösségre
        találjanak egy szép és nyugodt környezetben.
        Már a kezdetektől szerződésszerűen látunk el önkormányzati feladatokat, beleértve a szociális étkeztetést, nappali ellátást és a házi segítségnyújtást.
        Hitből fakadó meggyőződésünk révén elkötelezettek vagyunk a szolgáltatásaink lehető legmagasabb színvonalon való nyújtásában.
      </p>

      <p>
        A honlapunkon megtalál minden fontos információt a szolgáltatásainkkal, elérhetőségeinkkel és aktualitásainkkal kapcsolatban. Jó böngészést kívánunk!
      </p>

      <div className='w-100'>
        <cite className='float-right'>Mészáros Ágnes, intézményvezető</cite>
      </div>
    </Section>

    <Section>
      <p>
        "Hogy ne vigaszt keressek, hanem vigasztaljak, hogy ne megértést keressek, hanem másokat értsek meg, hogy ne engem szeressenek, hanem szeretetet nyújtsak."
      </p>

      <cite>/Assisi Szent Ferenc</cite>

      <div className="img-container mb-3">
        <img className="img" alt='gondviseles haza mozaik' src="indeximg.jpg"></img>
      </div>
    </Section>
  </Page>
);

export default Home;
