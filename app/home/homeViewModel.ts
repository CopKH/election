import { useState, useMemo } from "react";
import { useFetchPlaces } from "@/hooks/useFetchPlaces";
import { filterElectionAreas } from "@/utils/helper";

export const useHomeViewModel = () => {
  const { dataPlaces, loading } = useFetchPlaces();
  const [keyword, setKeyword] = useState("");

const filteredPlaces = useMemo(
  () => filterElectionAreas(dataPlaces ?? [], keyword),
  [dataPlaces, keyword]
);
  return {
    loading,
    keyword,
    setKeyword,
    dataPlaces: filteredPlaces,
  };
};
