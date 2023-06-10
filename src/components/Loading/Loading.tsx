import { Typography } from "@material-tailwind/react";
 
function Loading() {

  return (
    <div className="sweet-loading flex justify-center h-screen items-center bg-neutral">
     <div>
     <Typography className="mr-4 text-center text-4xl font-bold text-warning">
        To-Leet
      </Typography>
      <Typography className="mr-4 cursor-pointer text-warning text-xl font-semibold">
      The Ultimate Rental Solution
      </Typography>
     </div>
    </div>
  );
}

export default Loading;
