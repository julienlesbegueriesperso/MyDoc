import { Paper } from '@mui/material'
import  MentionsLegales  from './mentionslegales.md'

export default function Mentions(props) {
    return (
      <Paper elevation={0} sx={{maxWidth:"800pt", margin: '15pt', padding: '5pt'}}>
        <MentionsLegales/>
    </Paper>
    )
}
