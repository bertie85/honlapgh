import Page from '../../components/page/page';
import Section from '../../components/section/section';
import { PersonCircle, EnvelopeFill, TelephoneFill, HouseFill } from 'react-bootstrap-icons';

const Kapcsolat = (props) => (
  <Page title="Kapcsolat">
    <div className="col-4">
      <div className="row">
        <Section title="Cím">
          <p>
            <HouseFill />&nbsp;1025, Budapest, Szilfa utca 4.
          </p>
        </Section>

        <Section title="Telefon">
          <p>
            <TelephoneFill />&nbsp;06 1 392 54 34
          </p>
        </Section>

        <Section title="Email">
          <p>
            <EnvelopeFill />&nbsp;gondviseles.haza@ferencesek.hu
          </p>
        </Section>

        <Section title="Intézményvezető">
          <p>
            <PersonCircle />&nbsp;Mészáros Ágnes
          </p>
        </Section>
      </div>
    </div>

    <div className="col-8">
      <div className="row">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.1903199487197!2d18.98941091581868!3d47.5251576015934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ded232a8be0b%3A0x498d9e3a4c5820e6!2sBudapest%2C%20Szilfa%20u.%204%2C%201025!5e0!3m2!1shu!2shu!4v1627885949579!5m2!1shu!2shu"
          allowfullscreen=""
          loading="lazy">
        </iframe>
      </div>
    </div>
  </Page >
);

export default Kapcsolat;
