import { decryptFunction } from "@/Encrypt/DecryptFunction/DecryptFunction";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
 

// api.ts (You can create an api folder for such functions)
export async function fetchPersonalPosts(
  email: string,
  token: string
): Promise<any> {
  const response = await fetch(
    `http://localhost:5000/api/v1/product/user/email/${email}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  const data = await response.text();
  const decryptedData = decryptFunction(data);
  return JSON.parse(decryptedData);
}

export const getPosts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/v1/feedback");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};

// related posts
export function useFilteredPosts(limit: number, filterValue: any, id: string) {
  return useQuery(["filteredPosts"], async () => {
    const response = await fetch(
      `http://localhost:5000/api/v1/product/filter?limit=${limit}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': `Bearer ${Cookies.get("token")}`, // Add your authorization header here
        },
        body: JSON.stringify(filterValue),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch filtered posts");
    }

    const data = await response.json();
    const decryptedData = decryptFunction(data?.posts);
    const parsedData = JSON.parse(decryptedData);

    return parsedData.filter((post: any) => post._id !== id);
  });
}

export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/v1/users/signup');
    const decryptedUser = decryptFunction(response.data);
    return JSON.parse(decryptedUser);
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};

export const useUserData = () => {
  return useQuery(['userData'], fetchData);
};

// send message 
// mutations.js


export function useSendMessage() {
  return useMutation(async (messagesData: any) => {
    const response = await fetch("http://localhost:5000/api/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messagesData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  });
}
