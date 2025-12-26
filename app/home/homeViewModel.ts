import { useState, useMemo } from "react";
import { useFetchPlaces } from "@/hooks/useFetchPlaces";

export const useHomeViewModel = () => {
  const { dataPlaces, loading } = useFetchPlaces();
  const [keyword, setKeyword] = useState("");

  const filteredPlaces = useMemo(() => {
    if (!keyword) return dataPlaces;
    if (dataPlaces) {
        const k = keyword.toLowerCase();
    return dataPlaces.filter(
      (p) =>
        p.name.toLowerCase().includes(k) ||
        p.pollingPlaces && p.pollingPlaces.some(pp => pp.address.toLowerCase().includes(k))
    );
    }
    
  }, [dataPlaces, keyword]);

  return {
    loading,
    keyword,
    setKeyword,
    dataPlaces: filteredPlaces,
  };
};
