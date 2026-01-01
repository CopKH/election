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
      polling_place_transports (
        type,
        label
      )
    `)
    .eq("id", id)
    .single();
console.log('data fetch',data)
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
    transports: data.polling_place_transports ?? [],
  };
};
