$(function() {
	$("#pagination").jqPagination({
	  	current_page: 1, //设置当前页 默认为1
	  	max_page : 40, //设置最大页 默认为1
	  	page_string : '第{current_page}页,共{max_page}页',
	  	paged : function(page) {
	      //回发事件。。。
	    }
	});
});
