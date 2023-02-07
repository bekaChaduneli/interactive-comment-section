// background height optimisation
const element = document.querySelector (".delate-background");
let x = element.scrollHeight;
let y = element.scrollWidth;
element.style.scrollHeight = x;
let editCount = 0;
let reactionsCount = 0;
// inport datas.json
let datas = {
    "currentUser": {
        "image": { 
          "png": "./images/avatars/image-juliusomo.png",
          "webp": "./images/avatars/image-juliusomo.webp"
        },
        "username": "juliusomo"
      },
      "comments": [
        {
          "id": 1,
          "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
          "createdAt": "1 month ago",
          "score": 12,
          "user": {
            "image": { 
              "png": "./images/avatars/image-amyrobson.png",
              "webp": "./images/avatars/image-amyrobson.webp"
            },
            "username": "amyrobson"
          },
          "replies": [
            {
              "id": 3,
              "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
              "createdAt": "1 week ago",
              "score": 4,
              "replyingTo": "maxblagun",
              "user": {
                "image": { 
                  "png": "./images/avatars/image-ramsesmiron.png",
                  "webp": "./images/avatars/image-ramsesmiron.webp"
                },
                "username": "ramsesmiron"
              }
            }
          ]
        },
        {
          "id": 2,
          "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
          "createdAt": "2 weeks ago",
          "score": 5,
          "user": {
            "image": { 
              "png": "./images/avatars/image-maxblagun.png",
              "webp": "./images/avatars/image-maxblagun.webp"
            },
            "username": "maxblagun"
          },
          "replies": [
            {
              "id": 3,
              "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
              "createdAt": "1 week ago",
              "score": 4,
              "replyingTo": "maxblagun",
              "user": {
                "image": { 
                  "png": "./images/avatars/image-ramsesmiron.png",
                  "webp": "./images/avatars/image-ramsesmiron.webp"
                },
                "username": "ramsesmiron"
              }
            },
            {
              "id": 4,
              "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
              "createdAt": "2 days ago",
              "score": 2,
              "replyingTo": "ramsesmiron",
              "user": {
                "image": { 
                  "png": "./images/avatars/image-juliusomo.png",
                  "webp": "./images/avatars/image-juliusomo.webp"
                },
                "username": "juliusomo"
              }
            }
          ]
        }
      ]
}

// create reply box
const replyBox = document.createElement('div');
replyBox.classList.add("reply-conteiner");
replyBox.innerHTML = `
  <img src = "images/avatars/image-juliusomo.png" class = "reply-avatar">
  <textarea class = "my-reply-massage" ></textarea>
  <button class = "my-reply">REPLY</button>`

// create amyrobsons reply update
let firstUpdate = document.createElement("div");
firstUpdate.classList.add("my-first-update-conteiner");
firstUpdate.innerHTML = `
  <div class = "my-update-first-box">
    <img src = "images/avatars/image-juliusomo.png" class = "avatar">
    <span class = "avatar-name">juliusomo</span>
    <div class = "you-box">
      <span class = "you-text">you</span>
    </div>
    <span class = "date">
    just now</span>
  </div>
  <textarea class = "my-first-update-massage" disabled></textarea>
  <button class = "update-update">UPDATE</button>
  <div class = "my-update-reactions">
    <img src = "images/icon-plus.svg" class = "plus">
    <span class = "reactions-count">0</span>
    <img src = "images/icon-minus.svg" class = "minus">
  </div>
  <span class = "first-update-buttons">
    <div class = "delate-box">
      <img src = "images/icon-delete.svg" class = "delate-img">
      <span class = "delate-text">Delate</span>
    </div>
    <div class = "edit-box">
      <img src = "images/icon-edit.svg" class = "edit-img">
      <span class = "edit-text">Edit</span>
    </div>
  </span>`

  // click to edit comment function
  firstUpdate.querySelector(".edit-box").addEventListener('click', () => {
    firstUpdate.querySelector(".my-first-update-massage").disabled = false;
    firstUpdate.querySelector(".my-first-update-massage").focus();
    firstUpdate.querySelector(".update-update").style.display = "flex";
    firstUpdate.querySelector(".my-update-reactions").classList.add("update-focus");
  });

  // click to update comment function
  firstUpdate.querySelector(".update-update").addEventListener("click", () => {
    firstUpdate.querySelector(".update-update").style.display = "none";
    firstUpdate.querySelector(".my-first-update-massage").disabled = true;
    firstUpdate.querySelector(".my-update-reactions").classList.remove("update-focus");
  });

  // click to reduce the reaction
  firstUpdate.querySelector(".plus").addEventListener("click",() => {
    reactionsCount++;
    firstUpdate.querySelector(".reactions-count").innerHTML = reactionsCount;
  });

  // click to add the reaction
  firstUpdate.querySelector(".minus").addEventListener("click",() => {
    if(reactionsCount > 0) {
      reactionsCount--;
    }
    firstUpdate.querySelector(".reactions-count").innerHTML = reactionsCount;
  });

  // delate function
  document.querySelector(".comments-conteiner").append(firstUpdate);
  firstUpdate.querySelector(".delate-box").addEventListener('click', () => {
    document.querySelector(".delate-background").style.display = "flex";
    document.querySelector(".delate-conteiner").style.display = "flex";
    document.querySelector(".cancle").addEventListener("click", () => {
      document.querySelector(".delate-background").style.display = "none";
      document.querySelector(".delate-conteiner").style.display = "none";
    });
    document.querySelector(".yes-delate").addEventListener("click", () => {
      document.querySelector(".my-first-update-massage").innerHTML = null;
      document.querySelector(".delate-background").style.display = "none";
      document.querySelector(".delate-conteiner").style.display = "none";
      firstUpdate.style.display = "none";
      firstUpdate.querySelector(".reactions-count").innerHTML = 0;
      reactionsCount = 0;

    })
  });



