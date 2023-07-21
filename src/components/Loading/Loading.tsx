import { Typography } from "@material-tailwind/react";
import { TypeAnimation } from "react-type-animation";

function Loading() {
  return (
    <div className="sweet-loading flex justify-center h-screen items-center bg-neutral">
      <div>
        <Typography className="mr-4 text-center text-4xl font-bold text-warning">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "QuickVara",
              10, // wait 1s before replacing "Mice" with "Hamsters"
              "QuickVara",
              10,
            ]}
            repeat={2}
          />
        </Typography>
        {/* <Typography className="mr-4 cursor-pointer text-warning text-xl font-semibold">
        <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "The Ultimate Rental Solution",
              10, // wait 1s before replacing "Mice" with "Hamsters"
              "The Ultimate Rental Solution",
              10,
            ]}
            repeat={2}
          />
        </Typography> */}
      </div>
    </div>
  );
}

export default Loading;
