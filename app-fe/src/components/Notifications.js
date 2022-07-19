import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";

export const Notification = ({ id, title, content }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${id}a-content`}
        id={`panel${id}a-header`}
      >
        <IconButton size="small">
          <AlarmIcon />
        </IconButton>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
        <Fab>
          <DeleteIcon />
        </Fab>
      </AccordionDetails>
    </Accordion>
  );
};
