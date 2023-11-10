import { Typography, Paper } from "@mui/material";


export function Biotherapies() {
  return (
    <Paper variant="outlined"  sx={{maxWidth:"800pt", margin: '15pt', padding: '5pt'}}>
          <Typography>
            Les dermatologues ont la possibilité de vous proposer des
            traitements spécifiques (biothérapies) selon les indications
            médicales (psoriasis, dermatite atopique, urticaire) et les critères
            en vigueur.
            <br />
            <a target="_blank" href="https://www.sfdermato.org/page-30-fiches-information-patients">
              Lien vers le site de la SFD (Société Française de Dermatologie)
            </a>
          </Typography>
    </Paper>
  );
}

export default Biotherapies;
