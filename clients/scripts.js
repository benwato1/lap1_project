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
    const chosenGif = document.getElementById('gifimage')
    const giflink = chosenGif.src
    // console.log(chosenGif.src)
    let currentdate = new Date()
    let y = currentdate.getFullYear()
    let mon = currentdate.getMonth()
    let d = currentdate.getDate()
    let h = currentdate.getHours()
    let m = currentdate.getMinutes()
    let theDate = `${d}/${mon}/${y} ${h}:${m}`
    if (submittedNewpost.length > 250) {
        alert("Please use no more than 100 characters")
    } else if (submittedNewpost.length === 0) {
        alert("Please enter more than 0 characters")
    } else {
        fetch('http://localhost:3000/posts')
            .then(resp => resp.json())
            .then(resp => resp.length)
            .then(resp => newIdFunction(resp))
        function newIdFunction(resp) {
            const fullPost = {
                id: resp,
                title: submittedTitle,
                date: theDate,
                newpost: submittedNewpost,
                gif: giflink,
                comments: [],
                interactions: [0, 0, 0]
            }
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
}


function storedPosts(resp) { //resp is the array of objects

    // console.log(resp)
    for (let i = 0; i <= resp.length - 1; i++) {
        // Create the new posts
        let justcent = document.getElementById('justcent')
        let col_div = document.createElement('div')
        justcent.prepend(col_div)
        col_div.setAttribute("class", "col col-12 col-lg-6 col-xl-4 mb-3")
        let card_div = document.createElement('div')
        card_div.setAttribute("class", "card")
        col_div.appendChild(card_div)
        let image = document.createElement('img')
        image.setAttribute("class", "card-img-top")
        image.setAttribute("src", `${resp[i].gif}`)
        card_div.appendChild(image)
        let card_body = document.createElement('div')
        card_body.setAttribute("class", "card-body")
        card_body.setAttribute('id', `card-body-${i}`)
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
        butt1.setAttribute("class", "btn btn-light mt-2 btn-block emoji1")
        butt2.setAttribute("class", "btn btn-light mt-2 btn-block emoji2")
        butt3.setAttribute("class", "btn btn-light mt-2 btn-block emoji3")
        butt4.setAttribute("class", "btn btn-success mt-2")
        buttongroup.appendChild(butt1)
        buttongroup.appendChild(butt2)
        buttongroup.appendChild(butt3)
        buttongroup.appendChild(butt4)
        const emojicount1 = resp[i].interactions[0]
        const emojicount2 = resp[i].interactions[1]
        const emojicount3 = resp[i].interactions[2]
        butt1.textContent = `❤️ ${emojicount1}`
        butt2.textContent = `😂 ${emojicount2}`
        butt3.textContent = `😲 ${emojicount3}`
        butt4.textContent =   "Comment"
        document.getElementById(`cardtitle${i}`).innerText = `${resp[i].title} - ${resp[i].date}`
        document.getElementById(`cardtext${i}`).innerText = resp[i].newpost
        let allCommentContent = document.createElement('div')
        allCommentContent.setAttribute('class','mx-3 mb-3')
        card_div.appendChild(allCommentContent)
        let commentTitle = document.createElement('h5')
        commentTitle.setAttribute('class','m-2')
        allCommentContent.appendChild(commentTitle)
        commentTitle.innerText = 'All comments'
        let commentList = document.createElement('ul')
        commentList.setAttribute('class','list-unstyled')
        allCommentContent.appendChild(commentList)
        for (let j = 0; j < resp[i].comments.length; j++) {
            let newLi = document.createElement('li')
            commentList.appendChild(newLi)
            newLi.innerText = resp[i].comments[j]
            newLi.setAttribute('class','bg-light m-2 px-2')
        }
    }



    const commentbutton = document.getElementsByClassName('btn-success')
    //console.log(commentbutton)
    for (let i = 0; i < commentbutton.length; i++) {
        commentbutton[i].addEventListener('click', newComment)
    }
    function newComment(e) {
        e.preventDefault()
        //console.log(e)
        let ourId = e.path[2]['id']
        //console.log(ourId)
        let card = document.getElementById(`${ourId}`)
        let commentsForm = document.createElement('form')
        card.appendChild(commentsForm)
        commentsForm.setAttribute('class', 'commentingforms')
        let inputcomment = document.createElement('input')
        commentsForm.appendChild(inputcomment)
        inputcomment.setAttribute('type', 'text')
        inputcomment.setAttribute('id', `${ourId}-comments`)
        inputcomment.setAttribute('class', 'form-control my-2')
        inputcomment.setAttribute('placeholder', 'Add a comment')
        let submitComment = document.createElement('input')
        commentsForm.appendChild(submitComment)
        submitComment.setAttribute('type', 'submit')
        submitComment.setAttribute('class', 'btn btn-info')
        let commentsubmitbutton = document.getElementsByClassName('btn btn-info')
        for (let i = 0; i < commentsubmitbutton.length; i++) {
            commentsubmitbutton[i].addEventListener('click', appendComment)
            function appendComment(e) {
                e.preventDefault()
                let commentIndex = (e.path[2].id).slice(10)
                let fullComment = e.path[1][0].value
                fetch('http://localhost:3000/posts')
                    .then(resp => resp.json())
                   // .then(resp => resp.length)
                    .then(resp => idFunction(resp))
                   // .then(resp => console.log(resp))
                function idFunction() {
                    const addingComment = {
                        identifier: commentIndex,
                        comment: fullComment
                    }
                    const options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(addingComment)
                    }
                    console.log(addingComment.comment)
                    fetch('http://localhost:3000/posts/comments', options)
                }
            }
        }
    }

    const emojiButton1 = document.getElementsByClassName('emoji1')
    const emojiButton2 = document.getElementsByClassName('emoji2')
    const emojiButton3 = document.getElementsByClassName('emoji3')
    console.log(emojiButton1)
    console.log(emojiButton2)
    console.log(emojiButton3)

    for (let i = 0; i < emojiButton1.length; i++) {
        emojiButton1[i].addEventListener('click', increment1)

        function increment1(e) {
            e.preventDefault()
            console.log(e.path[2].id.slice(10))
            let emojiid  = (e.path[2].id).slice(10)
            let count1 = { id: emojiid, emojicontent :emojiButton1[i].textContent}
            // console.log(count1)
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(count1)
            }
            fetch('http://localhost:3000/posts/comments/emojis', options)
            .then(resp => resp.json())
            .then(resp => resp.interactions)
            .then(resp => resp[0])
            // .then(resp => console.log(resp))
            .then(resp => changeUI(resp))

            function changeUI(resp) {
                console.log(emojiButton1[i].textContent)
                emojiButton1[i].textContent = `❤️ ${resp}`
            }

        }
    }

    for (let i = 0; i < emojiButton2.length; i++) {
        emojiButton2[i].addEventListener('click', increment1)

        function increment1(e) {
            e.preventDefault()
            console.log(e.path[2].id.slice(10))
            let emojiid  = (e.path[2].id).slice(10)
            let count2 = { id: emojiid, emojicontent :emojiButton2[i].textContent}
            // console.log(count1)
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(count2)
            }
            fetch('http://localhost:3000/posts/comments/emojis', options)
            .then(resp => resp.json())
            .then(resp => resp.interactions)
            .then(resp => resp[0])
            // .then(resp => console.log(resp))
            .then(resp => changeUI(resp))

            function changeUI(resp) {
                console.log(emojiButton2[i].textContent)
                emojiButton2[i].textContent = `😂 ${resp}`
            }

        }
    }

    for (let i = 0; i < emojiButton3.length; i++) {
        emojiButton3[i].addEventListener('click', increment1)

        function increment1(e) {
            e.preventDefault()
            console.log(e.path[2].id.slice(10))
            let emojiid  = (e.path[2].id).slice(10)
            let count3 = { id: emojiid, emojicontent :emojiButton3[i].textContent}
            // console.log(count1)
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(count3)
            }
            fetch('http://localhost:3000/posts/comments/emojis', options)
            .then(resp => resp.json())
            .then(resp => resp.interactions)
            .then(resp => resp[0])
            // .then(resp => console.log(resp))
            .then(resp => changeUI(resp))

            function changeUI(resp) {
                console.log(emojiButton3[i].textContent)
                emojiButton3[i].textContent = `😲 ${resp}`
            }

        }
    }

 




}


let APIKEY = "axJL2HvXKpt1neBIZwHPkMNAJXKXMpRm";
let gifSearchButton = document.getElementById('gifsearch')
gifSearchButton.addEventListener('click', getGiff)
function getGiff(e) {
    e.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
    let str = document.getElementById("gifinput").value.trim();
    url = url.concat(str);
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(content => gifCreate(content))
        .catch(err => {
            console.error(err);
        })


    function gifCreate(content) {

        let fig = document.createElement("figure");
        let img = document.createElement("img");
        img.id = `gifimage`
        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        fig.appendChild(img);
        fig.id = `giffig`
        let out = document.getElementById("inputFields");
        out.appendChild(fig);
        document.getElementById('gifinput').value = "";

    }

}


const myTextArea = document.getElementById('newpost')
const remainingCharsText = document.getElementById('my-textarea-remaining-chars')
const MAX_CHARS = 250;
myTextArea.addEventListener('input', () =>{
    const remaining = MAX_CHARS - myTextArea.value.length;
    const color = remaining < MAX_CHARS * 0.1 ? 'red' : null;
    remainingCharsText.textContent = `${remaining} characters remaing`;
    remainingCharsText.style.color = color;
})




