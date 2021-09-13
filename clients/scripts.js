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
        // .then(resp => resp.json()) //makes an array of objects
        // // .then(resp => newAddPost(resp))    
        // .then(resp => console.log(resp))




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
        // console.log(document.getElementById(`cardtitle${i}`).innerText)
        document.getElementById(`cardtitle${i}`).innerText = resp[i].title
        // console.log(document.getElementById(`cardtitle${i}`).innerText)
        // console.log(document.getElementById(`cardtext${i}`).innerText)
        document.getElementById(`cardtext${i}`).innerText = resp[i].newpost
        // console.log(document.getElementById(`cardtext${i}`).innerText)





    }

    const commentbutton = document.getElementsByClassName('btn-success')
    //const arraycommentbutton = Array.from(commentbutton)
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
        //   inputcomment.setAttribute('class','form-control')
        //  inputcomment.setAttribute('placeholder','Add a comment')
        let submitComment = document.createElement('input')
        commentsForm.appendChild(submitComment)
        submitComment.setAttribute('type', 'submit')
    }
    // const commentbutton = document.getElementsByClassName('btn-success')
    // console.log(commentbutton)
    // for(let i=0 ; i < commentbutton.length; i++){

    //     commentbutton[i].addEventListener('click', newComment )



    // }

    // function newComment(e){
    //     e.preventDefault()


    // }

}

let APIKEY = "axJL2HvXKpt1neBIZwHPkMNAJXKXMpRm";
        let gifSearchButton = document.getElementById('gifsearch')
        function getGiff (e) {
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
            }) }
        gifSearchButton.addEventListener ('click', getGiff)




        // const lastIndex = resp.length










    // function newAddPost(resp) {

    //     const lastIndex = resp.length - 1

    //     let justcent = document.getElementById('justcent')
    //             let col_div = document.createElement('div')
    //             justcent.appendChild(col_div)
    //             col_div.setAttribute("class","col col-12 col-lg-6 col-xl-4 mb-3")
    //             let card_div = document.createElement('div')
    //             card_div.setAttribute("class","card")
    //             col_div.appendChild(card_div)
    //             let image = document.createElement('img')
    //             image.setAttribute("class","card-img-top")
    //             image.setAttribute("src","")
    //             card_div.appendChild(image)
    //             let card_body = document.createElement('div')
    //             card_body.setAttribute("class","card-body")
    //             card_div.appendChild(card_body)
    //             let h5 = document.createElement('h5')
    //             h5.setAttribute("class","card-title")
    //             h5.id = `cardtitle${lastIndex}`
    //             card_body.appendChild(h5)
    //             let cardtext = document.createElement('div')
    //             cardtext.id = `cardtext${lastIndex}`
    //             card_body.appendChild(cardtext)
    //             let buttongroup = document.createElement('div')
    //             buttongroup.setAttribute("class","btn-group w-100")
    //             card_body.appendChild(buttongroup)
    //             let butt1 = document.createElement('a')
    //             let butt2 = document.createElement('a')
    //             let butt3 = document.createElement('a')
    //             let butt4 = document.createElement('a')
    //             butt1.setAttribute("class","btn btn-light mt-2 btn-block")
    //             butt2.setAttribute("class","btn btn-light mt-2 btn-block")
    //             butt3.setAttribute("class","btn btn-light mt-2 btn-block")
    //             butt4.setAttribute("class","btn btn-success mt-2")
    //             buttongroup.appendChild(butt1)
    //             buttongroup.appendChild(butt2)
    //             buttongroup.appendChild(butt3)
    //             buttongroup.appendChild(butt4)
    //             butt1.textContent = document.getElementById('button1').textContent
    //             butt2.textContent = document.getElementById('button2').textContent
    //             butt3.textContent = document.getElementById('button3').textContent
    //             butt4.textContent = document.getElementById('button4').textContent
    //             // console.log(document.getElementById(`cardtitle${i}`).innerText)
    //             document.getElementById(`cardtitle${lastIndex}`).innerText = resp[lastIndex].title
    //             // console.log(document.getElementById(`cardtitle${i}`).innerText)
    //             // console.log(document.getElementById(`cardtext${i}`).innerText)
    //             document.getElementById(`cardtext${lastIndex}`).innerText = resp[lastIndex].newpost 
    //             // console.log(document.getElementById(`cardtext${i}`).innerText)
    // }





















// function callAPI(e) {
//     e.preventDefault()
//     fetch('http://localhost:3000/posts')
//     .then(resp => resp.json()) //makes an array of objects
//     .then(resp =>  addPost(resp))    
//     // .then(resp => console.log(resp))

