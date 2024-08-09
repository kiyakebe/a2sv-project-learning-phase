'use client';
import { useSession } from "next-auth/react";

const Jobs = () => {
  const session = useSession();
  console.log("session", session);
  return <div>Print Naol kassinet</div>;
};

export default Jobs;
