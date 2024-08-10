import AuthProvider from "@/auth/Provider";
import Jobs from "./Jobs";
import {  OpportunityApiResponse } from "@/type";
import { getServerSession } from "next-auth";
// For the loader function
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../api/auth/[...nextauth]/options";

const page = async () => {
  const response: Promise<OpportunityApiResponse> = await loader();
  const data = (await response).data;
  
  // console.log( "Data from the user is:", data)

  return (
    <AuthProvider>
      <Jobs jobs={data} />
    </AuthProvider>
  );
};

export default page;

export const loader = async () => {
  const session = await getServerSession(authOptions);
  const response = await fetch("https://akil-backend.onrender.com/opportunities/search", 
    {
      headers: {
        'Authorization': `Bearer ${session?.user?.accessToken}`,
        "Content-Type": "application/json",
      }
    }
  );

  const data = await response.json();

  return data;
};
