import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  // const handleContextMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   event.preventDefault();
  //   return false;
  // };

  return (
    <Html lang="en">
      <Head />
      <body contextMenu={`return false`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
