export interface JobType {
  title: string;
  logo: string;
  description: string;
  company: string;
  location: string;
}

export interface IdealCandidate {
  age: string;
  gender: string;
  traits: string[];
  title: string;
}

export interface About {
  posted_on: string;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
  categories: string[];
  required_skills: string[];
}

export interface JobDetail {
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: Omit<IdealCandidate, "title">;
  when_where: string;
  about: About;
  company: string;
  image: string;
}
