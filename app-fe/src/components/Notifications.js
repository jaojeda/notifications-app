import React, { useRef } from "react";
import PropTypes from "prop-types";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";

export const Notification = ({
  id,
  title,
  content,
  handleSnooze,
  handleDelete,
}) => {
  const detailsRef = useRef(null);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${id}a-content`}
        id={`panel${id}a-header`}
      >
        <IconButton size="small" onClick={() => handleSnooze(id)}>
          <AlarmIcon />
        </IconButton>
        <Typography sx={{ padding: "5px" }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails ref={detailsRef}>
        <Typography>{content}</Typography>
        <Fab
          sx={{
            position: "relative",
            left: detailsRef?.current?.clientWidth - 100,
          }}
          onClick={() => handleDelete(id)}
        >
          <DeleteIcon />
        </Fab>
      </AccordionDetails>
    </Accordion>
  );
};

const Notifications = ({ notifications, handleSnooze, handleDelete }) => {
  const notificationsElements = notifications.map((notification) => (
    <Notification
      key={`${notification.id}-${notification.title}`}
      handleSnooze={handleSnooze}
      handleDelete={handleDelete}
      {...notification}
    />
  ));

  return <>{notificationsElements}</>;
};

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleSnooze: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Notifications;
