"use client";
import React, { useState } from "react";

const JoinButton = () => {
  const [status, setStatus] = useState("Join");

  return (
    <button
      onClick={handleStatus}
      className={`
        inline-block text-white
        ${
          status === "Join"
            ? "bg-(--main-color) hover:shadow-[0_0_10px_0_var(--main-color)] transform hover:scale-110 cursor-pointer"
            : status === "Join..."
              ? "bg-red-400 cursor-not-allowed"
              : "bg-green-300 cursor-not-allowed"
        }
        px-4 py-2
        rounded-lg
        transition duration-300
      `}
      disabled={status !== "Join"}
    >
      {status}
    </button>
  );

  function response(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, 5000);
    });
  }

  async function handleStatus() {
    setStatus("Join...");

    try {
      await response();
      setStatus("Joined");
    } catch (e) {
      alert("Something went wrong");
      setStatus("Join");
    }
  }
};

export default JoinButton;
