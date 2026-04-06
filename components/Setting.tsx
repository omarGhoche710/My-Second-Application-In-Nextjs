import React from "react";

const Setting = async () => {
  const res = await fetch("http://localhost:3000/settings.json");
  const settings = await res.json();

  return (
    <div>
      <h1>{settings.theme}</h1>
    </div>
  );
};

export default Setting;
