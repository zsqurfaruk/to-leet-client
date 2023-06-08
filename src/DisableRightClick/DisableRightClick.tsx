import React from 'react';

const DisableRightClick = ({ children }:any) => {
  const handleContextMenu = (event:any) => {
    event.preventDefault(); // Prevent the default right-click behavior
  };

  React.useEffect(() => {
    // Add event listener to disable right-click
    document.addEventListener('contextmenu', handleContextMenu);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default DisableRightClick;
