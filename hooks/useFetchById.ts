import { supabase } from "@/app/utils/supabase/server";

export const getPlaceById = async (id: number) => {
  const { data, error } = await supabase
    .from("polling_places")
    .select(`
      id,
      name,
      address,
      latitude,
      longitude,
      election_areas (
        id,
        name
      ),
      polling_place_transports (
        type,
        label
      )
    `)
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error(error);
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    address: data.address,
    latitude: data.latitude ?? null,
    longitude: data.longitude ?? null,
    electionArea: data.election_areas?.name ?? "",
    transports: data.polling_place_transports ?? [],
  };
};
