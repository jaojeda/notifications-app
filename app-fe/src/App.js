import Container from "@mui/material/Container";
import Notifications from "./components/Notifications";
import { useNotifications } from "./hooks/useNotifications";

function App() {
  const { notifications, handleSnooze, handleDelete } = useNotifications();

  return (
    <div className="App">
      <Container maxWidth="md">
        <Notifications
          notifications={notifications}
          handleSnooze={handleSnooze}
          handleDelete={handleDelete}
        ></Notifications>
      </Container>
    </div>
  );
}

export default App;
