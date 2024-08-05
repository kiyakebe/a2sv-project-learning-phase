import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OpportunityApiResponse, JobDetail } from "../../types/index";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: " https://akil-backend.onrender.com/" }),
  endpoints: (builder) => ({
    getAllOpportunity: builder.query<OpportunityApiResponse, void>({
      query: () => "opportunities/search",
    }),
    getOpportunityById: builder.query<JobDetail, string>({
      query: (id) => `opportunities/${id}`,
    }),
  }),
});

export const { useGetAllOpportunityQuery, useGetOpportunityByIdQuery } = apiSlice;
