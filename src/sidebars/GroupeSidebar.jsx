import { Link } from "react-router";

const GroupeSidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link
            className="block py-2 px-5 m-2 bg-blue-200 rounded"
            to="/groups/feed"
          >
            Your feed
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 px-5 m-2 bg-blue-200 rounded"
            to="/groups/discover"
          >
            Discover
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 px-5 m-2 bg-blue-200 rounded"
            to="/groups/joins"
          >
            Your groups
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default GroupeSidebar;
