import { supabase } from "@/app/utils/supabase/server";
import { ElectionArea } from "@/models/Place";
import { useEffect, useState } from "react";

export const useFetchPlaces = () => {
  const [dataPlaces, setDataPlaces] = useState<ElectionArea[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
 const { data } = await supabase
  .from('election_areas')
  .select(`
    id,
    number,
    name,
    polling_places (
      id,
      name,
      address,
      image,
      polling_place_transports (
        type,
        label
      )
    )
  `);
console.log('data',data)
        if (data) {
          const areas: ElectionArea[] = data.map((row) => ({
  id: row.id,
  number: row.number,
  name: row.name,

  pollingPlaces: row.polling_places.map((pp) => ({
    id: pp.id,
    name: pp.name,
    address: pp.address,
    image: pp.image,

    transports: pp.polling_place_transports.map((t) => ({
      type: t.type,
      label: t.label,
    })),
  })),
}));

          setDataPlaces(areas);
        }
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);
  return {
    dataPlaces,
    loading,
  };
};
