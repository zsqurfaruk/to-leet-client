// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

// function withAuth(Component:any) {
//   return function AuthenticatedComponent(props:any) {
//     const router = useRouter();
//     const token = localStorage?.getItem('token');

//     useEffect(() => {
//       if (!token) {
//         router.push('/signIn');
//       }
//     }, [router, token]);

//     return token ? <Component {...props} token={token} /> : null;
//   };
// }

// export default withAuth;