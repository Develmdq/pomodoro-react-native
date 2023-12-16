import { TimerContainer, TimerText } from "../styles/styledComponents";

const COLOR = {
  0: "#4000ae",
  1: "#d8c200",
  2: "#ff0000",
};

const Timer = ({ time, lastMinute }) => {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;  
  
  return (
    <TimerContainer>
      <TimerText color={COLOR[lastMinute]}>{formattedTime}</TimerText>
    </TimerContainer>
  );
};

export default Timer;
