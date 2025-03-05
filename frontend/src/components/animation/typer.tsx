import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Chat With ASK-EDU",
        1000,
        "Built With OpenAI ",
        1000,
        "Your Own Customized ChatGPT ",
        1000,
      ]}
      speed={40}
      style={{
        fontSize: "65px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 17px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;