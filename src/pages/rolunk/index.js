import Page from '../../components/page/page';
import Section from '../../components/section/section';

const Rolunk = (props) => (
  <Page title="Rólunk">
    <Section title="Köszötő">
      <p>
        Kedves Látogató!
      </p>

      <p>
        Isten hozta honlapunkon!Intézményünk 1995-ben nyitotta meg kapuit a kerület - elsősorban - idős lakosai számára.Célunk az, hogy ellátottjaink egy szeretetteljes, békés közösségre találjanak egy szép,
        nyugodt környezetben.
        Már a kezdetektől ellátunk önkormányzati feladatokat, beleértve a szociális étkeztetést, nappali ellátást és a házi segítségnyújtást.
      </p>

      <p>
        A honlapunkon megtalál minden fontos információt a szolgáltatásainkkal, elérhetőségeinkkel és aktualitásainkkal kapcsolatban. Jó böngészést kívánunk!
      </p>

      {/* <ul className="text">
        <li>
          étkezőnkben, kulturált, nyugodt körülmények köztött kiszolgálással
        </li>
        <li>
          otthoni fogyasztásra saját maguk elvihetik
        </li>
        <li>
          külön kiszállítási díjért, házhoz szállítással
        </li>
      </ul> */}
    </Section>

    <Section title="A csapat">
      <p>
        Stábunk már hosszú évek óta foglalkozik idősekkel, minden munkatársunk jól képzett szakember a saját területén.
      </p>
    </Section>
  </Page>
);

export default Rolunk;
