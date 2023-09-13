import { useSelector } from "react-redux";

function UserName() {
  const username = useSelector((state) => state.user.UserName);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold sm:block">{username}</div>
  );
}

export default UserName;
