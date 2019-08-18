export default function logout(props) {
  localStorage.removeItem("accessToken");
}
