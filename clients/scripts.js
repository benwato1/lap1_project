const form = document.getElementById('form')
// const submitteddate = document.getElementById('newdate')

fetch('http://localhost:3000/posts')
    .then(resp => resp.json())
    .then(resp => storedPosts(resp))


form.addEventListener('submit', callAPI)

function callAPI(e) {
    e.preventDefault()
    const submittedTitle = document.getElementById('newtitle').value
    const submittedNewpost = document.getElementById('newpost').value
    if (submittedNewpost.length > 100) {

        alert("Please use no more than 100 characters")

    } else if (submittedNewpost.length === 0) {

        alert("EMPTY")


    } else {

        const fullPost = { title: submittedTitle, newpost: submittedNewpost }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fullPost)
        }

        fetch('http://localhost:3000/posts', options)

    }


}




function storedPosts(resp) { //resp is the array of objects


    for (let i = 0; i <= resp.length - 1; i++) {

        // Create the new posts
        let justcent = document.getElementById('justcent')
        let col_div = document.createElement('div')
        justcent.appendChild(col_div)
        col_div.setAttribute("class", "col col-12 col-lg-6 col-xl-4 mb-3")
        let card_div = document.createElement('div')
        card_div.setAttribute("class", "card")
        col_div.appendChild(card_div)
        let image = document.createElement('img')
        image.setAttribute("class", "card-img-top")
        image.setAttribute("src", "")
        card_div.appendChild(image)
        let card_body = document.createElement('div')
        card_body.setAttribute("class", "card-body")
        card_div.appendChild(card_body)
        let h5 = document.createElement('h5')
        h5.setAttribute("class", "card-title")
        h5.id = `cardtitle${i}`
        card_body.appendChild(h5)
        let cardtext = document.createElement('div')
        cardtext.id = `cardtext${i}`
        card_body.appendChild(cardtext)
        let buttongroup = document.createElement('div')
        buttongroup.setAttribute("class", "btn-group w-100")
        card_body.appendChild(buttongroup)
        let butt1 = document.createElement('a')
        let butt2 = document.createElement('a')
        let butt3 = document.createElement('a')
        let butt4 = document.createElement('a')
        butt1.setAttribute("class", "btn btn-light mt-2 btn-block")
        butt2.setAttribute("class", "btn btn-light mt-2 btn-block")
        butt3.setAttribute("class", "btn btn-light mt-2 btn-block")
        butt4.setAttribute("class", "btn btn-success mt-2")
        buttongroup.appendChild(butt1)
        buttongroup.appendChild(butt2)
        buttongroup.appendChild(butt3)
        buttongroup.appendChild(butt4)
        butt1.textContent = document.getElementById('button1').textContent
        butt2.textContent = document.getElementById('button2').textContent
        butt3.textContent = document.getElementById('button3').textContent
        butt4.textContent = document.getElementById('button4').textContent
        document.getElementById(`cardtitle${i}`).innerText = resp[i].title
        document.getElementById(`cardtext${i}`).innerText = resp[i].newpost





    }

    const commentbutton = document.getElementsByClassName('btn-success')
    console.log(commentbutton)
    for (let i = 0; i < commentbutton.length; i++) {
        commentbutton[i].addEventListener('click', newComment)
    }
    function newComment(e) {
        e.preventDefault()
        let firstcard = document.getElementById('firstcard')
        let commentsForm = document.createElement('form')
        firstcard.appendChild(commentsForm)
        let inputcomment = document.createElement('input')
        commentsForm.appendChild(inputcomment)
        inputcomment.setAttribute('type', 'text')

        let submitComment = document.createElement('input')
        commentsForm.appendChild(submitComment)
        submitComment.setAttribute('type', 'submit')
    }


}

let APIKEY = "axJL2HvXKpt1neBIZwHPkMNAJXKXMpRm";
let gifSearchButton = document.getElementById('gifsearch')
function getGiff(e) {
    e.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
    let str = document.getElementById("gifinput").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(content => {
            //  data, pagination, meta
            console.log(content.data);
            console.log("META", content.meta);
            let fig = document.createElement("figure");
            let img = document.createElement("img");
            img.src = content.data[0].images.downsized.url;
            img.alt = content.data[0].title;
            fig.appendChild(img);
            let out = document.getElementById("inputFields");
            out.appendChild(fig);
            document.getElementById('gifinput').value = "";
        })
        .catch(err => {
            console.error(err);
        })
}
gifSearchButton.addEventListener('click', getGiff)

