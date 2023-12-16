import { Audio } from "expo-av";

export const sound = async (option) => {

  const { sound } = await Audio.Sound.createAsync(
    option ===  1 ? require("../../assets/click_effect-86995.mp3") : require("../../assets/mixkit-arcade-game-jump-coin-216.wav")
    );
    await sound.playAsync();
  
};
