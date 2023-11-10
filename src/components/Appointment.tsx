import { Alert, Box, Typography } from "@mui/material";
import TabItem from "./TabItem";

export function Appointment() {
  return (
    <Box sx={{maxWidth:"800pt", margin: 'auto', marginTop:0}}>
          <br/>
         
            <Alert severity="info">
              Pour prendre un rendez-vous de Dermatologie, vous devez être
              adressé par votre médecin traitant déclaré (respect du Parcours de
              Soins), à l'exception du motif "Dépistage des cancers cutanés".
            </Alert>
            <br/>
            <Alert severity="success">
            Connectez-vous sur la plateforme{" "}
            <a href="https://www.doctolib.fr/" target='_blank' rel="noreferrer" >Doctolib.fr</a>
            <strong> le premier jour ouvré du mois vers 9h.</strong>
          </Alert>
          <br/>
            <Alert severity="warning">
            En cas de rendez-vous non honoré et sans annulation de votre part,
            les médecins se réservent le droit de ne plus vous donner de nouveau
            rendez-vous.
            </Alert>
         <Box marginTop='15pt'>
          <Typography>
            Merci de respecter les motifs de rendez-vous proposés, sinon le
            médecin se réserve le droit de ne pas réaliser la consultation.
            <br />
            Si le planning est complet, vous pouvez contacter votre médecin
            traitant pour la réalisation d'une télé-expertise sur la plateforme{" "}
            <a target='_blank' href="https://omnidoc.fr/" rel="noreferrer">Omnidoc.fr</a>.
            <br />
            Si votre cas le nécessite et en fonction du degré d'urgence, le
            médecin réalisant l'avis de télé-expertise pourra vous proposer un
            rendez-vous dans des délais adaptés. Sauf urgence vitale, nous
            n'acceptons pas les demandes de rendez-vous hors parcours de soins.
          </Typography>
          </Box>
          </Box>
       
  );
}

export default Appointment;
