/* eslint-disable @next/next/no-img-element */
import { decryptFunction } from "@/Encrypt/DecryptFunction/DecryptFunction";
import { decryptTransform } from "@/Encrypt/EncryptionTransform";
import { useUserData } from "@/components/API/Api";
import { AppDispatch, RootState } from "@/redux/app/store";
import { sendMessage } from "@/redux/features/Messages/SendMessage/SendMessageSlice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { format } from "timeago.js";
import PrivateRoute from "@/routes/privateRoute";
import MessageForPhone from "@/components/MessageForPhone/MessageForPhone";
import { BiPhotoAlbum } from "react-icons/bi";
import { RiAccountBoxFill } from "react-icons/ri";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const socket = io("https://zsqur.quickvara.com");

interface Product {
  img1: string;
  title: string;
}
const ContactByMessage = () => {
  const lang = useSelector((state: any) => state.language.language);
  const firstName = decryptTransform(Cookies.get("qv-fn"));
  const lastName = decryptTransform(Cookies.get("qv-ln"));
  const email = decryptTransform(Cookies.get("qv-acn"));
  const fullName = firstName + " " + lastName;
  const formRef = useRef<HTMLFormElement | null>(null);
  const messageContainerRef = useRef<HTMLDivElement | null>(null);
  const [imgUrl, setImgUrl] = useState("");
  const [getName, setGetName] = useState("");
  const [authorEmail, setAuthorEmail] = useState<string | number>("");

  const [productId, setProductId] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const { data, isLoading: loading }: any = useQuery(["message"], async () => {
    const response = await axios.get(
      `https://zsqur.quickvara.com/api/v1/messages/allMessages`
    );
    return response.data;
  });

  const [showUser, setShowUser] = useState(null);
  useEffect(() => {
    if (data && email) {
      const found = data.some(
        (user: any) =>
          user?.receiverEmail === email || user?.senderEmail === email
      );
      setShowUser(found);
    }
  }, [data, email]);

  

  useEffect(() => {
    socket.on("connect", () => {
      // Connection is established; now emit "set-email"
      socket.emit("set-email", authorEmail);
    });
    const receivedMessageHandler = (message: any) => {
      setMessages((prevMessages: any) => [...prevMessages, message]);
    };
    socket.on("received-message", receivedMessageHandler);
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      socket.off("received-message", receivedMessageHandler);
    };
  }, [authorEmail, setMessages]);
  const dispatch: AppDispatch = useDispatch();

  const { isLoading } = useQuery(
    ["message", authorEmail, email],
    async () => {
      const response = await axios.get(
        `https://zsqur.quickvara.com/api/v1/messages?receiverEmail=${authorEmail}&senderEmail=${email}`
      );
      const decryptedData = decryptFunction(response.data); // Decrypt the data
      const data = JSON.parse(decryptedData);
      return data;
    },
    {
      onSuccess: (data) => {
        setMessages(data); // Update the state with fetched data
        socket.emit("set-email", authorEmail);
      },
    }
  );

  // message post
  const [getConversationId, setGetConversationId] = useState("");
  const { data: userCounter } = useUserData();

  useEffect(() => {
    userCounter?.forEach((userId: any) => {
      if (userId?.email === authorEmail) {
        setGetConversationId(userId?._id);
      }
    });
  }, [authorEmail, userCounter]);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const imageUploadHandler = (event: any, setImg: any) => {
    const imageData = new FormData();
    imageData.set("key", "49a57cce0acfac6a6e93d404f46d3e5a");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImg(response?.data?.data?.display_url);
      })
      .catch(function (error) {});
  };
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage && !imgUrl) return;
    const messagesData = {
      conversationId: getConversationId,
      productId: productId,
      message: newMessage,
      userName: fullName,
      senderEmail: email,
      receiverEmail: authorEmail,
      photo: imgUrl,
    };

    try {
      // Dispatch the sendMessage action
      // socket.emit("send-message", messagesData);
      const resultAction = await dispatch(sendMessage(messagesData));

      // Handle the resultAction if needed
      if (sendMessage.fulfilled.match(resultAction)) {
        // Handle success
        const receiverEmail = resultAction.payload;
        // Do something with receiverEmail
        // setGetReceiverEmail(receiverEmail.toString());
        if (formRef.current) {
          formRef.current.reset();
          setNewMessage("");
          setImgUrl("");
        }
      } else {}

      // Reset the form if needed
    } catch (error) {}
  };

  return (
    <>
      {isLoading || loading ? (
        <h1 className="h-96 text-2xl flex justify-center items-center text-gray-500">
          Message Loading...
        </h1>
      ) : (
        <div className="lg:w-8/12 mx-auto lg:flex gap-5 pb-10">
          <div className=" basis-4/12 bg-white lg:py-10 px-5">
            {loading ? (
              <h1 className="h-96 text-2xl flex justify-center items-center text-gray-500">
                Loading user...
              </h1>
            ) : (
              <>
                <div className="hidden lg:block p-2 rounded-md mb-2 my-10 lg:my-0">
                  {data
                    ?.filter((msg: any) => msg?.receiverEmail === email)
                    .reduce((uniqueMessages: any, msg: any) => {
                      // Check if the userName is already in the uniqueMessages array
                      const userNameExists = uniqueMessages.some(
                        (uniqueMsg: any) =>
                          uniqueMsg?.senderEmail === msg?.senderEmail
                      );
                      // If the userName doesn't exist in the array, add it
                      if (!userNameExists) {
                        uniqueMessages.push(msg);
                      }

                      return uniqueMessages;
                    }, [])
                    .map((uniqueMsg: any) => (
                      <div
                        key={uniqueMsg?._id}
                        className={
                          "bg-primary px-5 py-2 rounded-md mb-2 my-2  border-b-4 border-warning"
                        }
                        onClick={(e: any) => {
                          const name =
                            e.currentTarget.getAttribute("data-username");
                          const email =
                            e.currentTarget.getAttribute("data-email");
                          const productId =
                            e.currentTarget.getAttribute("data-productId");
                          setGetName(name);
                          setAuthorEmail(email);
                          setProductId(productId);
                          // handleProductShow(uniqueMsg?.productId);
                        }}
                        data-username={uniqueMsg?.userName}
                        data-email={uniqueMsg?.senderEmail}
                        data-productId={uniqueMsg?.productId}
                      >
                        {showUser && (
                          <h1 className="text-xl cursor-pointer flex gap-1">
                            <RiAccountBoxFill className=" h-7 w-8"></RiAccountBoxFill>{" "}
                            {uniqueMsg?.userName}
                          </h1>
                        )}

                      
                      </div>
                    ))}
                  {!showUser && (
                    <h1 className="my-20 h-10 text-3xl text-center mx-auto text-gray-500">
                      No User Found
                    </h1>
                  )}
                  {showUser === null && (
                    <h1 className="my-20 h-10 text-3xl text-center mx-auto text-gray-500">
                      Loading...
                    </h1>
                  )}
                </div>

                {/* for phone  */}

                {!authorEmail && (
                  <div className="lg:hidden p-2 rounded-md mb-2 my-10 lg:my-0">
                    {data
                      ?.filter((msg: any) => msg?.receiverEmail === email)
                      .reduce((uniqueMessages: any, msg: any) => {
                        // Check if the userName is already in the uniqueMessages array
                        const userNameExists = uniqueMessages.some(
                          (uniqueMsg: any) =>
                            uniqueMsg?.senderEmail === msg?.senderEmail
                        );
                        // If the userName doesn't exist in the array, add it
                        if (!userNameExists) {
                          uniqueMessages.push(msg);
                        }

                        return uniqueMessages;
                      }, [])
                      .map((uniqueMsg: any) => (
                        <div
                          key={uniqueMsg._id}
                          className={
                            "bg-primary px-5 py-2 rounded-md mb-2 my-2  border-b-4 border-warning"
                          }
                          onClick={(e: any) => {
                            const name =
                              e.currentTarget.getAttribute("data-username");
                            const email =
                              e.currentTarget.getAttribute("data-email");
                            const productId =
                              e.currentTarget.getAttribute("data-productId");
                            setGetName(name);
                            setAuthorEmail(email);
                            setProductId(productId);
                            // handleProductShow(uniqueMsg?.productId);
                          }}
                          data-username={uniqueMsg?.userName}
                          data-email={uniqueMsg?.senderEmail}
                          data-productId={uniqueMsg?.productId}
                        >
                          {showUser && (
                            <h1 className="text-xl cursor-pointer flex gap-1">
                              <RiAccountBoxFill className=" h-7 w-8"></RiAccountBoxFill>{" "}
                              {uniqueMsg?.userName}
                            </h1>
                          )}

                          
                        </div>
                      ))}
                    {!showUser && (
                      <h1 className="my-20 h-10 text-3xl text-center mx-auto text-gray-500">
                        No User Found
                      </h1>
                    )}
                    {showUser === null && (
                      <h1 className="my-20 h-10 text-3xl text-center mx-auto text-gray-500">
                        Loading...
                      </h1>
                    )}
                  </div>
                )}
              </>
            )}
          </div>

          <div className="hidden lg:block lg:basis-8/12 bg-white pt-5 px-5">
            {getName && (
              <div className="flex gap-x-5">
                {!lang ? (
                  <h1 className="text-xl font-semibold text-gray-700">
                    Chat with {getName}
                  </h1>
                ) : (
                  <h1 className="text-xl font-semibold text-gray-700">
                    {getName}{" "}
                    <span className="text-lg"> এর সাথে কথা বলুন।</span>
                  </h1>
                )}
              </div>
            )}
            <div
              className={
                authorEmail
                  ? "min-h-96 border-t mt-3 border-b mb-2 border-warning overflow-hidden"
                  : "border-t-none"
              }
            >
              {isLoading ? (
                <h1 className="h-96 text-2xl flex justify-center items-center text-gray-500">
                  Message Loading...
                </h1>
              ) : (
                <>
                  {authorEmail ? (
                    <div
                      ref={messageContainerRef}
                      className="h-[420px] overflow-auto overflow-x-hidden"
                    >
                      {messages?.map((message: any, index: any) => {
                        const isSender = message?.senderEmail === email;

                        return (
                          <div key={index} className="px-5">
                            <div
                              className={`flex rounded-md  mt-2 max-w-fit  ${
                                isSender ? "ml-auto lg:w-9/12" : "lg:w-9/12" // Apply ml-auto class for sender's messages
                              }`}
                            >
                              <div>
                                <h3 className="font-fold text-lg px-2 bg-warning text-primary rounded-md">
                                  {message?.userName
                                    ?.charAt(0, 2)
                                    .toUpperCase()}
                                </h3>
                              </div>
                              <div className="px-2 rounded-md">
                                <span className="text-sm">{message.user}</span>
                                <h3 className="">{message.message}</h3>
                                {message.photo && (
                                  <PhotoProvider>
                                    <PhotoView src={message.photo}>
                                      <img
                                        className="h-52 w-52 cursor-pointer"
                                        src={message.photo}
                                        alt=""
                                        draggable="false"
                                      />
                                    </PhotoView>
                                  </PhotoProvider>
                                )}
                              </div>
                            </div>
                            <h3
                              className={
                                isSender
                                  ? "text-xs text-right my-2"
                                  : "text-xs text-left my-2"
                              }
                            >
                              {format(message.updatedAt)}
                            </h3>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <h1 className="h-96 flex justify-center items-center text-gray-400 text-3xl lg:text-3xl">
                      Select a user to continue conversation.
                    </h1>
                  )}
                </>
              )}
            </div>
            <form ref={formRef} onSubmit={handleSendMessage}>
              <textarea
                onChange={(e: any) => setNewMessage(e.target.value)}
                name=""
                id=""
                className="h-20 w-full outline-none border border-warning px-2 py-1 rounded"
                placeholder="Write your message..."
              ></textarea>
              <div className="flex justify-end">
                <button
                  disabled={authorEmail ? false : true}
                  className={
                    authorEmail
                      ? "bg-warning px-5 py-2 rounded text-primary font-bold"
                      : "bg-gray-400 px-5 py-2 rounded text-primary font-bold"
                  }
                >
                  Send
                </button>
              </div>
            </form>
            <div className="-mt-10 pb-5">
              {imgUrl ? (
                <img className="h-10 w-12" src={imgUrl} alt="" draggable="false"/>
              ) : (
                <div>
                  <input
                    onChange={(e) => imageUploadHandler(e, setImgUrl)}
                    type="file"
                    id="file1"
                    accept="image/*"
                    placeholder="Upload Images"
                    className="file-input file-input-primary w-full hidden cursor-pointer"
                    required
                  />
                  <label htmlFor="file1">
                    {!lang ? (
                      <div className="flex gap-2 cursor-pointer">
                        <BiPhotoAlbum className={`h-6 w-6`} />
                        <h2 className="mt-1 text-sm">Add Photo</h2>
                      </div>
                    ) : (
                      <div className="flex gap-2 cursor-pointer">
                        <BiPhotoAlbum className={`h-6 w-6`} />
                        <small className="mt-1"> ছবি যুক্ত করুন</small>
                      </div>
                    )}
                  </label>
                </div>
              )}
            </div>
          </div>
          {/* for phone  */}
          <>
            <MessageForPhone
              formRef={formRef}
              handleSendMessage={handleSendMessage}
              setNewMessage={setNewMessage}
              isLoading={isLoading}
              messages={messages}
              getName={getName}
              setAuthorEmail={setAuthorEmail}
              authorEmail={authorEmail}
              imageUploadHandler={imageUploadHandler}
              imgUrl={imgUrl}
              setImgUrl={setImgUrl}
            ></MessageForPhone>
          </>
          
        </div>
      )}
    </>
  );
};

export default PrivateRoute(ContactByMessage);
