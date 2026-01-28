import { Link } from "react-router";

const MarketplaceSidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link
            className="block py-2 px-5 m-2 bg-blue-200 rounded"
            to="/marketplace"
          >
            Browse all
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 px-5 m-2 bg-blue-200 rounded"
            to="/marketplace/notifications"
          >
            Notification
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 px-5 m-2 bg-blue-200 rounded"
            to="/marketplace/inbox"
          >
            Inbox
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MarketplaceSidebar;
