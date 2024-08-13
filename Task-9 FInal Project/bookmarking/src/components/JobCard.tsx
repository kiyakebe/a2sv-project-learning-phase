"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as Bookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as unBookmark } from "@fortawesome/free-solid-svg-icons";

import { JobCardType } from "@/type";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";

const ButtonGroup = () => {
  return (
    <div className="flex mt-4 gap-3">
      <button className="px-4 py-1 bg-green-50 text-green-500 rounded-3xl">
        In Person
      </button>
      <div className="border-r-2"></div>
      <button className="px-4 py-1 border border-amber-600 text-amber-600 rounded-3xl">
        Education
      </button>
      <button className="px-4 py-1 border border-indigo-700 text-indigo-700 rounded-3xl">
        IT
      </button>
    </div>
  );
};

const JobCard = ({
  id,
  title,
  logoUrl,
  orgName,
  location,
  description,
  isBookmarked,
}: JobCardType) => {
  const session = useSession();
  const router = useRouter();
  const accessToken = session?.data?.accessToken;

  const handleClick = async () => {
    if (isBookmarked) {
      try {
        await axios.delete(
          `https://akil-backend.onrender.com/bookmarks/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post(
          `https://akil-backend.onrender.com/bookmarks/${id}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
    router.refresh();
  };

  return (
    <div className="flex border border-gray-400 p-10 w-3/4 rounded-3xl space-x-5 mx-auto my-8 bg-white">
      <div className="block shrink-0">
        <Link href={`/jobs/${id}`}>
          {logoUrl && (
            <img
              src={`${logoUrl}`}
              alt="Picture of the author"
              width={60}
              height={60}
            />
          )}
        </Link>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-start">
          <Link href={`/jobs/${id}`}>
            <h2 className="font-semibold">{title}</h2>
            <p className="text-sm text-slate-500 my-1">
              {orgName} <span className="text-3xl">.</span>{" "}
              {location.join(", ")}
            </p>
          </Link>
          {isBookmarked ? (
            <button onClick={handleClick} data-id="unbookmark">
              <FontAwesomeIcon icon={unBookmark} />
            </button>
          ) : (
            <button onClick={handleClick} data-id="bookmark">
              <FontAwesomeIcon icon={Bookmark} />
            </button>
          )}
        </div>
        <p className="text-slate-700 text-sm">{description}</p>
        <ButtonGroup />
      </div>
    </div>
  );
};

export default JobCard;
