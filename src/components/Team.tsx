import { Box, Paper, Typography } from "@mui/material";
import TabItem from "./TabItem";
import Header from "./Header";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";




export function Team() {

  const theme = useDocusaurusContext()
  return (
    <>
    <Paper variant="outlined"  sx={{maxWidth:"800pt", margin: '15pt', padding: '5pt'}}>
          <Typography>
            <strong style={{color: 'violet'}}>Marie Caucanas</strong>
            <br />
            Diplômée en Dermatologie, spécialisée en maladies et chirurgie des
            ongles, DIU Maladies systémiques, DIU Dermatologie esthétique, laser
            et cosmétologie. Past President de l'AMPDV (Association Midi
            Pyrénées des Dermatologues Vénéréologues), Trésorière du Groupe
            Ongle de la SFD (Société Française de Dermatologie).
          </Typography>
          <Typography>
            <strong style={{color: 'deeppink'}}>Laureline Legendre</strong>
            <br />
            Diplômée en Dermatologie, DIU de dermato-pédiatrie, DIU de
            dermoscopie. Past President de l'AMPDV (Association Midi Pyrénées
            des Dermatologues Vénéréologues), Vice-Présidente de l'AMPDV. Nous
            ne pratiquons pas: la dermato-allergologie, le traitement des
            varicosités (angiologues), la médecine esthétique et les actes de
            confort (ex. taches visage bénignes, excroissances cutanées
            bénignes, kératoses séborrhéiques...)
          </Typography>
          <Typography>
            <strong style={{color: 'green'}}>Nos assistantes</strong>
            <br />
            Camille, Corinne, Julie.
          </Typography>
          </Paper>
          </>
  );
}

export default Team;
