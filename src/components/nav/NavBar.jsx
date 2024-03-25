import { NavLink, useNavigate } from "react-router-dom"

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <ul>
      <li>
        <NavLink to="games">Games</NavLink>
      </li>
      {localStorage.getItem("rater_token") !== null ? (
        <li>
          <button
            onClick={() => {
              localStorage.removeItem("rater_token")
              navigate("/login")
            }}
          >
            Logout
          </button>
        </li>
      ) : (
        <>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </>
      )}
    </ul>
  )
}
