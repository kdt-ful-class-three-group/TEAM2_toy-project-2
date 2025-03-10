function modals(){
// 상세보기 모달창, titile, content를 가져오기 위함
    function readModal(title, content) {

        // 잘못 가져옴 수정  -> modal은 class이므로 querySelector로 가져옴
        // modal.style.display = "block";을 적용할 때 modal이 아닌 readModal만 처리하고 있음,  modal도 같이 처리해야함
        const modal = document.querySelector(".modal"); // 모달 전체 배경
        const readModal = document.getElementById("readModal"); // 모달 창

        const modalContent = readModal.querySelector("div");

        modalContent.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
    `;

        modal.style.display = "block";
        readModal.style.display = "block";
    }

    function closeModal() {
        const modal = document.querySelector(".modal");
        const readModal = document.getElementById("readModal");

        modal.style.display = "none";
        readModal.style.display = "none";
    }

    window.readModal = readModal;
    window.closeModal = closeModal;
}
modals();
export {modals}