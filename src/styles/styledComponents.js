import styled from "styled-components/native";

const BG_COLORS = {
  0: "#F7DC6F",
  1: "#A2D9CE",
  2: "#D7BDE2",
  3: "#333",
  4: "#ff0000",
  5: "#4000ae",
};
const fontSizes = {
  caption: "12px",
  button: "14px",
  body: "17px",
  label: "16px",
  title: "30px",
};

export const Container = styled.SafeAreaView`
  background-color: ${({ bg }) => BG_COLORS[bg]};
  flex: 1;
`;

export const HeaderContainer = styled.View`
  padding-top: ${Platform.OS === "android" && "30px"};
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${fontSizes.caption};
  padding: 10px;
`;

export const ImgLogo = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Title = styled.Text`
  font-size: ${fontSizes.title};
  text-shadow: 1px 2px 5px;
  color: #7a7a7a;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ItemBtn = styled.TouchableOpacity`
  border: 2px solid #f9f9f9;
  border-radius: 5px;
  background-color: #424242;
`;

export const ItemText = styled.Text`
  padding: 6px;
  font-size: ${fontSizes.label};
  color: #ffffff;
  font-weight: bold;
`;

export const TimerContainer = styled.View`
  background-color: #f2f2f2;
  border-radius: 10px;
  flex: 0.35;
  align-items: center;
  justify-content: center;
  width: 90%;
  align-self: center;
`;

export const TimerText = styled.Text`
  font-size: 80px;
  text-shadow: 2px 2px 1px rgba(88, 88, 88, 0.657);
  font-weight: bold;
  color: ${({ color }) => color};
`;

export const BtnStart = styled.TouchableOpacity`
  background-color: #333;
  width: 90%;
  border-radius: 10px;
  align-self: center;
  margin: 20px;
  padding: 10px;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
`;
