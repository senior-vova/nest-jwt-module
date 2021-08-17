import { Nav } from "react-bootstrap";
import { NavLinkComponent } from "./NavLink";

export const Header = () => (
  <>
    <div className="d-flex flex-column align-items-center py-4">
      <h1>Nest JWT Module</h1>
    </div>
    <Nav variant="tabs" className="justify-content-center" activeKey="/home">
      <NavLinkComponent href="/home" name="Home" isBlank={false} />
      <div className="mx-4"></div>
      <NavLinkComponent
        href="https://github.com/senior-vova/nest-jwt-module"
        name="Github"
        isBlank={true}
      />
      <NavLinkComponent
        href="https://github.com/senior-vova"
        name="Author"
        isBlank={true}
      />
      <NavLinkComponent
        href="https://www.donationalerts.com/r/ags_it"
        name="Donate"
        isBlank={true}
      />
    </Nav>
  </>
);
