export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo"></div>
      <li class="nav-item dropdown">
        <button
          class="btn btn-dark dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </button>
        <ul class="dropdown-menu dropdown-menu-dark">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </li>
    </div>
  );
};
