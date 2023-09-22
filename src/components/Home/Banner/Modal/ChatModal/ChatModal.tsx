// components/Modal.tsx
import { StateContext } from "@/Context/StateContext/StateContext";
import { decryptTransform } from "@/Encrypt/EncryptionTransform";
import { useUserData } from "@/components/API/Api";
import { AppDispatch, RootState } from "@/redux/app/store";
import {
  fetchGetMessages,
  selectLoading,
  selectMessages,
} from "@/redux/features/Messages/GetMessage/GetMessageSlice";
import { sendMessage } from "@/redux/features/Messages/SendMessage/SendMessageSlice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { format } from "timeago.js";

const socket = io("http://localhost:5000");

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  authorEmail: number | string;
  productId: string;
}

const ChatModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  authorEmail,
  productId,
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

  // const message = useSelector(selectMessages);
  // const loading = useSelector(selectLoading);

  // useEffect(() => {
  //   // Define your authorEmail and email values here or fetch them from your component's props or state

  //   // Dispatch the fetchGetMessages action
  //   dispatch(fetchGetMessages({ authorEmail, email }));
  // }, [authorEmail, dispatch, email]);
  // useEffect(() => {
  //   setMessages(message);
  //   socket.emit("set-email", authorEmail);
  // }, [authorEmail, message]);
  const { isLoading } = useQuery(
    ["message", authorEmail, email],
    async () => {
      const response = await axios.get(
        `http://localhost:5000/api/v1/messages?receiverEmail=${authorEmail}&senderEmail=${email}`
      );
      return response.data;
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

    const messagesData = {
      conversationId: getConversationId,
      productId: productId,
      message: newMessage,
      userName: fullName,
      senderEmail: email,
      receiverEmail: authorEmail,
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
      } else {
        // Handle rejection
        console.error("Error sending message:", resultAction.error);
      }

      // Reset the form if needed
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // const handleSendMessage = async (e: any) => {
  //   e.preventDefault();
  //   const messagesData = {
  //     conversationId: getConversationId,
  //     productId: productId,
  //     message: newMessage,
  //     userName: fullName,
  //     senderEmail: email,
  //     receiverEmail: authorEmail,
  //   };
  //   socket.emit("send-message", messagesData);
  //   try {
  //     const res = await fetch("http://localhost:5000/api/v1/messages", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //         // authorization: `bearer ${Cookies.get('token')}`
  //       },
  //       body: JSON.stringify(messagesData),
  //     });

  //     if (!res.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const result = await res.json();
  //     setGetReceiverEmail(result?.receiverEmail);

  //     // if (result.message) {
  //     //   const messagesData = {
  //     //     message: result.message,
  //     //     userName: result.userName,
  //     //     senderEmail: result.senderEmail,
  //     //     receiverEmail: result.receiverEmail,
  //     //   };
  //     //   socket.emit("send-message", messagesData);
  //     //   setNewMessage("");
  //     // }
  //     if (formRef.current) {
  //       formRef.current.reset();
  //     }
  //   } catch (error) {
  //     console.error("Error sending message:", error);
  //   }
  // };

  return (
    <div className={`relative  ${isOpen ? "" : "hidden"}`}>
      {/* <div className="modal-bg absolute inset-0" onClick={onClose}></div> */}
      <div className="   lg:w-[500px] lg:h-[550px] bg-primary px-6 pt-4 border-2 rounded shadow-md">
        {/* Modal Content Goes Here */}
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold"> {authorEmail}</h2>{" "}
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
                    className={`flex rounded-md shadow-md mt-2 w-fit ${
                      isSender ? "ml-auto" : "" // Apply ml-auto class for sender's messages
                    }`}
                  >
                    <div
                      className={`bg-warning text-primary flex justify-center items-center rounded-l-md ${
                        isSender ? "rounded-r-md" : "" // Apply rounded-r-md class for sender's messages
                      }`}
                    >
                      <h3 className="font-fold text-lg px-2">
                        {message?.userName?.charAt(0, 2).toUpperCase()}
                      </h3>
                    </div>
                    <div className="px-2 rounded-md">
                      <span className="text-sm">{message.user}</span>
                      <h3 className="">{message.message}</h3>
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
          className="bg-warning  px-5 py-2 rounded-md text-primary"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatModal;
