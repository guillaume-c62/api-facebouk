const fetchcursor=()=>{
const cursor = document.getElementById("cursor");

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY)+"px; left:"+(10)+"px;")
})

}

export default fetchcursor;
