
import { Typography } from "@mui/material";
import {PricesWomen, PricesMen} from "./PricesTable";
import TabItem from "./TabItem";

const info = `
INFORMATION LASER ALEXANDRITE

L’épilation par laser, utilisée depuis les années 1990, est sûre et a maintenant fait ses preuves
en améliorant le confort et la qualité de vie des patients. Il faut toutefois préciser que la diminution
de pilosité est rarement totale et définitive car le poil est sensible aux hormones et en fonction
du sexe, de l’âge, de la contraception, de la zone concernée… Les résultats pourront donc varier.

QU’EST-CE QU’UN POIL ?
Le poil prend naissance au fond du follicule pileux. Dans une même zone, tous les poils ne sont pas 
à la même phase de croissance ni implantés de manière homogène à la même profondeur. Ils suivent chacun
séparément ce que l’on appelle leur cycle pilaire et le laser ne pourra pas tous les détruire en une séance…

MECANISME D’ACTION :
L’énergie lumineuse, monochromatique des lasers, va être absorbée par la mélanine, transformée en chaleur au
niveau de cette cible et transmise le long de la tige pilaire jusqu’au fond du follicule pileux dans le but 
de le détruire sans endommager les autres structures de la peau. Seuls les poils en phase de croissance sont
détruits par le laser, ce qui explique que plusieurs séances seront nécessaires pour obtenir un résultat 
satisfaisant d'épilation longue durée.

MODALITES DE TRAITEMENT :
Le patient porte des lunettes de protection oculaire. L'impulsion lumineuse procure une sensation
de picotement, de coup d'élastique ou de brûlure très brève. Cette sensation douloureuse est atténuée
par l'application d'un souffle froid continu (Zimmer).

EN PRATIQUE :
Les poils blancs ne peuvent pas être traités (pas de cible mélanique) et l'effet sur les poils clairs ou roux
reste médiocre. A l'opposé, les patients bronzés, métissés ou noirs nécessitent un laser différent (Nd:YAG).

Pour toutes les zones:
Le traitement d'attaque comprendra 8 à 10 séances et sera suivi selon les cas d'un traitement d'entretien
plus espacé. A noter qu'il faut plus de séances à 20 ans qu'il n'en faut à 40 ans, pour le même résultat.
Les femmes présentent un excès d'hormones masculines (hyperandrogénie) auront un résultat d'épilation moins 
satisfaisant, a fortiori si ceci n'a pas été dépisté et traité. La prise de contraceptifs progestatifs peut 
réduire l'efficacité du laser, notamment sur la zone du maillot.

Pour le visage:
Le poil est plus sensible aux hormones, plus difficile à traiter, il faut au moins une dizaine de séances
espacées d'un mois, et des séances d'entretien à un rythme variable, par la suite. Il existe un risque de 
stimulation du poil (repousse paradoxale).

Pour le corps:
Les résultats sont variables selon les zones. Les séances sont espacées de 2 mois. Dans notre expérience, 
environ 80% des poils sont détruits après 8 à 10 séances.
Pour les hommes, notre expérience montre que l'épilation nécessite au minimum une dizaine de séances à 2 mois
d'intervalle et nécessite ensuite des séances d'entretien, tous les 4 à 6 mois environ.

CONSIGNES:
·Au moins 1 MOIS avant la séance :
  - Signaler toute prise médicamenteuse ou de complément alimentaire (en particulier les médicaments
    photosensibilisants ou contenant de la bêta-carotène, contre-indiqués)
  - Ne pas être bronzé (même légèrement), compter minimum 1 mois pour débronzer après la dernière exposition.
    Ne pas faire d'UV, ne pas appliquer d'auto-bronzant.
  - Ne pas être épilé à la cire, à l'épilateur électrique ou à la pince, au moins 1 mois avant la
    première séance et pendant toute la suite du traitement. Entre les séances, vous pouvez raser ou 
    couper les poils ou utiliser des crèmes épilatoires si besoin.
·De 1 à 15 jours avant la séance:
  - Raser ou couper les poils sur la zone concernée la veille de votre première séance puis en fonction
    de repousse, quelques jours à 2 semaines avant, pour permettre une émergence de 2 mm le jour de
    votre laser.
·Le jour J:
  - Ne pas mettre de déodorant le jour du laser.
  - Mettre la crème anesthésiante 2h avant, si besoin. Cette dernière n'est pas remboursée pour les actes
    non remboursés.
· Après la séance:
  - Appliquer une crème hydratante ou cicatrisante pendant 2 à 3 jours
  - Eviter l'exposition solaire/ le déodorant/ la piscine tant que les rougeurs post-laser persistent.

CONTRE-INDICATIONS :
- Peau bronzée, peaux foncées.
- Le duvet (risque de stimulation paradoxale)
- La grossesse n'est pas en soi une contre-indication, le traitement sera discuté au cas par cas.
- La phobie des poils (l'efficacité étant variable et pouvant laisser parfois quelques fins poils clairs)
- Les patients atteints de vitiligo dont la maladie peut s'aggraver.

EFFETS SECONDAIRES :
Fréquents et de courte durée (quelques heures à quelques jours):
·Oedème avec aspect de piqures d'orties
·Rougeurs et irritations
Rares:
·Tâches brunes ou claires transitoires (quelques mois)
·Eczéma, (allergie à la crème anesthésiante...) ou urticaire
·Petits troubles vasculaires sans gravité (livédo, ecchymoses, thrombose de varicosités)
·Folliculite (inflammation du poil)
·Croûtes et petites cloques, cicatrices définitives exceptionnelles
·Modification de la sudation
·L’hypertrichose paradoxale est l’apparition de poils fins sur la zone traitée par laser épilatoire ou
 en périphérie de la zone traitée. C’est un effet indésirable rare survenant le plus souvent au niveau
 du visage chez des patientes à peau mate et avec une instabilité hormonale. Il est aléatoire, nécessite
 plus de séances (souvent plus de 20) qui seront alors à la charge du patient.  

LA CONSULTATION D'INFORMATION :
La consultation donne des explications claires sur les résultats escomptés, les effets secondaires et les
complications possibles. Elle est indispensable car permettant d'apporter des précisions sur le traitement
au cas par cas. Elle constitue en soi un acte médical. Les prix sont essentiellement en fonction de la surface
à traiter; ils feront l'objet d'un devis établi par le dermatologue. Un formulaire de consentement éclairé
doit également être signé en deux exemplaires. Une possibilité de prise en charge par la sécurité sociale est 
possible uniquement dans certains cas (hirsutisme) et pour des zones définies.
`;

export function Epilation() {
  return (
    <TabItem
      content={
        <>
          <Typography>
            Notre cabinet est équipé du laser{" "}
            <strong>Alexandrite Candela Gentle Lase Pro-U</strong> avec système
            de refroidissement <strong>Zimmer</strong>.
            <br />
            Il est adapté aux poils foncés sur peaux claires.
            <br />
            Une première consultation d'information est nécessaire avant la mise
            en place des séances ; elle se fait avec une assistante médicale et
            un médecin.
            <br />
            Les traitements laser sont systématiquement paramétrés par le
            médecin qui effectue à cette occasion un contrôle physique de la
            repousse des poils. Ils sont ensuite réalisés par l'assistante sous
            supervision médicale.
          </Typography>

          {/* <ul>
                <li>Fiche information (version mars 2023)</li>
                <li>Grille de tarif femme</li>
                <li>Grille de tarif homme</li>
          </ul> */}
          <h4>Grille de tarifs femme</h4>
          <PricesWomen></PricesWomen>
          <h4>Grille de tarifs homme</h4>
          <PricesMen></PricesMen>

          <pre>{info}</pre>
        </>
      }
    ></TabItem>
  );
}

export default Epilation;
