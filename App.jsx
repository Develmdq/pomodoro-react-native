import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Header, Timer } from "./src/components";
import { Container, BtnStart, BtnText } from "./src/styles/styledComponents";
import { sound } from "./src/utils/sound";

const App = () => {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [lastMinute, setLastMinute] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (time < 60 && time >= 31) {      
      setLastMinute(1);
    } else if (time <= 30) {
      sound(2);
      setLastMinute(2);
    }

    if (time === 0) {
      setIsActive(false);
      setIsWorking((prev) => !prev);
      setTime(isWorking ? 1500 : 300);
      setLastMinute(0);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStartStop = () => {
    setIsActive(!isActive);
    sound(1);
  };

  return (
    <Container bg={currentTime}>
      <StatusBar />
      <Header
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        setTime={setTime}
      />
      <Timer time={time} lastMinute={lastMinute} />
      <BtnStart>
        <BtnText onPress={() => handleStartStop()}>
          {isActive ? "PAUSAR" : "INICIAR"}
        </BtnText>
      </BtnStart>
    </Container>
  );
};

export default App;