// function make customize comment width data and styles
let makeComment = (id,score,image,username,createdAt,content) => {
  const comment = document.createElement('div');
  comment.classList.add(`conteiner${id}`);
  comment.innerHTML = `
    <div id = ${id} class =  ${username === datas.currentUser.username ?"my-first-box" :"first-box"}>
      <img src = "${image}" class = "avatar"}>
      <span class = "avatar-name">${username}</span>
      ${username === datas.currentUser.username ? `
      <div class = "you-box">
        <span class = "you-text">you</span>
      </div>` : ''}
      <span class = "date">${createdAt}</span>
    </div>
    <span class = "massage"}>${content}</span>
    <div class =  "reactions"}>
      <img src = "images/icon-plus.svg" class = "plus">
      <span class = "reactions-count">${score}</span>
      <img src = "images/icon-minus.svg" class = "minus">
    </div>
    <div class = "reply-box">
      <img src = "images/icon-reply.svg" class = "reply">
      <span class = "reply-text">Reply</span>`

  // add comment
  document.querySelector(".comments-conteiner").append(comment);
  // click to add the reaction
  comment.querySelector(".plus").addEventListener("click", () => {
    comment.querySelector(".reactions-count").innerHTML = `${score++}`;
  });
  
  // click to reduce the reaction
  comment.querySelector(".minus").addEventListener("click", () => {
    if(score != 0) {
      comment.querySelector(".reactions-count").innerHTML = `${score--}`;
    }
  });
  

  // reply function for amyrobson
  if(comment.querySelector(".first-box").id == 1) {
    comment.querySelector(".reply-box").addEventListener("click", () => {
      document.querySelector(".reply-conteiner").style.display = "flex";
      document.querySelector(".my-reply").addEventListener("click", () => {
        document.querySelector(".my-first-update-massage").innerHTML = `${replyBox.querySelector(".my-reply-massage").value}`;
        document.querySelector(".reply-conteiner").style.display = "none";
        document.querySelector(".my-first-update-conteiner").style.display = "flex";
      })
    }); 
  }
}



//first comment Address
let firstComment = datas.comments[0];
// create first comment
let addFirstComment = makeComment(firstComment.id, firstComment.score, firstComment.user.image.png, firstComment.user.username, firstComment.createdAt, firstComment.content)
document.querySelector(".comments-conteiner").append(replyBox);
document.querySelector(".comments-conteiner").append(firstUpdate);
//second comment Address
let secondComment = datas.comments[1];
// create first comment
let addSecondComment = makeComment(secondComment.id, secondComment.score, secondComment.user.image.png, secondComment.user.username, secondComment.createdAt, secondComment.content);
// add comments in html

// write comment box
let writeComment = `
  <div class = "write-comment-conteiner">
  <img src = "images/avatars/image-juliusomo.png" class = "desktop-avatar">
  <textarea class = "comment-box" placeholder="Add a comment…"></textarea>
  <div class = "last-box">
    <img src = "images/avatars/image-juliusomo.png" class = "my-avatar">
    <button class = "send-box"><span class = "send-text">SEND</span></button>
  </div>
  </div>
`

