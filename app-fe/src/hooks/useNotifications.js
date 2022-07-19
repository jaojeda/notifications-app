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

  const handleSnooze = async (id) => {
    const res = await fetch(`http://localhost:3200/notifications/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ snoozed: true, lastSnooze: Date.now() }),
    }).catch(console.error);
    const data = await res.json();
    const filteredData = filterSnoozed(data);
    setNotifications(filteredData);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3200/notifications/${id}`, {
      method: "DELETE",
    }).catch(console.error);
    const data = await res.json();
    const filteredData = filterSnoozed(data);
    setNotifications(filteredData);
  };

  return { notifications, handleSnooze, handleDelete };
};
