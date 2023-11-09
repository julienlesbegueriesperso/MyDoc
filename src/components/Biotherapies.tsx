import { Typography } from "@mui/material";
import TabItem from "./TabItem";

export function Biotherapies() {
  return (
    <TabItem content={<>
          <Typography>
            Les dermatologues ont la possibilité de vous proposer des
            traitements spécifiques (biothérapies) selon les indications
            médicales (psoriasis, dermatite atopique, urticaire) et les critères
            en vigueur.
            <br />
            <a href="https://www.sfdermato.org/page-30-fiches-information-patients">
              Lien vers le site de la SFD (Société Française de Dermatologie)
            </a>
          </Typography>
          </>
    }></TabItem>
  );
}

export default Biotherapies;
