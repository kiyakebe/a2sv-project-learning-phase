import data from "@/data/jobs.json";
import { JobDetail } from "@/types";

export const filterOpportunities = (title: string): JobDetail | undefined => {
  return data.job_postings.find((ele) => ele.title === title);
};


export const sortOpportunities = (sortingParameter: string) => {
  
}