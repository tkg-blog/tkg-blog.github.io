$(".openbtn1").click(function () {
    $(this).toggleClass('active');
    $(".blog-nav").toggleClass("active");
    $("main").toggleClass("hide");
});
$("table").attr("cellSpacing","0");

setArticleNav()
function setArticleNav(){
    const articleNav=document.getElementById("article-nav");
    articleNav.innerHTML+="<h2>目次</h2>"
    articleNav.innerHTML+="<ul>"
    for(let idx of $("main h1")){
        if(idx.id!==""){
            articleNav.innerHTML+=`<li><a href=#${idx.id}>${idx.innerHTML}</a></li>`;
        }
    }
    articleNav.innerHTML+="</ul>";
}
for(let dlBtn of document.getElementsByClassName("download")){
    dlBtn.innerHTML='<img src="https://tkg-blog.github.io/download.svg">ダウンロード';
}