let reactCount = 0;
document.body.insertAdjacentHTML("beforeend",writeComment);

// my reply
const sendBox = document.querySelector(".send-box");
sendBox.addEventListener("click", () => {
  if(document.querySelector(".comment-box").value != '') {
    myComment(document.querySelector(".comment-box").value,reactCount);
    document.querySelector(".comment-box").value = "";
  }
})
const edit = document.querySelector(".edit-box");

// create comment
function myComment(text,reactCount) {
  const elem = document.createElement("div");
  elem.classList.add("my-conteiner");
  elem.innerHTML = `
  <div class = "my-first-box">
    <img src = "images/avatars/image-juliusomo.png" class = "avatar">
    <span class = "avatar-name">juliusomo</span>
    <div class = "you-box">
      <span class = "you-text">you</span>
    </div>
    <span class = "date">
  just now</span>
  </div>
  <textarea class = "my-massage" disabled>${text}</textarea>
  <button class = "update">UPDATE</button>
  <div class = "my-reactions">
    <img src = "images/icon-plus.svg" class = "plus">
    <span class = "reactions-count">${reactCount}</span>
    <img src = "images/icon-minus.svg" class = "minus">
  </div>
  <span class = "buttons">
    <div class = "delate-box">
      <img src = "images/icon-delete.svg" class = "delate-img">
      <span class = "delate-text">Delate</span>
    </div>
    <div class = "edit-box">
      <img src = "images/icon-edit.svg" class = "edit-img">
      <span class = "edit-text">Edit</span>
    </div>
    </span>
  `
  // delate function
  document.querySelector(".comments-conteiner").append(elem);
  elem.querySelector(".delate-box").addEventListener('click', () => {
    document.querySelector(".delate-background").style.display = "flex";
    document.querySelector(".delate-conteiner").style.display = "flex";
    document.querySelector(".cancle").addEventListener("click", () => {
      document.querySelector(".delate-background").style.display = "none";
      document.querySelector(".delate-conteiner").style.display = "none";
    });
    document.querySelector(".yes-delate").addEventListener("click", () => {
      document.querySelector(".delate-background").style.display = "none";
      document.querySelector(".delate-conteiner").style.display = "none";
      elem.style.display = "none";
    })
  });

  // click to edit comment function
  elem.querySelector(".edit-box").addEventListener('click', () => {
    elem.querySelector(".my-massage").disabled = false;
    elem.querySelector(".my-massage").focus();
    elem.querySelector(".update").style.display = "flex";
    elem.querySelector(".my-reactions").classList.add("update-focus");
  });

  // click to update comment function
  elem.querySelector(".update").addEventListener("click", () => {
    elem.querySelector(".update").style.display = "none";
    elem.querySelector(".my-massage").disabled = true;
    elem.querySelector(".my-reactions").classList.remove("update-focus");
  });

  // click to reduce the reaction
  elem.querySelector(".plus").addEventListener("click",() => {
    elem.querySelector(".reactions-count").innerHTML = reactCount;
    reactCount++;
  });

  // click to add the reaction
  elem.querySelector(".minus").addEventListener("click",() => {
    elem.querySelector(".reactions-count").innerHTML = reactCount;
    if(reactCount > 0)
    reactCount--;
  });
}

// create reply in second box
let reactCountSecond = 0;
let countRepliesSecond = 0;
let cont2 = document.querySelector(".conteiner2");
const replyBoxSecond = document.createElement('div');
replyBoxSecond.classList.add("second-reply-conteiner");
replyBoxSecond.innerHTML = `
  <img src = "images/avatars/image-juliusomo.png" class = "reply-avatar">
  <textarea class = "my-reply-massage" ></textarea>
  <button class = "my-reply">REPLY</button>`
  
// reply comment in second box
cont2.childNodes[7].addEventListener("click", () => {
  countRepliesSecond++;
  if(true) {
    document.querySelector(".comments-conteiner").append(replyBoxSecond);
    replyBoxSecond.style.display = "flex";
  }
})

