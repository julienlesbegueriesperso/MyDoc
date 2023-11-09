import TabItem from "./TabItem";

export function Information() {
  return (
    <TabItem content={<>
          <ul>
            <li>
              Site d'information grand public de la Société Française de
              Dermatologie :{" "}
              <a href="https://dermato-info.fr/">https://dermato-info.fr/</a>
            </li>
            <li>
              Fiches d'information :{" "}
              <a href="https://www.sfdermato.org/page-30-fiches-information-patients">
                https://www.sfdermato.org/page-30-fiches-information-patients
              </a>
            </li>
            <li>
              Règle de l'unité phalangette (patient souffrant de dermatite
              atopique/eczéma) :{" "}
              <a href="https://allergolyon.fr/wp-content/uploads/2020/07/L_unite_phalangette.pdf">
                https://allergolyon.fr/wp-content/uploads/2020/07/L_unite_phalangette.pdf
              </a>
            </li>
            <li>
              Études cliniques en cours à l'hôpital Larrey{" "}
              <a href="https://ampdv.fr/recherche-clinique.html">
                https://ampdv.fr/recherche-clinique.html
              </a>
            </li>
          </ul>
          </>}></TabItem>
  );
}

export default Information;
