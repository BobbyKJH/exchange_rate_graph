/* React-Router-Dom */
import { Link } from "react-router-dom";
/* Utils */
import { pathUrl } from "../../common/utils";
/* Style */
import { AppBar, Toolbar } from "@mui/material";
import {
  ContentLink,
  HeaderBox,
  HeaderCotainer,
  HeaderTitle,
} from "../../style/common/Header.styled";
/* Image */
import AssessmentIcon from "@mui/icons-material/Assessment";
import CalculateIcon from "@mui/icons-material/Calculate";

const Header = () => {
  return (
    <AppBar position="static">
      <HeaderCotainer maxWidth="md">
        <Toolbar>
          <HeaderTitle>
            <Link to={"/"}>환율 계산기</Link>
          </HeaderTitle>

          <HeaderBox>
            <ContentLink to={"/graph/list"}>
              <AssessmentIcon
                fontSize="large"
                className={pathUrl("graph") ? "path" : ""}
              />
            </ContentLink>

            <ContentLink to={"/calculator"}>
              <CalculateIcon
                fontSize="large"
                className={pathUrl("calculator") ? "path" : ""}
              />
            </ContentLink>
          </HeaderBox>
        </Toolbar>
      </HeaderCotainer>
    </AppBar>
  );
};

export default Header;
