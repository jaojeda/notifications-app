import Container from "@mui/material/Container";
import Notifications from "./components/Notifications";
import { useNotifications } from "./hooks/useNotifications";

function App() {
  const { notifications, handleSnooze } = useNotifications();

  return (
    <div className="App">
      <Container maxWidth="md">
        <Notifications
          notifications={notifications}
          handleSnooze={handleSnooze}
        ></Notifications>
      </Container>
    </div>
  );
}

export default App;
