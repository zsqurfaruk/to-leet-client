/* eslint-disable @next/next/no-img-element */
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
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { format } from "timeago.js";

const socket = io("http://localhost:5000");

interface Product {
  img1: string;
  title: string;
}
const ContactByMessage = () => {
  const firstName = decryptTransform(Cookies.get("qv-fn"));
  const lastName = decryptTransform(Cookies.get("qv-ln"));
  const email = decryptTransform(Cookies.get("qv-acn"));
  const fullName = firstName + " " + lastName;
  const formRef = useRef<HTMLFormElement | null>(null);
  const messageContainerRef = useRef<HTMLDivElement | null>(null);
  const { allPosts } = useSelector((state: RootState) => state.allPosts);
  const [getDetailsProductIds, setGetDetailsProductIds] = useState<string>("");
  const [getIdsProduct, setGetIdsProduct] = useState<Product>({
    img1: "",
    title: "",
  });
  const [getName, setGetName] = useState("");
  const [authorEmail, setAuthorEmail] = useState<string | number>("");

  const [productId, setProductId] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const { data } = useQuery(["message"], async () => {
    const response = await axios.get(
      `http://localhost:5000/api/v1/messages/allMessages`
    );
    return response.data;
  });

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
        // setGetReceiverEmail(receiverEmail.toString());
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

  useEffect(() => {
    // Scroll to the bottom when new messages are displayed
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className="lg:w-10/12 mx-auto flex gap-5">
      <div className="basis-4/12 bg-white py-10 px-5">
        <div className="p-2 rounded-md mb-2 ">
          {data
            ?.filter((msg: any) => msg?.receiverEmail === email)
            .reduce((uniqueMessages: any, msg: any) => {
              // Check if the userName is already in the uniqueMessages array
              const userNameExists = uniqueMessages.some(
                (uniqueMsg: any) => uniqueMsg?.senderEmail === msg.senderEmail
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
                className="bg-primary px-5 py-2 rounded-md mb-2 my-2 border-b-4 border-warning"
                onClick={(e: any) => {
                  const name = e.currentTarget.getAttribute("data-username");
                  const email = e.currentTarget.getAttribute("data-email");
                  setGetName(name);
                  setAuthorEmail(email);
                }}
                data-username={uniqueMsg?.userName}
                data-email={uniqueMsg?.senderEmail}
              >
                <h1 className="text-xl cursor-pointer">
                  {uniqueMsg?.userName}
                </h1>
                <small>{uniqueMsg?.senderEmail}</small>
                <small
                  onClick={(e: any) => setProductId(e.target.textContent)}
                  className="hidden"
                >
                  {uniqueMsg?.productId}
                </small>
              </div>
            ))}
        </div>
      </div>
      <div className="basis-6/12 bg-white py-10 px-5">
        {getName ? (
          <h1> {getName}</h1>
        ) : (
          <h1>Select a user to continue conversation</h1>
        )}
        <div className="h-96 border-t mt-5 border-b mb-2 border-warning overflow-hidden">
          {isLoading ? (
            <h1 className="text-2xl flex justify-center items-center text-gray-500">
              Message Loading...
            </h1>
          ) : (
            <div
              ref={messageContainerRef}
              className="h-[420px] overflow-auto overflow-x-hidden pb-10"
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
        <form ref={formRef} onSubmit={handleSendMessage}>
          <textarea
            onChange={(e: any) => setNewMessage(e.target.value)}
            name=""
            id=""
            className="h-20 w-full outline-none border border-warning px-2 py-1 rounded"
            placeholder="Write your message..."
          ></textarea>
          <div className="flex justify-end">
            <button className="bg-warning px-5 py-2 rounded text-primary font-bold">
              Send{" "}
            </button>
          </div>
        </form>
      </div>
      <div className="basis-4/12 bg-white py-10 px-5">
        {/* {getIdsProduct && (
          <>
            <img className="h-2/6 w-full" src={getIdsProduct?.img1} alt="" />
            {getIdsProduct.title}
          </>
        )} */}
      </div>
    </div>
  );
};

export default ContactByMessage;
