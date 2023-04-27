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
let btn = document.querySelectorAll('button'); //Identifica todos os botões do tipo de galeria
let galleryDiv = document.querySelector('.gallery');//Identifica o campo onde serão inseradas as fotos

//Lê todos os botões
btn.forEach(filterType);

//Ação de click do botão
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
        newList = gallery //Se clicar no botão All, a lista final será o array completo
    }
    else
    {
        newList = gallery.filter(imageId); //Filtra o array com o categoria escolhida e grava em um novo array
    }
    
    insertPages(newList); //Envia o novo array para a função
}

//Filtra o array e retorna bolean
function imageId(image)
{
    if(image.type === typeId)//Compara a id do botão com a categoria do objetos no array completo
    {
        return true;
    }
}

let nFinal = 0;
let nInitial = 0;
let pageSelected = 0;
let numberBtn = [];
//Adiciona as tags div e usa as urls dos objetos no novo array como imagem de fundo das divs
function insertPages(newList)
{
    pageSelected = 1;//Utilizado para quando clicar no botão "All" as imagens começarem sempre na página 1

    let pagesContent = document.querySelector('#pages');//Identifica o campo onde serão inseridas os números de páginas
    
    pagesContent.innerHTML = "";//Utilizado com o intuito de remover os números de páginas caso seja necessário colocar novos números.

    let i = 0//Definindo a variável para utilizar em mais de uma função


    let pages = Math.round(newList.length / 8);//Calcula o número de páginas
    if(pages > 1)//Se identificar que há a necessidade de mais de uma página
    {
        nFinal = (8 * pageSelected) - 1;//Como o padrão de exibição são 8 imagens por página, será sempre multiplicado com o número da página selecionada para determinar o número do último array a ser exibido dentro do intervalo.

        nInitial = nFinal - 7;//Definindo o número inicial do array dentro do intervalo da página selecionada

        insertImg();//envia para a função fazer o loop das imagens dentro do intervalo do array
        
        for(i = 1; i <= pages; i++)//Para inserir os números de páginas
        {
            let numberPage = document.createElement("span");
            numberPage.classList.add('number_page');
            numberPage.innerHTML = i;
            pagesContent.append(numberPage);
            
        }
        
        numberBtn = document.querySelectorAll('.number_page');//Identifica todos os botões de páginas
        numberBtn.forEach(number => 
        {
            number.addEventListener('click', () =>
            {
                pageSelected = number.innerHTML;//Identifica o valor do número da página
                
                //Define o range para o looping de inserção de imagens
                nFinal = (8 * pageSelected) - 1;//Para identificar se o número final está maior que o total do array
                if(nFinal > newList.length)//Caso esteja maior, criar uma regra para determinar o intervalo correto a serem exibidas as últimas imagens na última página
                {
                    nFinal = newList.length - 1;
                    nInitial = nFinal - ((8 * pageSelected - 1) - newList.length);
                }
                else//Caso contrário, determina o intervalo abaixo
                {
                    nFinal = (8 * pageSelected) - 1;
                    nInitial = nFinal - 7;
                }
                insertImg();//Envia dados para a função
                
            });
        });
        
        
    }
    else//Caso não tenha mais de uma página, executar o intervalo abaixo
    {   
        //Define o range para o looping de inserção de imagens
        nFinal = newList.length - 1;
        nInitial = 0;
        insertImg();//Envia dados para a função
    }
    
}


function insertImg()//Executa o looping para inserir as imagens na página
{
    galleryDiv.innerHTML = "";//Utilizado para, caso houver imagens, limpar tudo antes de colocar novas imagens.
    for(i = nInitial; i <= nFinal; i++)
    {
        let newImg = document.createElement("div");
        newImg.classList.add("imgGallery");
        newImg.style = "background-image: url(assets/images/"+newList[i].url+"); background-size: cover; background-position: center;";
        galleryDiv.append(newImg);
    }
}