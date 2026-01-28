import { useNavigate } from "react-router";

const Profile = () => {
  let navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/groups/joins")}>
        Navigate to home page
      </button>
    </div>
  );
};

export default Profile;
