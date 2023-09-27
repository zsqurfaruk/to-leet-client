// components/Modal.tsx
import { StateContext } from "@/Context/StateContext/StateContext";
import { decryptTransform } from "@/Encrypt/EncryptionTransform";
import { useUserData } from "@/components/API/Api";
import { AppDispatch, RootState } from "@/redux/app/store";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { sendMessage } from "@/redux/features/Messages/SendMessage/SendMessageSlice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { format } from "timeago.js";
import { BiPhotoAlbum } from "react-icons/bi";
import { decryptFunction } from "@/Encrypt/DecryptFunction/DecryptFunction";


const socket = io("https://zsqur.quickvara.com");

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  authorEmail: number | string;
  productId: string;
  name:string
}

const ChatModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  authorEmail,
  productId,
  name
}) => {
  const [userName, setUserName] = useState("");
  const [chatActive, setChatActive] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const messageContainerRef = useRef<HTMLDivElement | null>(null);
  const firstName = decryptTransform(Cookies.get("qv-fn"));
  const lastName = decryptTransform(Cookies.get("qv-ln"));
  const email = decryptTransform(Cookies.get("qv-acn"));
  const fullName = firstName + " " + lastName;
  const formRef = useRef<HTMLFormElement | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [getReceiverEmail, setGetReceiverEmail] = useState("");
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
    socket.on("connect", () => {
      // Connection is established; now emit "set-email"
      socket.emit("set-email", getReceiverEmail);
    });
    const receivedMessageHandler = (message: any) => {
      setMessages((prevMessages: any) => [...prevMessages, message]);
    };
    socket.on("received-message", receivedMessageHandler);
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      socket.off("received-message", receivedMessageHandler);
    };
  }, [getReceiverEmail, setMessages]);
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

  useEffect(() => {
    // Scroll to the bottom when new messages are displayed
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage) return;
    const messagesData = {
      conversationId: getConversationId,
      productId: productId,
      message: newMessage,
      userName: fullName,
      senderEmail: email,
      receiverEmail: authorEmail,
      photo:""
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
        setGetReceiverEmail(receiverEmail.toString());
        setNewMessage("");
      } else {}

      // Reset the form if needed
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {}
  };

  
 
 
  return (
    <div className={`relative  ${isOpen ? "" : "hidden"}`}>
      {/* <div className="modal-bg absolute inset-0" onClick={onClose}></div> */}
      <div className="lg:w-[500px] lg:h-[550px] bg-primary px-6 pt-4 border-2 rounded shadow-md pb-14">
        {/* Modal Content Goes Here */}
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold"> {name}</h2>{" "}
          <button className="   p-2   rounded" onClick={onClose}>
            <AiOutlineClose className="h-6 w-6"></AiOutlineClose>
          </button>
        </div>
        <div className="divider mt-0 mb-0"></div>
        {isLoading ? (
          <h1 className="text-2xl flex justify-center items-center text-gray-500">
            Message Loading...
          </h1>
        ) : (
          <div
            ref={messageContainerRef}
            className="h-[420px] overflow-auto overflow-x-hidden"
          >
            {messages?.map((message: any, index: any) => {
              const isSender = message?.senderEmail === email;

              return (
                <div key={index} className="px-5">
                  <div
                    className={`flex rounded-md  mt-2 w-fit ${
                      isSender ? "ml-auto" : "" // Apply ml-auto class for sender's messages
                    }`}
                  >
                    <div
                      className={` flex rounded-l-md max-w-fit ${
                        isSender ? "rounded-r-md" : "" // Apply rounded-r-md class for sender's messages
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
                                      />
                                    </PhotoView>
                                  </PhotoProvider>
                                )}
                              </div>
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
        )}
      </div>
      <form
        ref={formRef}
        onSubmit={handleSendMessage}
        className="absolute  bottom-3"
      >
        <input
          onChange={(e: any) => setNewMessage(e.target.value)}
          type="text"
          className=" lg:w-72 ml-10 mr-2 bg-white py-2 outline-none border-2 border-warning rounded px-2"
          placeholder="Write a message..."
        />
        <button
          // onClick={handleSendMessage}
          disabled={newMessage ? false : true}
          className={
            newMessage
              ? "bg-warning  px-5 py-2 rounded-md text-primary"
              : "bg-gray-500  px-5 py-2 rounded-md text-primary"
          }
        >
          Send
        </button>
        
      </form>
      
    </div>
  );
};

export default ChatModal;
