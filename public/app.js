//#region האזנה לאירועים

import PAGES from "../src/models/pageModel.js";
import { onChangePage } from "../src/routes/router.js";

import {
  GALLERY_PAGE_LINK,
  HOME_PAGE_LINK,
  LAB_TEAM_PAGE_LINK,
  PUBLICATIONS_PAGE_LINK,
  RESEARCH_PAGE_LINK,
  RESUME_PAGE_LINK,
} from "../src/services/domServices.js";

// ניתוב דפים
HOME_PAGE_LINK.addEventListener("click", () => {
  onChangePage(PAGES.HOME);
});
RESEARCH_PAGE_LINK.addEventListener("click", () => {
  onChangePage(PAGES.RESEARCH);
});
PUBLICATIONS_PAGE_LINK.addEventListener("click", () => {
  onChangePage(PAGES.PUBLICATIONS);
});
RESUME_PAGE_LINK.addEventListener("click", () => {
  onChangePage(PAGES.RESUME);
});
LAB_TEAM_PAGE_LINK.addEventListener("click", () => {
  onChangePage(PAGES.LAB_TEAM);
});
GALLERY_PAGE_LINK.addEventListener("click", () => {
  onChangePage(PAGES.GALLERY);
});

//#endregion
