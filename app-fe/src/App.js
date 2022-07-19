import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await fetch("http://localhost:3200/notifications");
      const data = await res.json();
      console.log(data);
    };

    fetchNotifications().catch(console.error);
  }, []);

  return <div className="App">Hello World</div>;
}

export default App;
