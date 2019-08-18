// import withRouter from "react-router-dom";

export default function logout() {
  console.log("log out works");
  localStorage.removeItem("accessToken");

  //   props.history.push("/dashboard");

  //   props.history.push("/dashboard");
}