// }

// function addPost(resp) {

//     if(typeof(addedPosts) === "undefined") {
//     // console.log(typeof(addedPosts))
//     addedPosts = []
//     // console.log(addedPosts)

//     } 

//     const submittedTitle = document.getElementById('newtitle').value
//     const submittedNewpost = document.getElementById('newpost').value
//     const newId = resp.length
//     const fullPost = {id: newId, title: submittedTitle, newpost: submittedNewpost}

//     const options = {
//         method:'POST',
//         headers : {
//             'Content-Type' : 'application/json'
//         },
//         body : JSON.stringify(fullPost)
//     }

//     fetch('http://localhost:3000/posts', options)
//     .then(resp => resp.json())
//     .then(resp => newAddPost(resp))




//     // console.log(fullPost)
//     addedPosts.push(fullPost)
//     // console.log(addedPosts)
//     const allPosts = resp.concat(addedPosts)
//     // console.log(allPosts)
//     const lastIndex = allPosts.length - 1
//     console.log(lastIndex)

//         // console.log(allPosts[i].title)
//         // console.log(allPosts[i].newpost)



//         let justcent = document.getElementById('justcent')
//         let col_div = document.createElement('div')
//         justcent.appendChild(col_div)
//         col_div.setAttribute("class","col col-12 col-lg-6 col-xl-4 mb-3")
//         let card_div = document.createElement('div')
//         card_div.setAttribute("class","card")
//         col_div.appendChild(card_div)
//         let image = document.createElement('img')
//         image.setAttribute("class","card-img-top")
//         image.setAttribute("src","")
//         card_div.appendChild(image)
//         let card_body = document.createElement('div')
//         card_body.setAttribute("class","card-body")
//         card_div.appendChild(card_body)
//         let h5 = document.createElement('h5')
//         h5.setAttribute("class","card-title")
//         h5.id = `cardtitle${lastIndex}`
//         card_body.appendChild(h5)
//         let cardtext = document.createElement('div')
//         cardtext.id = `cardtext${lastIndex}`
//         card_body.appendChild(cardtext)
//         let buttongroup = document.createElement('div')
//         buttongroup.setAttribute("class","btn-group w-100")
//         card_body.appendChild(buttongroup)
//         let butt1 = document.createElement('a')
//         let butt2 = document.createElement('a')
//         let butt3 = document.createElement('a')
//         let butt4 = document.createElement('a')
//         butt1.setAttribute("class","btn btn-light mt-2 btn-block")
//         butt2.setAttribute("class","btn btn-light mt-2 btn-block")
//         butt3.setAttribute("class","btn btn-light mt-2 btn-block")
//         butt4.setAttribute("class","btn btn-success mt-2")
//         buttongroup.appendChild(butt1)
//         buttongroup.appendChild(butt2)
//         buttongroup.appendChild(butt3)
//         buttongroup.appendChild(butt4)
//         butt1.textContent = document.getElementById('button1').textContent
//         butt2.textContent = document.getElementById('button2').textContent
//         butt3.textContent = document.getElementById('button3').textContent
//         butt4.textContent = document.getElementById('button4').textContent
//         // console.log(document.getElementById(`cardtitle${i}`).innerText)
//         document.getElementById(`cardtitle${lastIndex}`).innerText = allPosts[lastIndex].title
//         // console.log(document.getElementById(`cardtitle${i}`).innerText)
//         // console.log(document.getElementById(`cardtext${i}`).innerText)
//         document.getElementById(`cardtext${lastIndex}`).innerText = allPosts[lastIndex].newpost
//         // console.log(document.getElementById(`cardtext${i}`).innerText)


//     // #10084
//     // &#129315
//     // &#128558&


// }

// {/* <div class="col col-12 col-lg-6 col-xl-4 mb-3">
//           <div class="card">
//             <img src="" alt="" class="card-img-top" />

//             <div class="card-body">
//               <h5 class="card-title">10/09/2021</h5>
//               <div class="card-text">
//                 Post 3 .........
//               </div>
//               <div class="btn-group w-100">
//                 <a href="" class="btn btn-light mt-2 btn-block">&#10084</a>
//                 <a href="" class="btn btn-light mt-2 btn-block">&#129315</a>
//                 <a href="" class="btn btn-light mt-2 btn-block">&#128558</a>
//                 <a href="" class="btn btn-success mt-2">Comment</a>
//               </div>
//             </div>
//           </div>
//         </div> */}


