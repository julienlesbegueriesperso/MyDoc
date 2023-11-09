import { Box, Paper } from "@mui/material";
import { ReactNode } from "react";

export interface TabItemProps {
  content: ReactNode;
}

export function TabItem(props: TabItemProps) {
  const { content } = props;
  return (
    <Box sx={{ margin: 2, overflow: "auto" }}>
      <Paper elevation={5}>
        <Box sx={{ margin: 2, overflow: "auto" }} height="48vh">
          {content}
        </Box>
      </Paper>
    </Box>
  );
}

export default TabItem;
