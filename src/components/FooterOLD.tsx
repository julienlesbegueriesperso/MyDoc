import { Box, Divider, Typography } from "@mui/material"


export function Footer() {
    return (
        <div style={{width:'100vw', height:'5vh', position:'absolute', bottom:0}}>
        <div className="footer">
            <Divider/>
                <Box height={40} display={'flex'} width={'80%'} marginLeft={5}>
                {/* https://entreprendre.service-public.fr/vosdroits/F31228/personnalisation/resultat?lang=&quest0=1&quest= */}
                    <Typography sx={{flex: 1}}>CGV</Typography>
                    <Typography sx={{flex: 1}}>Site Web de la SELARL Caucanas-Legendre</Typography>
                    <Typography sx={{flex: 1}}>Copyright©</Typography>
                    {/* <Typography>Taille fenêtre {window.innerWidth} x {window.innerHeight}</Typography> */}
                    <Typography sx={{flex: 1.2}}>Cabinet affilié à la &nbsp;
                        <a href="https://www.clinique-minimes.fr/">Clinique des Minimes 
                        <img width="95px" height="150px" src="/logo_cdm.png" alt="logo dermatologie minimes" /></a>
                    </Typography>
                </Box>
            
        </div>
        </div>
    )
}

export default Footer