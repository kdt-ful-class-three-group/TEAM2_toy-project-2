let datalist = null
fetch("/dataprac")
    .then(response => response.json())
    .then(data =>  {

        data.forEach(i => {
            // div만들기
            let div = document.createElement("div")
            div.textContent = i.title
            div.setAttribute("style", "cursor:pointer")
            document.getElementById('listDiv').appendChild(div)

        })

        console.log(data)
    })
