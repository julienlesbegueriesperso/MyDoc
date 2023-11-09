import { Typography } from "@mui/material";
import TabItem from "./TabItem";

export function Nails() {
  return (
    <TabItem content={<>
            <Typography>
          Le Dr Marie CAUCANAS est spécialisée dans les maladies et la chirurgie
          des ongles.
          <br/>
           Pour ce qui concerne les suspicions d'onychomycoses
          (champignons infectant les ongles) :
          </Typography>
          <ul>
            <li>Merci de vous munir des
          résultats d'un examen mycologique (prescription via votre médecin
          traitant, à faire dans un laboratoire d'analyses médicales) lors de la
          consultation.</li>
          <li>Ne pas mettre de vernis antifongiques au moins 1 mois
          avant la consultation.</li>
          <li>Ne pas prendre de médicament antifongique par
          voie orale au moins 3 mois avant la consultation.</li>
          <li>Ne pas mettre de
          vernis cosmétique sur les ongles (aucun, y compris les ongles
          apparemment sains)</li>
          <li>Apporter la liste de vos médicaments et de vos
          allergies éventuelles</li>
          <li>Apporter une prise de sang récente si vous en
          avez une (moins de 6 mois)</li>
          </ul>
          <Typography>
          Le Dr Marie CAUCANAS peut être amenée à
          faire des prélèvements complémentaires selon les cas : une analyse
          histopathologique qui est directement envoyée par le cabinet au
          laboratoire d'anatomie pathologique (une facture vous sera envoyée
          indépendamment de notre cabinet) et/ ou une analyse de mycologie que
          le patient apporte directement après la consultation au laboratoire
          d'analyses. 
          <br/>
          Ces analyses sont toutes les deux prises en charge par la
          Sécurité Sociale. 
          <br/>
          Pour ce qui concerne les ongles incarnés, dans
          certains cas une chirurgie est nécessaire. Dans plus de 90% des cas,
          la technique proposée sera une matricectomie chimique partielle au
          phénol (appelée également "phénolisation").
          <br/>
           Les modalités, risques et
          bénéfices vous seront exposées lors de la première consultation.
          Veuillez noter qu'aucune chirurgie n'est pratiquée le jour de la
          première consultation.
          </Typography>
          </>}></TabItem>
  );
}

export default Nails;
