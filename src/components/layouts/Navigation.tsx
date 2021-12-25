import styled from "@emotion/styled";
import Link from "next/link";
import { ROUTES } from "../../constants";

interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
  SUBS?: Array<ROUTE>;
}

export const Navigation = () => {
  return (
    <header>
      <StoreTitle>La Hee Store <span></span></StoreTitle>
      <nav>
        <ul>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <li key={`main-menu-${routeObject.ID}`}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
                <ul>
                  {routeObject.SUBS &&
                    routeObject.SUBS.map((subRouteObject: ROUTE) => {
                      return (
                        <li key={`sub-menu-${subRouteObject.ID}`}>
                          <Link
                            href={`${routeObject.PATH}${subRouteObject.PATH}`}
                          >
                            <a>{subRouteObject.LABEL}</a>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const StoreTitle = styled.h1`
  line-height: 180%;
  border-bottom: 1px solid #eee;
  margin-left: 30px;
  color: #7272e0;
`;
