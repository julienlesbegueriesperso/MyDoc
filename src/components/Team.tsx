import { Avatar, Box, CircularProgress, Paper, Typography } from "@mui/material";
import TabItem from "./TabItem";
import Header from "./Header";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CabinetImages from "./CabinetImages";
import { Suspense } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";




export function Team() {

  const theme = useDocusaurusContext()
  return (
    <div style={{display: 'flex'}}>
    <Paper variant="outlined"  sx={{maxWidth:"800pt", margin: '15pt', padding: '5pt'}}>
          <Typography>
          <Avatar alt="Marie Caucanas" src="/img/mc.jpeg" />
            <strong style={{color: 'violet'}}>Marie Caucanas</strong>
            <br />
            Diplômée en Dermatologie, spécialisée en maladies et chirurgie des
            ongles, DIU Maladies systémiques, DIU Dermatologie esthétique, laser
            et cosmétologie. Past President de l'AMPDV (Association Midi
            Pyrénées des Dermatologues Vénéréologues), Trésorière du Groupe
            Ongle de la SFD (Société Française de Dermatologie).
          </Typography>
          <Typography>
          <Avatar alt="Marie Caucanas" src="/img/ll.png" />
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
          <div style={{margin: "1.2em"}}>
          <Suspense fallback={<CircularProgress></CircularProgress>}>
         <BrowserOnly>{() => {
        return <CabinetImages></CabinetImages>
         }}</BrowserOnly>
         </Suspense>
          </div>
          </div>
  );
}

export default Team;
