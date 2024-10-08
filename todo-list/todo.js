const input = document.querySelector('input')
const Btn = document.querySelector('button')
const cont = document.querySelector('.dataBox')
const create = document.querySelector('img')
const main = document.querySelector('.mainBox')
let ptag = document.createElement('p')

// let btn = document.createElement('button')
// let text = document.createElement('input')
// let box = document.createElement('div')
// let header = document.createElement('div')

// create,addEventListener('click', function(){
//     ` 
//          <div class="todo">
//                 <div class="inputBox">
//                     <input type="text">
//                     <button>add</button>
//                 </div>
//                 <div class="dataBox"></div>
//           </div>`
// })

create.addEventListener('click',function(){
    let text = document.createElement('input')
    let box = document.createElement('div')
    box.className = 'todo'
    let header = document.createElement('div')
    header.className = 'inputBox'
    main.append(box);
    box.append(header);
    // ptag.ondblclick = ()=>box.remove()
    
    let btn = document.createElement('button')
    btn.className = 'btn'
    // let fun = document.createElement('div')
    let del = document.createElement('img')
    let save = document.createElement('p')
    save.innerHTML = 'save'

    // edit.src = 'edit.png'
    del.src = 'delete.jpeg'
    header.append(text)
    header.append(btn)
    btn.innerHTML = 'add'
    header.append(save)
    header.append(del)
    // fun.append(save)
    del.className ='del'
    save.className ='save'
    // fun.className ='fun'
    // list.push(input.value)
    // cont.innerHTML = for(m of list){
    //     `<p class="data">${m}</p>`;
    // }
    // console.log(list);
    del.addEventListener('click', function(){
        box.remove()
    })

     btn.addEventListener('click',function(){
        this.style.color = 'green'
        let data = document.createElement('div')
        data.className = 'data'
        let ptag = document.createElement('i')
        ptag.innerText = text.value
        ptag.className = 'value'
        box.append(data);
        data.append(ptag);
        // console.log(list);
        ptag.ondblclick = ()=>data.remove()
        let images = document.createElement('div')
        let edit = document.createElement('img')
        let del2 = document.createElement('img')
        edit.src = 'edit.png'
        del2.src = 'delete.jpeg'
        data.append(images)
        images.append(edit)
        images.append(del2)
        images.className ='images'

        // const saveTask = ()=>{
        //     localStorage.setItem('to-do', JSON.stringify(data))
        // }
    
        edit.addEventListener('click', function(){
            text.value = ptag.innerText
            data.remove()
        })
        del2.addEventListener('click', function(){
            data.remove()
        })
        
        text.value = ''
    })

    const saveTask = ()=>{
        console.log(box);
        
        // localStorage.setItem('to-do', JSON.stringify(box))
    }
    const userData = JSON.parse(localStorage.getItem('todo'))

    save.addEventListener('click', function(){
        saveTask();
        // localStorage.getItem('to-do');
        // userData();


        
        // box.remove()
    })
    
})


// btn.addEventListener('click',function(){
//     style.color = 'red'
//     let data = document.createElement('div')
//     data.className = 'data'
//     let ptag = document.createElement('p')
//     ptag.innerText = text.value
//     ptag.className = 'value'
//     box.append(data);
//     data.append(ptag);
//     // console.log(list);
//     ptag.ondblclick = ()=>data.remove()
//     let images = document.createElement('div')
//     let edit = document.createElement('img')
//     let del = document.createElement('img')
//     edit.src = 'edit.png'
//     del.src = 'delete.jpeg'
//     box.append(images)
//     images.append(edit)
//     images.append(del)
//     images.className ='images'
//     // list.push(input.value)
//     // cont.innerHTML = for(m of list){
//     //     `<p class="data">${m}</p>`;
//     // }
//     // console.log(list);

//     edit.addEventListener('click', function(){
//         input.value = ptag.innerText
//         box.remove()
//     })
//     box.addEventListener('click', function(){
//         box.remove()
//     })
    
//     input.value = ''
// })
