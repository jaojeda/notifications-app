import { useEffect, useState } from "react";
import { Notification } from "./components/Notifications";

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
      <Notification
        id={notifications[0]?.id}
        title={notifications[0]?.title}
        content={notifications[0]?.content}
      ></Notification>
    </div>
  );
}

export default App;
