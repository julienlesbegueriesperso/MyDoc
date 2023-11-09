import { Box, Typography } from "@mui/material";
import TabItem from "./TabItem";

export function CDM() {
  return (
    <TabItem content={<>
            <Typography>
              Le Dr Marie CAUCANAS et le Dr Laureline LEGENDRE sont en
              partenariat avec la clinique des Minimes. 
              <br/>
              Elles répondent aux
              demandes d'avis des médecins de la Clinique pour les patients
              hospitalisés. 
              <br/>
              Elles peuvent proposer une prescription médicale
              étendue (médicaments hospitaliers).
            </Typography>
            {/* </Grid> */}
            {/* <Grid item xs={2}> */}
            <Box sx={{float:'right', right:'20pt'}}>
                <img width={75} height={110} src='/logo_cdm.png' alt='logo cdm'></img>
            </Box>
           </>
    }></TabItem>
  );
}

export default CDM;
