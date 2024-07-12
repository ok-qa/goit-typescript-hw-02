import axios from "axios";
import { ImageEntity } from "../entities";

const KEY = "fs2vmDq1L7qfc64cSDo4a6Nzmyx1a9H62VVOKfjvC2k";
axios.defaults.baseURL = "https://api.unsplash.com";

interface ApiResponse {
  result: ImageEntity[];
  totalPages: number;
}

export const getPhotosByQuery = async (
  searchQuery: string,
  currentPage: number
): Promise<ApiResponse> => {
  const params = {
    client_id: KEY,
    query: searchQuery,
    page: currentPage,
    per_page: 12,
    orientation: "landscape",
  };

  const response = await axios.get("/search/photos", {
    params,
  });

  return {
    result: response.data.results,
    totalPages: response.data.total_pages,
  };
};
