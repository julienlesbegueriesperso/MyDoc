import { Alert, Avatar, Box, CircularProgress, Divider, Paper, Typography } from "@mui/material";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CabinetImages from "./CabinetImages";
import { Suspense } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";




export function Team() {

  const theme = useDocusaurusContext()
  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      <div style={{ flex: '1 15em'}}>
      <Paper elevation={0} sx={{ maxWidth: "800pt", margin: '15pt', padding: '5pt' }}>
        <Avatar sx={{justifyContent: "center", display: "flex" , width: 120, height: 120 }} alt="Marie Caucanas" src="/img/mc2.png" />
        <Typography>
          <strong style={{ color: 'violet' }}>Marie Caucanas</strong>
          <br />
          Diplômée en Dermatologie, spécialisée en maladies et chirurgie des
          ongles, DIU Maladies systémiques, DIU Dermatologie esthétique, laser
          et cosmétologie. Past President de l'AMPDV (Association Midi
          Pyrénées des Dermatologues Vénéréologues), Trésorière du Groupe
          Ongle de la SFD (Société Française de Dermatologie).
        </Typography>
        <Typography>
          Membre de TELDES de la SFD (groupe de télédermatologie et e-santé).
        </Typography>
        <Typography>
          Membre de l'ENS (europeen nail society).
        </Typography>
        <br />
        <Avatar sx={{ justifyContent: "center", display: "flex" , width: 120, height: 120 }} alt="Laurleine Legendre" src="/img/ll2.png" />
        <Typography>
          <strong style={{ color: 'deeppink' }}>Laureline Legendre</strong>
          <br />
          Diplômée en Dermatologie, DIU de dermato-pédiatrie, DIU de
          dermoscopie. Past President de l'AMPDV (Association Midi Pyrénées
          des Dermatologues Vénéréologues), Vice-Présidente de l'AMPDV. 
        </Typography>
        <Typography>
          Membre de TELDES de la SFD (groupe de télédermatologie et e-santé).
        </Typography>
        <br/>
        <Alert severity="info">Nous
          ne pratiquons pas: la dermato-allergologie, le traitement des
          varicosités (angiologues), la médecine esthétique et les actes de
          confort (ex. taches visage bénignes, excroissances cutanées
          bénignes, kératoses séborrhéiques...)
          </Alert>
        <Typography>
          <strong style={{ color: 'green' }}>Nos assistantes</strong>
          <br />
          Corinne, Julie, Camille.
        </Typography>
        <div style={{alignContent:"center", alignItems: "center"}}>
          <img src="/img/assistantes.jpg" alt="assistantes" width={"50%"}></img>
        </div>
      </Paper>
      </div>
      <div style={{ margin: "1.2em" }}>
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
