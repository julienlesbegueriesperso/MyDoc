import { useState, useEffect } from 'react';
import { Alert, Paper, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
// import PhoneIcon from "@mui/icons-material/Phone";
import Map from './Map/Map'




export function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null; // return this null to avoid hydration errors
  }
  return (
    <Paper elevation={0}  sx={{maxWidth:"800pt", margin: '15pt', padding: '5pt'
    }}>
          <Typography>
            Les Dr Marie CAUCANAS et Laureline LEGENDRE sont conventionnées en
            secteur 1 (honoraires conformes à ceux de la Sécurité Sociale).
          </Typography>
          <Typography>
          En dehors du laser épilatoire, les médecins ne réalisent pas d'acte de confort et d'esthétique.
          </Typography>
          <Typography>
            Engagées dans la formation d'internes en dermatologie du CHU de Toulouse,
            les dermatologues accueillent régulièrement ces derniers, qui peuvent réaliser
            des consultations sous supervision médicale.
          </Typography>
          <Typography>
            <br />
          </Typography>
          <Typography><strong>Accès</strong></Typography>
          <Typography>
            Rendez-vous au{" "}
            <a
              target={"_blank"}
              href="https://maps.app.goo.gl/yJaN4Jt31aR9e84L7"
              rel="noreferrer"
            >
              <BusinessIcon></BusinessIcon>
              132bis Bd Pierre et Marie Curie, 31200 Toulouse
            </a>
          </Typography>
          
          <Map></Map>
          
          <Typography>
            Par le métro (ligne B, arrêt Barrière de Paris)
          </Typography>
          <Typography>
            Par les bus 5, 29, 41, 110 Arrêt Barrière de Paris
          </Typography>
          <Typography>
            <br />
          </Typography>
          {/* <Typography> */}
            <Alert severity="warning">
            En cas de rendez-vous non honoré et sans annulation de votre part,
            les médecins se réservent le droit de ne plus vous donner de nouveau
            rendez-vous.
            </Alert>
          {/* </Typography> */}
          <Typography>
            <br />
          </Typography>
          <Typography>
            <strong>Prélèvements au laboratoire d'anatomie pathologique</strong> 
            <br/> 
            Ils font
            l'objet d'une facturation indépendante qui est directement adressée
            au patient (actes pris en charge par la Sécurité Sociale). Les
            résultats sont soit déposés sur votre espace Doctolib (données
            sécurisées, en téléchargement libre depuis votre compte), soit remis
            au cours d'une consultation dermatologique ultérieure.
          </Typography>
          <Typography>
            <strong>Informatique, fichiers et libertés</strong><br/> 
            Ce cabinet dispose d'un système
            informatique destiné à faciliter la gestion des dossiers des
            patients et à assurer la facturation des actes et la
            télétransmission des feuilles de soins aux caisses de Sécurité
            Sociale. Les informations recueillies lors de votre consultation
            sont protégées et feront l'objet, sauf opposition justifiée de votre
            part, d'un enregistrement informatique réservé à l'usage de votre
            professionnel de santé. Les photos prises lors de la consultation
            sont utilisées à des fins strictement professionnelles (suivi de
            votre dossier, demandes d'avis, illustrations dans des congrès,
            anonymisées, etc.).
          </Typography>
          <br/><br/><br/><br/>
          </Paper>
  
  );
}

export default Home;
