import {displayData} from './displayData.js';
import {pageState, makeNumBtn}from './Pagination.js';



function pageBtn(){
    function prevBtn(){
        if(pageState.currentPage > 1 ){
            pageState.currentPage -- ;
            displayData();
            makeNumBtn()
        }
    }


    function nextBtn(){
        if(pageState.currentPage < pageState.totalPage){
            pageState.currentPage ++;
            displayData();
            makeNumBtn()
        }
    }
    document.getElementById("prevBtn").addEventListener("click", prevBtn)
    document.getElementById("nextBtn").addEventListener("click", nextBtn)

}




export {pageBtn}