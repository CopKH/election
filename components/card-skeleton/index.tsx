 const  LocationCardSkeleton = () => {
  return (
    <div className="h-full bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden animate-pulse">
      <div className="p-5 flex flex-col flex-1">
        {/* title */}
        <div className="h-5 w-3/4 bg-gray-200 rounded mb-3" />

        {/* address */}
        <div className="flex gap-2 mb-4">
          <div className="h-4 w-4 bg-gray-200 rounded-full mt-1" />
          <div className="h-4 w-full bg-gray-200 rounded" />
        </div>

        {/* transport section */}
        <div className="border-t border-gray-100 pt-4 mt-auto">
          <div className="h-3 w-1/3 bg-gray-200 rounded mb-3" />

          <div className="flex flex-wrap gap-2">
            <div className="h-6 w-20 bg-gray-200 rounded-xl" />
            <div className="h-6 w-24 bg-gray-200 rounded-xl" />
            <div className="h-6 w-16 bg-gray-200 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface Props {
  count?: number;
}

export default function CardLocationListSkeleton({ count = 6 }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {Array.from({ length: count }).map((_, index) => (
        <LocationCardSkeleton key={index} />
      ))}
    </div>
  );
}
