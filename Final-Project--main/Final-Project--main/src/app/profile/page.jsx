import Profile from "../../components/profile/profile_picture";
import { getNormalUser } from "../../actions/userAction/userAction";

export default async function profile() {
  const data = await getNormalUser();

  return (
    <div>
      {data.data.users.map((user) =>
        user._id === "5c8a1dfa2f8fb814b56fa181" ? (
          <Profile user={user} key={user._id} />
        ) : null
      )}
    </div>
  );
}
