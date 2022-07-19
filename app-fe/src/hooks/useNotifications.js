import { useEffect, useState } from "react";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await fetch("http://localhost:3200/notifications");
      const data = await res.json();
      setNotifications(data);
    };

    fetchNotifications().catch(console.error);
  }, []);

  return { notifications };
};
