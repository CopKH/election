import { ElectionArea, PollingPlace } from "@/models/Place";

const normalize = (text: string) =>
  text.toLowerCase().replace(/\s+/g, '');

const matchPlace = (place: PollingPlace, keyword: string) => {
  const q = normalize(keyword);

  // ชื่อสถานที่
  if (normalize(place.name).includes(q)) return true;

  // ที่อยู่
  if (normalize(place.address).includes(q)) return true;

  // ขนส่งมวลชน
  return place.transports.some((t) =>
    normalize(t.label).includes(q)
  );
};

export const filterElectionAreas = (
  areas: ElectionArea[],
  keyword: string
): ElectionArea[] => {
  if (!keyword.trim()) return areas;

  return areas
    .map((area) => {
      const matchedPlaces = area.pollingPlaces.filter((place) =>
        matchPlace(place, keyword)
      );

      return {
        ...area,
        pollingPlaces: matchedPlaces,
      };
    })
    .filter((area) => area.pollingPlaces.length > 0);
};
