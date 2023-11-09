import { Typography } from "@mui/material";
import TabItem from "./TabItem";

export function Team() {
  return (
    <TabItem content={<>
          <Typography>
            <strong>Marie Caucanas</strong>
            <br />
            Diplômée en Dermatologie, spécialisée en maladies et chirurgie des
            ongles, DIU Maladies systémiques, DIU Dermatologie esthétique, laser
            et cosmétologie. Past President de l'AMPDV (Association Midi
            Pyrénées des Dermatologues Vénéréologues), Trésorière du Groupe
            Ongle de la SFD (Société Française de Dermatologie).
          </Typography>
          <Typography>
            <strong>Laureline Legendre</strong>
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
            <strong>Nos assistantes</strong>
            <br />
            Camille, Corinne, Julie.
          </Typography>
          </>}></TabItem>
  );
}

export default Team;
