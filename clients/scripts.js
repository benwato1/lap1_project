const submission = document.getElementById('submit_btn').value
console.log(submit_btn)

submit_btn.addEventListener('submit', submitPost )



function submitPost(e) {
    e.preventDefault()
    fetch('http://localhost:3000/posts')
    .then(resp => resp.json())
}