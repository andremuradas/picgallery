let gallery = 
[
    {type: 'birthday',url: 'birthday/01.jpg'},
    {type: 'birthday',url: 'birthday/02.jpg'},
    {type: 'birthday',url: 'birthday/03.jpg'},
    {type: 'dish', url: 'dish/01.png'},
    {type: 'dish', url: 'dish/02.png'},
    {type: 'dish', url: 'dish/03.png'},
    {type: 'dish', url: 'dish/04.png'},
    {type: 'dish', url: 'dish/05.png'},
    {type: 'dish', url: 'dish/06.png'},
    {type: 'dish', url: 'dish/07.png'},
    {type: 'dish', url: 'dish/08.png'},
    {type: 'events', url: 'events/01.jpeg'},
    {type: 'events', url: 'events/02.jpg'},
    {type: 'events', url: 'events/03.jpg'},
    {type: 'events', url: 'events/04.jpg'},
    {type: 'events', url: 'events/05.jpg'},
    {type: 'events', url: 'events/06.jpg'},
    {type: 'meetings', url: 'meetings/01.jpg'},
    {type: 'meetings', url: 'meetings/02.jpg'},
    {type: 'meetings', url: 'meetings/03.jpg'},
    {type: 'meetings', url: 'meetings/04.jpg'},
    {type: 'meetings', url: 'meetings/05.jpg'},
    {type: 'our_local', url: 'our_local/01.jpg'},
    {type: 'our_local', url: 'our_local/02.jpg'},
    {type: 'our_local', url: 'our_local/03.jpg'},
    {type: 'our_local', url: 'our_local/04.jpg'},
    {type: 'our_local', url: 'our_local/05.jpg'},
    {type: 'our_local', url: 'our_local/06.jpg'}
]

let newList = [];
let btn = document.querySelectorAll('button'); //Identifica todos os botões
let galleryDiv = document.querySelector('.gallery');

//Lê todos os botões
btn.forEach(filterType);

//Ação de click
function filterType(btn)
{
    btn.addEventListener('click', filterImg);
}

//Identifica qual o botão foi clicado e envia a ID para filtrar com o Array
function filterImg()
{    
    typeId = this.id;
    if(typeId === "all")
    {
        newList = gallery
    }
    else
    {
        newList = gallery.filter(imageId);
    }
    
    insertImg(newList);
}

//Filtra o array e retorna bolean
function imageId(image)
{
    if(image.type === typeId)
    {
        return true;
    }
}

//Adiciona as tags img e preenche as urls de cada tag
function insertImg(newList)
{
    let pagesContent = document.querySelector('#pages');

    galleryDiv.innerHTML = "";
    pagesContent.innerHTML = "";

    //Insere os números de páginas
    if(pages > 1)
    {
        for(let i = 1; i <= pages; i++)
        {
            let numberPage = document.createElement("span");
            numberPage.classList.add('number_page');
            numberPage.innerHTML = i;
            pagesContent.append(numberPage);
        }
    }

    //insere as imagens
    for(let i = 0; i < newList.length; i++)
    {
        let newImg = document.createElement("div");
        newImg.classList.add("imgGallery");
        newImg.style = "background-image: url(assets/images/"+newList[i].url+"); background-size: cover; background-position: center;";
        galleryDiv.append(newImg);
    }

    let pages = Math.round(newList.length / 8);

    
}

function numberPages()
{
    let pages = Math.round(newList.length / 8);

    if(pages > 1)
    {
        console.log(pages);
    }
    
}