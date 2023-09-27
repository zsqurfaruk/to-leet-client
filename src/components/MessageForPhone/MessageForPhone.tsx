/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FaArrowLeft } from "react-icons/fa";
import { decryptTransform } from '@/Encrypt/EncryptionTransform';
import Cookies from 'js-cookie';
import { format } from 'timeago.js';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { BiPhotoAlbum } from 'react-icons/bi';

const MessageForPhone = ({setAuthorEmail, authorEmail, getName,messages, isLoading, handleSendMessage, setNewMessage, formRef, imageUploadHandler, imgUrl,setImgUrl}:any) => {
    const lang = useSelector((state: any) => state.language.language);
    const messageContainerRef = useRef<HTMLDivElement | null>(null);
    
    const email = decryptTransform(Cookies.get("qv-acn"));

    useEffect(() => {
        if (messageContainerRef.current) {
          messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
      }, [messages]);
    const handleBack = () => {
        setAuthorEmail("");
      };
    return (
        <div>
            {authorEmail && (
            <div className="lg:hidden  bg-white pt-5 px-5">
              {getName ? (
                <>
                  {!lang ? (
                    <h1>
                      {" "}
                      <button className=" mt-2">
                        <FaArrowLeft onClick={handleBack}></FaArrowLeft>
                      </button>{" "}
                      Chat with {getName}
                    </h1>
                  ) : (
                    <h1>
                      {" "}
                      <button className="mt-2">
                        <FaArrowLeft onClick={handleBack}></FaArrowLeft>
                      </button>{" "}
                      {getName} এর সাথে কথা বলুন।
                    </h1>
                  )}
                </>
              ) : (
                <h1>Select a user to continue conversation</h1>
              )}
              <div className="min-h-96 border-t mt-5 border-b mb-2 border-warning overflow-hidden">
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
                            className={`flex rounded-md  mt-2 max-w-fit  ${
                              isSender ? "ml-auto w-10/12" : "w-10/12" // Apply ml-auto class for sender's messages
                            }`}
                          >
                            <div>
                              <h3 className="font-fold text-lg px-2 bg-warning text-primary rounded-md">
                                {message?.userName?.charAt(0, 2).toUpperCase()}
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
          )}
        </div>
    );
};

export default MessageForPhone;