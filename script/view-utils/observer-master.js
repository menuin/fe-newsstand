import { store } from "../../store/store.js";
import { drawArrow } from "../arrow/arrow.js";
import { changeNavIcons } from "../nav/change-nav-icons.js";
import { renderView, toggleView } from "./render-view.js";

function observer() {
    const {isStillList, isChangeView} = store.getViewState();
    if (!isStillList) {
        drawArrow();
    }
    if (isChangeView) {
        // Possible cases :
        // 1. 전체 언론사 또는 내가 구독한 언론사 클릭
        // 2. 리스트뷰 또는 그리드뷰 버튼 클릭
        // 3. 그리드에서 구독하기 클릭해서 구독한 언론사 페이지로 넘어갈 경우
        toggleView();
        changeNavIcons();
    }
    renderView();
}

export {observer}