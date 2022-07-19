import { useEffect, useState } from "react";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await fetch("http://localhost:3200/notifications");
      const data = await res.json();
      const filteredData = filterSnoozed(data);
      setNotifications(filteredData);
    };

    fetchNotifications().catch(console.error);
  }, []);

  const filterSnoozed = (notifications) => {
    return notifications.filter(
      (notification) => notification.snooze.lastSnooze + 86400000 < Date.now()
    );
  };

  return { notifications };
};
