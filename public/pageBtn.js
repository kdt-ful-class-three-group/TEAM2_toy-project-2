import {displayData} from './displayData.js';
import {pageState, makeNumBtn}from './Pagination.js';


/**
 * pagination에서 이전, 다음 버튼의 클릭 이벤트 적용
 * prevBtn : 이전 버튼
 * nextBtn : 다음버튼
 */
function pageBtn(){
    /**
     * pagination에서 이전 페이지로 이동하는 함수
     */
    function prevBtn(){
        if(pageState.currentPage > 1 ){
            pageState.currentPage -- ;
            displayData();
            makeNumBtn()
        }
    }

    /**
     * pagination에서 다음 페이지로 이동하는 함수
     */
    function nextBtn(){
        if(pageState.currentPage < pageState.totalPage){
            pageState.currentPage ++;
            displayData();
            makeNumBtn()
        }
    }

    //각 버튼에 클릭이벤트 생성
    document.getElementById("prevBtn").addEventListener("click", prevBtn)
    document.getElementById("nextBtn").addEventListener("click", nextBtn)

}




export {pageBtn}