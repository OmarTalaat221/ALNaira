// @flow
import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
  CHANGE_LAYOUT,
  CHANGE_LAYOUT_WIDTH,
  CHANGE_SIDEBAR_THEME,
  CHANGE_SIDEBAR_TYPE,
  CHANGE_TOPBAR_THEME,
  SHOW_RIGHT_SIDEBAR,
  CHANGE_THEME,
  CHANGE_LAYOUT_POSITION,
} from "./actionTypes";

import {
  changeSidebarType as changeSidebarTypeAction,
  changeTopbarTheme as changeTopbarThemeAction,
} from "./actions";

/**
 * Changes the body attribute
 */
function changeBodyAttribute(attribute, value) {
  if (document.body) document.body.setAttribute(attribute, value);
  return true;
}

/**
 * Toggle the class on body
 * @param {*} cssClass
 */
function manageBodyClass(cssClass, action = "toggle") {
  switch (action) {
    case "add":
      if (document.body) document.body.classList.add(cssClass);
      break;
    case "remove":
      if (document.body) document.body.classList.remove(cssClass);
      break;
    default:
      if (document.body) document.body.classList.toggle(cssClass);
      break;
  }

  return true;
}


/**
 * Change the Layout Position
 */
function* changeLayoutPosition({ payload: layout }) {
  try {
    yield call(changeBodyAttribute, "data-layout-scrollable", layout);
  } catch (error) { }
}

/**
 * Changes the topbar theme
 * @param {*} param0
 */

function* changeTheme({ payload: theme }) {
  try {
    yield call(changeBodyAttribute, "data-layout-mode", theme);
    yield call(changeBodyAttribute, "data-topbar", theme);
  }
  catch (error) { }
}

/**
 * Changes the layout width
 * @param {*} param0
 */
function* changeLayoutWidth({ payload: width }) {
  try {
    if (width === "boxed") {
      yield put(changeSidebarTypeAction("sm"));
      yield call(changeBodyAttribute, "data-layout-size", width);
      yield call(changeBodyAttribute, "data-layout-scrollable", false);
      // yield call(changeBodyAttribute, "data-sidebar-size", "sm");

    } else if (width === "scrollable") {
      yield put(changeSidebarTypeAction("lg"));
      yield call(changeBodyAttribute, "data-layout-scrollable", true);
    } else {
      yield put(changeSidebarTypeAction("lg"));
      yield call(changeBodyAttribute, "data-layout-size", width);
      yield call(changeBodyAttribute, "data-layout-scrollable", false);
    }
  } catch (error) { }
}

/**
 * Changes the topbar theme
 * @param {*} param0
 */
function* changeTopbarTheme({ payload: theme }) {
  try {
    yield call(changeBodyAttribute, "data-topbar", theme);
  } catch (error) { }
}

/**
 * Changes the left sidebar type
 * @param {*} param0
 */
function* changeSidebarType({ payload: { sidebarType, isMobile } }) {
  try {
    switch (sidebarType) {
      case "lg":
        yield call(changeBodyAttribute, "data-sidebar-size", "lg");
        yield call(manageBodyClass, "sidebar-enable", "remove");
        yield call(manageBodyClass, "vertical-collpsed", "remove");
        break;
      case "md":
        yield call(changeBodyAttribute, "data-sidebar-size", "md");
        yield call(manageBodyClass, "sidebar-enable", "remove");
        yield call(manageBodyClass, "vertical-collpsed", "remove");
        break;
      case "sm":
        yield call(changeBodyAttribute, "data-sidebar-size", "sm");
        yield call(changeBodyAttribute, "data-keep-enlarged", "true");
        yield call(manageBodyClass, "vertical-collpsed", "add");
        break;
      case "condensed":
        yield call(manageBodyClass, "sidebar-enable", "add");
        if (window.screen.width >= 992) {
          yield call(manageBodyClass, "vertical-collpsed", "remove");
          yield call(manageBodyClass, "sidebar-enable", "remove");
          yield call(manageBodyClass, "vertical-collpsed", "add");
          yield call(manageBodyClass, "sidebar-enable", "add");
        } else {
          yield call(manageBodyClass, "sidebar-enable", "add");
          yield call(manageBodyClass, "vertical-collpsed", "add");
        }
        break;
      default:
        yield call(changeBodyAttribute, "data-sidebar-size", "lg");
        yield call(manageBodyClass, "sidebar-enable", "remove");
        if (!isMobile)
          yield call(manageBodyClass, "vertical-collpsed", "remove");
        break;
    }
  } catch (error) { }
}

/**
 * Changes the layout type
 * @param {*} param0
 */
function* changeLayout({ payload: layout }) {
  try {
    if (layout === "horizontal") {
      yield put(changeTopbarThemeAction("dark"));
      document.body.removeAttribute("data-sidebar");
      document.body.removeAttribute("data-sidebar-size");
      // document.body.setAttribute("data-sidebar","none")
    } else {
      yield put(changeTopbarThemeAction("light"));
    }
    yield call(changeBodyAttribute, "data-layout", layout);
  } catch (error) { }
}

/**
 * Changes the left sidebar theme
 * @param {*} param0
 */
function* changeLeftSidebarTheme({ payload: theme }) {
  try {
    yield call(changeBodyAttribute, "data-sidebar", theme);
  } catch (error) { }
}

/**
 * Show the rightsidebar
 */
function* showRightSidebar() {
  try {
    yield call(manageBodyClass, "right-bar-enabled");
  } catch (error) { }
}

/**
 * Watchers
 */
export function* watchChangeLayoutType() {
  yield takeEvery(CHANGE_LAYOUT, changeLayout);
}

export function* watchChangeTheme() {
  yield takeEvery(CHANGE_THEME, changeTheme);
}

export function* watchChangeLayoutWidth() {
  yield takeEvery(CHANGE_LAYOUT_WIDTH, changeLayoutWidth);
}

export function* watchChangeLayoutPosition() {
  yield takeEvery(CHANGE_LAYOUT_POSITION, changeLayoutPosition);
}

export function* watchChangeTopbarTheme() {
  yield takeEvery(CHANGE_TOPBAR_THEME, changeTopbarTheme);
}

export function* watchChangeSidebarType() {
  yield takeEvery(CHANGE_SIDEBAR_TYPE, changeSidebarType);
}

export function* watchChangeLeftSidebarTheme() {
  yield takeEvery(CHANGE_SIDEBAR_THEME, changeLeftSidebarTheme);
}

export function* watchShowRightSidebar() {
  yield takeEvery(SHOW_RIGHT_SIDEBAR, showRightSidebar);
}

function* LayoutSaga() {
  yield all([
    fork(watchChangeLayoutType),
    fork(watchChangeTheme),
    fork(watchChangeLayoutWidth),
    fork(watchChangeLayoutPosition),
    fork(watchChangeTopbarTheme),
    fork(watchChangeSidebarType),
    fork(watchChangeLeftSidebarTheme),
    fork(watchShowRightSidebar),
  ]);
}

export default LayoutSaga;
