import { Typography, Paper } from "@mui/material";


export function Phototherapy() {
  return (
    <Paper variant="outlined"  sx={{maxWidth:"800pt", margin: '15pt', padding: '5pt'}}>
            <Typography>
          Notre cabinet est équipé d'une cabine de photothérapie UVA et UVB.
          <br/>
           La
          photothérapie est utilisée dans le traitement de certaines maladies
          dermatologiques dont : le psoriasis, la dermatite atopique, le
          vitiligo, le prurigo, la lucite estivale bénigne, etc.
          <br/>
          <strong>Fiches d'information</strong>
          <br/>
          <a 
          target='_blank'
          href='/fiche-dnformation-patient-2017-sur-la-p-uvb-deflogos-revues-apres-fp-1-1822c1013f9cf60725f07de0b35ce27a.pdf'>
            <strong>Fiche Photothérapie UVB</strong></a>
            &nbsp;&nbsp;et&nbsp;&nbsp;
          <a 
          target='_blank'
          href='/fiche-information-patient-2017-sur-la-puvatherapie-deogos-revues-apres-fp-1-a6f205b8b86a152cf384342e73378eac.pdf'>
            <strong>Fiche Puvathérapie</strong></a>
        </Typography>
        </Paper>
  );
}

export default Phototherapy;
