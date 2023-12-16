import {
  HeaderContainer,
  LogoContainer,
  ImgLogo,
  Title,
  OptionsContainer,
  ItemBtn,
  ItemText,
} from "../styles/styledComponents";
import * as Animatable from "react-native-animatable";

const options = ["Pomodoro", "Long Break", "Short Break"];

const Header = ({ currentTime, setCurrentTime, setTime }) => {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 15 : 5;
    setTime(newTime*60);
    setCurrentTime(index);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Animatable.View
          animation="slideInLeft"
          easing="ease-in"
          duration={1500}
        >
          <ImgLogo source={require("../../assets/icon-96.png")} />
        </Animatable.View>
        <Animatable.Text
          animation="slideInRight"
          easing="ease-in"
          duration={1200}
        >
          <Title>POMODORO APP</Title>
        </Animatable.Text>
      </LogoContainer>
      <OptionsContainer>
        {options.map((text, index) => (
          <ItemBtn
            key={index}
            style={
              currentTime !== index && {
                borderColor: "#ffffff3c",
                backgroundColor: "#a7a7a796",
              }
            }
            onPress={() => handlePress(index)}
          >
            <ItemText>{text}</ItemText>
          </ItemBtn>
        ))}
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
