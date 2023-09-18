import { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { StateContext } from "@/Context/StateContext/StateContext";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function FeedbackModal({
  feedbackValue,
  setFeedbackValue,
  reset,
}: any) {
  const { feedbackModal, setFeedbackModal, handleFeedbackModal }: any =
    useContext(StateContext);
  const [ratingValue, setRatingValue] = useState(0);
  const router = useRouter();
  const params = router.asPath;
  const refreshParams = params.split("/");
  const encodedName = refreshParams[2];
  const decodedName = decodeURIComponent(encodedName);

  const lang = useSelector((state: any) => state.language.language);

  const handleCancel = (e: any) => {
    setFeedbackModal(false);
  };

  const queryClient = useQueryClient(); // Obtain a reference to the query client outside the function

  const handleFeedbackPostWithRating = async () => {
    const nameForPost = {
      name: feedbackValue.name,
      address: feedbackValue.address,
      description: feedbackValue.description,
      rating: ratingValue,
    };

    try {
      const res = await fetch("http://localhost:5000/api/v1/feedback", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(nameForPost),
      });
      const result = await res.json();
      if (res?.ok) {
        toast.success(
          !lang
            ? "Thank you for your valuable opinion!"
            : "আপনার মতামতের জন্য ধন্যবাদ!"
        );
        queryClient.invalidateQueries(result); // Replace "posts" with the actual query key

        // Optionally, you can close the feedback modal here if needed
        setFeedbackModal(false);
        setFeedbackValue({});
        setRatingValue(0);
        reset();
      } else {
        // Handle the case where the POST request is not successful
        // You may want to show an error message to the user
        console.error("Failed to post feedback");
      }
    } catch (error) {
      // Handle any other errors here
      console.error("An error occurred while posting feedback", error);
    }
  };

  return (
    <div>
      <Dialog
        open={feedbackModal}
        handler={handleFeedbackModal}
        className="rounded px-auto"
        animate={{
          mount: { scale: 1, y: -80 },
          unmount: { scale: 1, y: -100 },
        }}
      >
        <DialogBody className="-mt-20 lg:mt-0 text-xs bg-white rounded flex justify-center">
          <div>
            <h1 className="text-2xl mb-5"> Rating now</h1>
            <div className="rating rating-lg">
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
                onClick={() => setRatingValue(1)}
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
                onClick={() => setRatingValue(2)}
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
                onClick={() => setRatingValue(3)}
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
                onClick={() => setRatingValue(4)}
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
                onClick={() => setRatingValue(5)}
              />
            </div>
          </div>
        </DialogBody>

        <DialogFooter className="lg:flex">
          <Button
            variant="text"
            onClick={handleFeedbackPostWithRating}
            className="mr-1 bg-gradient-to-r from-accent to-warning text-primary"
          >
            {!lang ? <span>Confirm</span> : <span>নিশ্চিত করুন</span>}
          </Button>
          <Button
            variant="text"
            color="red"
            onClick={handleCancel}
            className="mr-1"
          >
            {!lang ? <span>Remind me later</span> : <span>পরে মনে করুন</span>}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
