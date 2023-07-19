import { drawArrow, handleArrowClick } from "./script/arrow.js";
import { drawDate } from "./script/date.js";
import { drawPress } from "./script/grid-view.js";
import { handleViewChange } from "./script/view-change.js";
import {handleFilterChange} from "./script/filter-change.js"
import { handleReload } from "./script/reload.js";
import { rollInit } from "./script/rolling-view.js";


function init () {
    drawDate();
    drawPress();
    drawArrow();
    rollInit();
    handleReload();
    handleArrowClick();
    handleViewChange();
    handleFilterChange();
}
window.onload = init;