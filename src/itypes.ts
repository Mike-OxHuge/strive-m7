export interface ijob {
  id: number;
  url: string;
  title: string;
  company_name: string;
  category: string;
  tags?: any;
  job_type: string;
  publication_date: string;
  candidate_required_location: string;
  salary?: any;
  description: string;
}

export interface iredux {
  jobs: {
    jobsArr: ijob[];
    jobsQuery: string;
    isLoading: boolean;
  };
  cart: {
    jobs: ijob[];
  };
  user: {
    firstName: string;
  };
}
