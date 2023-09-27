import { decryptTransform } from "@/Encrypt/EncryptionTransform";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";

const Setting = () => {
  const lang = useSelector((state: any) => state.language.language);
  const firstName = decryptTransform(Cookies.get("qv-fn"));
  const lastName = decryptTransform(Cookies.get("qv-ln"));
  const email = decryptTransform(Cookies.get("qv-acn"));
  let getNumber;
  let checkAuthentication;
  if (email) {
    if (!isNaN(parseInt(email))) {
      getNumber = email;
    } else if (email.includes("@") && email.includes(".")) {
      checkAuthentication = email;
    }
  }
  const router = useRouter();
  const handleLogOut = () => {
    Cookies.remove("qv-tn");
    Cookies.remove("qv-fn");
    Cookies.remove("qv-ln");
    Cookies.remove("qv-acn");
    Cookies.remove("city");
    Cookies.remove("area");
    Cookies.remove("district");
    Cookies.remove("division");
    Cookies.remove("filterMV");
    Cookies.remove("openMV");
    Cookies.remove("next-auth.session-token");
    sessionStorage.removeItem("page");
    sessionStorage.removeItem("paged");
    sessionStorage.removeItem("pageU");
    sessionStorage.removeItem("pageF");
    sessionStorage.removeItem("pageFT");
    sessionStorage.removeItem("persist");
    sessionStorage.removeItem("qv-ap");
    sessionStorage.removeItem("qv-utf");
    router.push("/");
  };
  const handleDelete = async (email: any) => {
    const willDelete = await swal({
      title: !lang ? "Are you sure?" : "আপনি কি নিশ্চিত?",
      text: !lang
        ? "Are you sure that you want to delete your account?"
        : "আপনি কি নিশ্চিত যে আপনি আপনার অ্যাকাউন্ট মুছে ফেলতে চান?",
      icon: "warning",
      dangerMode: true,
    });

    if (willDelete) {
      try {
        const res = await fetch(`https://zsqur.quickvara.com/api/v1/users/${email}`, {
          method: "DELETE",
        });
        const data = await res.json();

        if (data?.message === "success") {
          handleLogOut()
        }
        swal(
          !lang
            ? "Deleted! Your account has been deleted!"
            : "আপনার অ্যাকাউন্ট মুছে ফেলা হয়েছে।"
        );
      } catch (error) {
        swal(
          "Error",
          "An error occurred while deleting your account.",
          "error"
        );
      }
    }
  };

 
 
  return (
    <>
      <div>
        <div className="pl-10 pt-8">
          <h2 className="">
            {!lang ? <span>Full Name </span> : <span> পূর্ণ নাম </span>}
            <h2 className="text-2xl py-2">
              {firstName} {lastName}
            </h2>
          </h2>
          <div>
            {getNumber && (
              <>
                {!lang ? <span>Phone Number</span> : <span> ফোন নাম্বার </span>}
                <span className="text-2xl">
                  {" "}
                  {getNumber && <h2 className="text-2xl py-2">+{getNumber}</h2>}
                </span>
              </>
            )}
          </div>
          <div>
            {checkAuthentication && (
              <>
                {!lang ? <span> Email </span> : <span> ইমেইল </span>}
                {checkAuthentication && (
                  <h2 className="text-2xl py-2">{checkAuthentication}</h2>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex justify-start gap-5 md:gap-20">
        {!lang ? (
          <button
            onClick={() => handleDelete(email)}
            className="btn btn-warning flex justify-end ml-10"
          >
            Delete Account
          </button>
        ) : (
          <button
            onClick={() => handleDelete(email)}
            className="btn btn-warning flex justify-end ml-10"
          >
            অ্যাকাউন্ট মুছে ফেলুন।
          </button>
        )}
        {!lang ? (
          <button onClick={handleLogOut} className="btn btn-accent">
            Logout
          </button>
        ) : (
          <button onClick={handleLogOut} className="btn btn-accent">
            লগআউট
          </button>
        )}
      </div>
    </>
  );
};

export default Setting;
