import { useEffectOnce, useLocalStorage } from "react-use";
import { userLogout } from "../../lib/api/userApi";
import { useNavigate } from "react-router";
import { alertError } from "../../lib/alert/alert";

export default function UserLogout() {
  const [token, setToken] = useLocalStorage("token", "");
  const navigate = useNavigate();

  async function handleLogout() {
    const response = await userLogout(token);
    const responseBody = await response.json();
    console.log(responseBody);

    if (response.status === 200) {
      setToken("");

      await navigate({
        pathname: "/login",
      });
    } else {
      await alertError("Logout Failed", responseBody.message);
    }
  }

  useEffectOnce(() => {
    handleLogout().then(() => console.log("User logged out successfully"));
  });
  return <></>;
}
