import React from "react";

const GoogleAnalytics = () => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-28G505GM60`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-28G505GM60');
            `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
