import { Link } from "react-router";

const FriendSidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link
            className="block py-2 px-5 m-2 bg-blue-200 rounded"
            to="/friends"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 px-5 m-2 bg-blue-200 rounded"
            to="/friends/requests"
          >
            Friend Requests
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 px-5 m-2 bg-blue-200 rounded"
            to="/friends/suggestions"
          >
            Suggestions
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 px-5 m-2 bg-blue-200 rounded"
            to="/friends/list"
          >
            All friends
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 px-5 m-2 bg-blue-200 rounded"
            to="/friends/birthdays"
          >
            Birthdays
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FriendSidebar;