// update comment in second box
replyBoxSecond.querySelector(".my-reply").addEventListener("click", () => {
  reactCountSecond++;
  let updateReply = document.createElement("div");
  updateReply.classList.add("my-update-conteiner");
  updateReply.innerHTML = `
  <div class = "my-update-first-box">
  <img src = "images/avatars/image-juliusomo.png" class = "avatar">
  <span class = "avatar-name">juliusomo</span>
  <div class = "you-box">
    <span class = "you-text">you</span>
  </div>
  <span class = "date">
just now</span>
</div>
<textarea class = "my-update-massage" disabled>${replyBoxSecond.querySelector(".my-reply-massage").value}</textarea>
<button class = "update-update">UPDATE</button>
<div class = "my-update-reactions">
  <img src = "images/icon-plus.svg" class = "plus">
  <span class = "reactions-count">${reactCountSecond}</span>
  <img src = "images/icon-minus.svg" class = "minus">
</div>
<span class = "update-buttons">
  <div class = "delate-box">
    <img src = "images/icon-delete.svg" class = "delate-img">
    <span class = "delate-text">Delate</span>
  </div>
  <div class = "edit-box">
    <img src = "images/icon-edit.svg" class = "edit-img">
    <span class = "edit-text">Edit</span>
  </div>
  </span>
  `
    replyBoxSecond.style.display = "none";
    document.querySelector(".comments-conteiner").append(updateReply);
  

  // click to edit comment function
  updateReply.querySelector(".edit-box").addEventListener('click', () => {
    updateReply.querySelector(".my-update-massage").disabled = false;
    updateReply.querySelector(".my-update-massage").focus();
    updateReply.querySelector(".update-update").style.display = "flex";
    updateReply.querySelector(".my-update-reactions").classList.add("update-focus");
  });

  // click to update comment function
  updateReply.querySelector(".update-update").addEventListener("click", () => {
    updateReply.querySelector(".update-update").remove();
    updateReply.querySelector(".my-update-massage").disabled = true;
    updateReply.querySelector(".my-update-reactions").classList.remove("update-focus");
  });

  // click to reduce the reaction
  updateReply.querySelector(".plus").addEventListener("click",() => {
    updateReply.querySelector(".reactions-count").innerHTML = reactCountSecond;
    reactCountSecond++;
  });

  // click to add the reaction
  updateReply.querySelector(".minus").addEventListener("click",() => {
    updateReply.querySelector(".reactions-count").innerHTML = reactCountSecond;
    if(reactCountSecond > 0)
      reactCountSecond--;
    });

  // delate function
  updateReply.querySelector(".delate-box").addEventListener('click', () => {
    document.querySelector(".delate-background").style.display = "flex";
    document.querySelector(".delate-conteiner").style.display = "flex";
    document.querySelector(".cancle").addEventListener("click", () => {
      document.querySelector(".delate-background").style.display = "none";
      document.querySelector(".delate-conteiner").style.display = "none";
    });
    document.querySelector(".yes-delate").addEventListener("click", () => {
      document.querySelector(".delate-background").style.display = "none";
      document.querySelector(".delate-conteiner").style.display = "none";
      updateReply.remove();
      updateReply.querySelector(".reactions-count").innerHTML = 0;
      reactCountSecond = 0;
      updateReply.querySelector(".my-update-massage").innerHTML = "sssfa";
    })
  });
})

let replyCom = document.createElement("div");
replyCom.classList.add("ramse-conteiner");
replyCom.innerHTML = `
  <div class = "ramse-first-box">
    <img src = "images/avatars/image-ramsesmiron.png" class = "avatar">
    <span class = "avatar-name">Ramsesmiron</span>
    <span class = "date">
      1 week ago
    </span>
  </div>
  <textarea class = "ramse-update-massage" disabled>@maxblagun If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.</textarea>
  <button class = "ramse-update">UPDATE</button>
  <div class = "ramse-update-reactions">
    <img src = "images/icon-plus.svg" class = "plus">
    <span class = "reactions-count">4</span>
    <img src = "images/icon-minus.svg" class = "minus">
  </div>
  <div class = "ramse-reply-box">
    <img src = "images/icon-reply.svg" class = "reply">
    <span class = "reply-text">Reply</span>
  </div>
`
document.querySelector(".comments-conteiner").append(replyCom);

document.querySelector(".ramse-reply-box").addEventListener("click", ()=> {
  document.querySelector(".comments-conteiner").append(replyBoxSecond);
    replyBoxSecond.style.display = "flex";
    countRepliesSecond++;
});
let reactionCountRamse = 4;
// click to reduce the reaction
replyCom.querySelector(".plus").addEventListener("click",() => {
  replyCom.querySelector(".reactions-count").innerHTML = reactionCountRamse;
  reactionCountRamse++;
});

// click to add the reaction
replyCom.querySelector(".minus").addEventListener("click",() => {
  replyCom.querySelector(".reactions-count").innerHTML = reactionCountRamse;
  if(reactionCountRamse > 0)
  reactionCountRamse--;
  });