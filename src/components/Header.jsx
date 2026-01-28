import { Link } from "react-router";
export const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-neutral-300">
      <div>
        <h1 className="text-blue-500 text-2xl font-semibold">Facebook</h1>
      </div>
      <nav>
        <ul className="flex items-center gap-8">
          <li>
            <Link to="/" className="font-medium hover:underline text-gray-600">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/reels"
              className="font-medium hover:underline text-gray-600"
            >
              Reel
            </Link>
          </li>

          <li>
            <Link
              to="/marketplace"
              className="font-medium hover:underline text-gray-600"
            >
              Market
            </Link>
          </li>
          <li>
            <Link
              to="/groups"
              className="font-medium hover:underline text-gray-600"
            >
              Group
            </Link>
          </li>

          <li>
            <Link
              to="/friends"
              className="font-medium hover:underline text-gray-600"
            >
              Friends
            </Link>
          </li>
          <li>
            <Link
              to="/notification"
              className="font-medium hover:underline text-gray-600"
            >
              Notification
            </Link>
          </li>
        </ul>
      </nav>
      <Link
        to="/profile"
        className="size-8 rounded-full flex justify-center items-center border border-neutral-300 text-amber-700 font-medium"
      >
        A
      </Link>
    </div>
  );
};
