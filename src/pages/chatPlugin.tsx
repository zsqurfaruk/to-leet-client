const ChatPlugin = () => {
    return (
      <>
        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat" />
  
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var chatbox = document.getElementById('fb-customer-chat');
              chatbox.setAttribute("page_id", "105378195925719");
              chatbox.setAttribute("attribution", "biz_inbox");
            `,
          }}
        />
  
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
        />
      </>
    );
  };
  
  export default ChatPlugin;
  