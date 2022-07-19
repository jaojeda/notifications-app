import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Notifications from "./components/Notifications";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await fetch("http://localhost:3200/notifications");
      const data = await res.json();
      setNotifications(data);
    };

    fetchNotifications().catch(console.error);
  }, []);

  return (
    <div className="App">
      <Container maxWidth="md">
        <Notifications notifications={notifications}></Notifications>
      </Container>
    </div>
  );
}

export default App;
