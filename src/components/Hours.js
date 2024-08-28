import React, { useEffect, useState } from "react";

const Hours = () => {
  // Datos de los horarios del refugio
  const shelterHours = [
    { day: "Monday", open: "10:00", close: "16:00" },
    { day: "Tuesday", open: "10:00", close: "16:00" },
    { day: "Wednesday", open: "10:00", close: "16:00" },
    { day: "Thursday", open: "10:00", close: "16:00" },
    { day: "Friday", open: "10:00", close: "16:00" },
    { day: "Saturday", open: "09:00", close: "20:00" },
    { day: "Sunday", open: "09:00", close: "20:00" },
  ];

  // Estado para guardar el día actual y horas
  const [todayHours, setTodayHours] = useState(null);

  useEffect(() => {
    // Obtén el nombre del día actual en formato largo
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

    // Encuentra los horarios de hoy
    const hours = shelterHours.find((day) => day.day === today);

    // Establece el estado con los horarios de hoy
    setTodayHours(hours);
  }, []); // Este efecto solo se ejecuta en el montaje del componente

  // Muestra un mensaje de carga si los horarios aún no se han establecido
  if (!todayHours) {
    return <div id="hours">Loading...</div>;
  }

  return (
    <div id="hours">
      <h2>Today's Hours</h2>
      <p>
        {todayHours.day}: {todayHours.open} - {todayHours.close}
      </p>
    </div>
  );
};

export default Hours;
