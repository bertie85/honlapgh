import Page from '../../components/page/page';
import Section from '../../components/section/section';

const Szolgaltatasok = (props) => (
  <Page title="Szolgáltatások">

    <Section title="Étkeztetés">
      <p>
        Munkanapokon napi egyszeri meleg ételt nyújtunk azoknak, akik életkoruk, betegségük, szociális állapotuk miatt nem képesek maguk,
        illetve eltartottjaik számára azt tartósan vagy átmeneti jelleggel biztosítani.
      </p>

      <p>
        <i>
          Az étkeztetés formái:
        </i>
      </p>

      <ul className="text">
        <li>
          étkezőnkben, kulturált, nyugodt körülmények köztött kiszolgálással
        </li>
        <li>
          otthoni fogyasztásra saját maguk elvihetik
        </li>
        <li>
          külön kiszállítási díjért, házhoz szállítással
        </li>
      </ul>


      <p>
        Az étkeztetés térítési díját a kérelmező havi jövedelmének mértéke határozza meg.
      </p>
      {/* TODO: tablazatot csatolni? */}

      <p>
        Bővebb felvilágosítás Miklós Józsefné (Marcsi) étkeztetés-szervezőnél kérhető a <u>06 20 239 0968</u>.
      </p>
    </Section>

    <Section title="Házi segítségnyújtás">
      <p className="text">
        Az önálló életvitel fenntartásához nyújtunk segítséget az igénylő lakókörnyezetében a(z):
      </p>

      <ul className="text">
        <li>
          Személyi és környezeti higiéné megtartásában
        </li>
        <li>
          Étkezésben
        </li>
        <li>
          Bevásárlásban (legfeljebb 5 kg a legközelebbi üzletből)
        </li>
        <li>
          Szociális ügyintézésben
        </li>
      </ul>

      <p>
        Szükség szerint kapcsolatot tartunk a háziorvossal gyógyszer felíratása, kiváltása és adagolása céljából; Meglátogatjuk a kórházba került gondozottat,
        az intézmény gépjárművével az egészségügyi intézmények és a közszolgáltatások eléréséhez segítséget nyújtunk.
      </p>

      <p>
        A szolgáltatásokért térítési díjat kell fizetni.
      </p>

      <p>
        Ferences rendi szerzetesek által lehetőség van szentségek felvételére (betegek szentsége, szengyónás, stb.), illetve akolitus testvér segítségével rendszeres
        lelki beszélgetésekre, Szentáldozásra is.
      </p>

      <p>
        Bővebb információ, jelentkezés Jusztus Zsuzsa gondozásvezetőnél, a <u>06 20 239 6920</u> telefonszámon lehetséges.
      </p>
    </Section>

    <Section title="Nappali ellátás">
      <p>
        A lelki élményekre is odafigyelve nyújtunk szabadidős programokat és lehetőséget napközbeni tartózkodásra, csendes, szép környezetben.

        Programjaink magukban foglalják (a teljesség igénye nélkül):
      </p>

      <ul className="text">
        <li>
          Imaóra
        </li>
        <li>
          Filmvetítés
        </li>
        <li>
          Idősek tornája
        </li>
        <li>
          Számítógépes ismeretek
        </li><li>
          Előadások (különböző témákban)
        </li>
        <li>
          Helyi hangversenyek
        </li>
        <li>
          Szenior örömtánc
        </li>
        <li>
          Múzeumlátogatás
        </li>
        <li>
          Kirándulások, erdei séták
        </li>
      </ul>

      <p>És még sok más.</p>
      <p>Az Idősek Klubjának szolgáltatásai, a programokon való részvétel klubtagság esetén térítésmentesek. Bővebb felvilágosítás
        Sándor Viktória és Szekeres Bertold klubgondozóktól kérhető a <u>06 20 250 3692</u> telefonszámon.
      </p>

    </Section>
  </Page>
);

export default Szolgaltatasok;
