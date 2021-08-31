import Page from '../../components/page/page';
import Section from '../../components/section/section';

const Home = (props) => (
  <Page title="">
    <Section>
      <p>
        "Hogy ne vigaszt keressek, hanem vigasztaljak, hogy ne megértést keressek, hanem másokat értsek meg, hogy ne engem szeressenek, hanem szeretetet nyújtsak."
      </p>

      <cite>/Assisi Szent Ferenc</cite>

      <div className="img-container">
        <img className="index-img" src="indeximg.jpg"></img>
      </div>
    </Section>
  </Page>
);

export default Home;
