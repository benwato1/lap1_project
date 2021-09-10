const submit_btn = document.getElementById('submit_btn')

submit_btn.addEventListener('submit', submitPost )



function submitPost(e) {
    e.preventDefault()
    fetch('http://localhost:3000/posts')
    .then(resp => resp.json())
   
}