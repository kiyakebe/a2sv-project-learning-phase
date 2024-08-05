export type Opportunity = {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: "inPerson" | "virtual";
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string | null;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string[] | null;
  perksAndBenefits: string | null;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  average_rating: number;
  total_reviews: number;
};

export type JobCardType = {
  title: string;
  logoUrl: string | null;
  description: string;
  orgName: string;
  location: string[];
};

export type JobDetail = {
  data: Opportunity;
}
export type OpportunityApiResponse = {
  success: boolean;
  message: string;
  data: Opportunity[];
};
