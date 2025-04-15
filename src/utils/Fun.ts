
export const Polling = () => {
    const loop = () => {
      setTimeout(() => {
        console.log("🔁   silently...");
        loop(); 
      }, 10000); // 10 seconds delay
    };
    loop();
  };
  