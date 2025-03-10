function modals(){
// 상세보기 모달창, titile, content를 가져오기 위함
    function readModal(title, content) {
        const modal = document.getElementById("readModal");
        const modalContent = modal.querySelector("div");

        modalContent.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
  `;

        modal.style.display = "block";
    }

    // 닫기 버튼 클릭 시 modal 닫기
    function closeModal() {
        const readModal = document.getElementById("readModal");

        if (readModal) {
            readModal.style.display = "none";
        }

    }
    window.readModal = readModal;
    window.closeModal = closeModal;
}

export {modals}