import { useAppSelector } from "~/app/hooks/hooks";

const Notification = () => {
  const mergedUpdates = () => {
    //TODO: merge all updates here and report to the notifications slice
    // add to cart, favorites, and all actions should be here
    //TODO: onClick outside to close notification dropdown
  };
  const favorites = useAppSelector((state) => state.favorites.favorites);
  return (
    <div className="absolute p-6 text-black rounded shadow-lg shadow-indigo-200 bg-gray-50 right-44 top-16 min-w-fit z-50">
      <h4>Notification</h4>

      {favorites.map((f) => (
        <div key={f.id} className="my-3">
          <h2>{f.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Notification;
