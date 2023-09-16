import { useContext } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { StateContext } from "@/Context/StateContext/StateContext";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { RootState } from "@/redux/app/store";

export default function UniversityTyFilterModal() {
  const {
    universityTypeFilter,
    setUniversityTypeFilter,
    setStoreUniFilterValue,
    handleUniversityTypeFilterModal,
  }: any = useContext(StateContext);

  const router = useRouter();
  const params = router.asPath;
  const refreshParams = params.split("/");
  const encodedName = refreshParams[2];
  const decodedName = decodeURIComponent(encodedName);
  const { filterPost } = useSelector((state: RootState) => state["qv-uv"]);
  const lang = useSelector((state: any) => state.language.language);

  const handleCancel = (e: any) => {
    if (e || e === undefined) {
      setStoreUniFilterValue("");
      setUniversityTypeFilter(false);
    }
  };
  return (
    <div>
      <Dialog
        open={universityTypeFilter}
        handler={handleUniversityTypeFilterModal}
        className="rounded px-auto"
        animate={{
          mount: { scale: 1, y: -80 },
          unmount: { scale: 1, y: -100 },
        }}
      >
        <DialogBody className="-mt-20 lg:mt-0 text-xs bg-white rounded flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-6">
            <div>
              <Link
                onClick={() => handleCancel(undefined)}
                href={`/beside-institute/${decodedName}`}
                className={
                  refreshParams[3] === undefined
                    ? "bg-warning text-primary  border border-warning py-1"
                    : "bg-transparent text-gray-800  border border-warning  py-1"
                }
              >
                {" "}
                {!lang ? (
                  <span className="rounded-sm text-center px-10">Total: {filterPost?.length}</span>
                ) : (
                  <span className="rounded-sm text-center px-8">
                    মোটঃ{" "}
                    {filterPost?.length > 0 &&
                      filterPost?.length
                        .toString()
                        .replace(/0/g, "০")
                        .replace(/1/g, "১")
                        .replace(/2/g, "২")
                        .replace(/3/g, "৩")
                        .replace(/4/g, "৪")
                        .replace(/5/g, "৫")
                        .replace(/6/g, "৬")
                        .replace(/7/g, "৭")
                        .replace(/8/g, "৮")
                        .replace(/9/g, "৯")}
                  </span>
                )}{" "}
              </Link>
            </div>
            <div className=" ">
              <Link
                onClick={() => handleCancel("Bachelor-(Male)")}
                href={`/beside-institute/${decodedName}/Bachelor-(Male)`}
                className={
                  refreshParams[3] === "Bachelor-(Male)"
                    ? "bg-warning text-primary  border border-warning py-1"
                    : "bg-transparent text-gray-800  border border-warning  py-1"
                }
              >
                {" "}
                {!lang ? <span className="rounded-sm text-center px-4">Bachelor (Male)</span> : <span className="rounded-sm text-center px-4">ব্যাচেলর (ছেলে)</span> }{" "}
              </Link>
            </div>
            <div className="">
              <Link
                onClick={() => handleCancel("Bachelor-(Female)")}
                href={`/beside-institute/${decodedName}/Bachelor-(Female)`}
                className={
                  refreshParams[3] === "Bachelor-(Female)"
                    ? "bg-warning text-primary  border border-warning py-1"
                    : "bg-transparent text-gray-800  border border-warning py-1 "
                }
              >
                {" "}
                {!lang ? <span className="rounded-sm text-center px-[14px] ">Bachelor (Female)</span> : <span className="rounded-sm text-center px-[18px] ">ব্যাচেলর (মেয়ে)</span> }{" "}
              </Link>
            </div>
            <div>
              <Link
                onClick={() => handleCancel("Mess-(Male)")}
                href={`/beside-institute/${decodedName}/Mess-(Male)`}
                className={
                  refreshParams[3] === "Mess-(Male)"
                    ? "bg-warning text-primary  border border-warning py-1"
                    : "bg-transparent text-gray-800  border border-warning  py-1"
                }
              >
                {" "}
                {!lang ? <span className="rounded-sm text-center px-[25.5px] ">Mess (Male)</span> : <span className="rounded-sm text-center px-[25.5px] ">মেস (ছেলে)</span> }{" "}
              </Link>
            </div>
            <div className="">
              <Link
                onClick={() => handleCancel("Mess-(Female)")}
                href={`/beside-institute/${decodedName}/Mess-(Female)`}
                className={
                  refreshParams[3] === "Mess-(Female)"
                    ? "bg-warning text-primary  border border-warning py-1"
                    : "bg-transparent text-gray-800  border border-warning py-1"
                }
              >
                {" "}
                {!lang ? <span className="rounded-sm text-center px-[23.4px] ">Mess (Female)</span> : <span className="rounded-sm text-center px-[28px] ">মেস (মেয়ে)</span> }{" "}
              </Link>
            </div>
            <div className="">
              <Link
                onClick={() => handleCancel("Sublet-(Male)")}
                href={`/beside-institute/${decodedName}/Sublet-(Male)`}
                className={
                  refreshParams[3] === "Sublet-(Male)"
                    ? "bg-warning text-primary  border border-warning py-1"
                    : "bg-transparent text-gray-800  border border-warning  py-1"
                }
              >
                {" "}
                {!lang ? <span  className="rounded-sm text-center px-[23.4px]"> Sublet (Male)</span> : <span className="rounded-sm text-center px-[16.9px]">সাবলেট (ছেলে)</span> }{" "}
              </Link>
            </div>
            <div className="">
              <Link
                onClick={() => handleCancel("Sublet-(Female)")}
                href={`/beside-institute/${decodedName}/Sublet-(Female)`}
                className={
                  refreshParams[3] === "Sublet-(Female)"
                    ? "bg-warning text-primary  border border-warning py-1"
                    : "bg-transparent text-gray-800  border border-warning  py-1"
                }
              >
                {" "}
                {!lang ? <span className="rounded-sm text-center px-[21px] ">Sublet (Female)</span> : <span className="rounded-sm text-center px-[19px] ">সাবলেট (মেয়ে)</span> }{" "}
              </Link>
            </div>
            <div className="">
              <Link
                onClick={() => handleCancel("Family")}
                href={`/beside-institute/${decodedName}/Family`}
                className={
                  refreshParams[3] === "Family"
                    ? "bg-warning text-primary  border border-warning py-1"
                    : "bg-transparent text-gray-800  border border-warning  py-1"
                }
              >
                {" "}
                {!lang ? <span className="rounded-sm text-center px-[42px] ">Family</span> : <span className="rounded-sm text-center px-[36.5px] "> পরিবার</span> }
              </Link>
            </div>
          </div>
        </DialogBody>

        <DialogFooter className=" lg:flex">
          <Button
            variant="text"
            color="red"
            onClick={handleCancel}
            className="mr-1"
          >
            {!lang ? <span>Cancel</span> : <span>বাতিল</span>}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
