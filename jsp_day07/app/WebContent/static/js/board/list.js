/*게시글 목록*/
showList();

function showList(){
	boards = JSON.parse(boards);
	const $ul = $("#content-wrap ul");
	let text = "";
	boards.forEach(board => {
		text += `
			<li>
		        <div>
		            <a href="javascript:location.href='${contextPath}/board/detailOk.board?boardId=${board.boardId}&page=${page}&sort=${sort}&type=${type}&keyword=${keyword}'">
		                <section class="content-container">
		                    <div class="profile">
		                        <div><img src="${contextPath}/static/images/profile.png" width="15px"></div>
		                        <h6 class="writer">${board.memberName}</h6>
		                    </div>
		                    <h4 class="title">${board.boardTitle}</h4>
		                    <h6 clss="board-info">
		                        <span class="read-count">조회 ${board.boardReadCount}</span>
		                        <span>·</span>
		                        <span class="date">`+ elapsedTime(board.boardRegisterDate) +`</span>
		                    </h6>
		                </section>
			`;
			/*첨부파일 있을 경우 img 태그 추가*/
						/*<img src="" class="preview">*/
			text += `
		            </a>
		        </div>
		    </li>
			`;
	});
	$ul.append(text);
}