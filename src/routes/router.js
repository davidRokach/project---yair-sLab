import PAGES from "../models/pageModel.js";
import {
  ERROR_PAGE,
  GALLERY_PAGE,
  HOME_PAGE,
  LAB_TEAM_PAGE,
  PUBLICATIONS_PAGE,
  RESEARCH_PAGE,
  RESUME_PAGE,
} from "../services/domServices.js";

const pageTo_DOM_Map = [
  {
    page: PAGES.HOME,
    dom: HOME_PAGE,
  },
  {
    page: PAGES.RESEARCH,
    dom: RESEARCH_PAGE,
  },
  {
    page: PAGES.PUBLICATIONS,
    dom: PUBLICATIONS_PAGE,
  },
  {
    page: PAGES.RESUME,
    dom: RESUME_PAGE,
  },
  {
    page: PAGES.LAB_TEAM,
    dom: LAB_TEAM_PAGE,
  },
  {
    page: PAGES.GALLERY,
    dom: GALLERY_PAGE,
  },
  {
    page: PAGES.ERROR_404,
    dom: ERROR_PAGE,
  },
];

export const onChangePage = (page) => {
  const currentPage = pageTo_DOM_Map.find(
    (current) =>
      current.dom.className === "d-block .transition-fadeIn" ||
      current.dom.className === "d-block transition-fadeIn"
  );
  if (currentPage) currentPage.dom.className = "transition-fadeOut";

  setTimeout(() => {
    pageTo_DOM_Map.forEach((pageMap) => {
      pageMap.dom.className = "d-none";
    }); // hide all pages

    const pageMap = pageTo_DOM_Map.find((pageMap) => pageMap.page === page); // find the page that was clicked

    if (pageMap) return (pageMap.dom.className = "d-block transition-fadeIn"); // show the page that was clicked

    // show 404 page if we got this far (the page was not found, so the 'return' statement was not executed)
    ERROR_PAGE.className = "d-block";
  }, 400);
};
