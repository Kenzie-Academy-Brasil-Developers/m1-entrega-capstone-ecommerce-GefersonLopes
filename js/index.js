let secao_carros=document.querySelector(".Secao_carros");
let sectionSuvs =document.createElement("section");
let sectionEsportivos =document.createElement("section");
let opa=document.querySelector(".containerCarrinho");
let quantidade=document.querySelector(".quantidade_de_itens");
let soma=document.querySelector(".valor_dos_itens");

sectionSuvs.classList="suvs";
sectionEsportivos.classList="Esportivos";
secao_carros.append(sectionSuvs,sectionEsportivos)

    //Array do carrinho de compras//
let compras=[];
let valorTotal=0;

    //Criando Cards//
function porshe(carros){
    carros.forEach(carro => {

                // Criando os elementos//
        let carroCards=document.createElement("div");
        let divFoto=document.createElement("div");
        let img=document.createElement("img");
        let divDescricao=document.createElement("div");
        let p=document.createElement("p");
        let h5=document.createElement("h5");
        let pDescricao=document.createElement("p");
        let strong=document.createElement("strong");
        let br=document.createElement("br");
        let button=document.createElement("button");
        

            //Dando Classe aos elementos//
        carroCards.classList="carro";
        divFoto.classList="foto";
        divDescricao.classList="descricao";
        p.classList="categorias";
        pDescricao.classList="descricão";
        strong.classList="preco";
        button.classList="adicionar_carrinho";

        button.id=carro.id;

        if(carro.tag.includes("Suvs")){
                
                //Organizando família dos cards//
            sectionSuvs.append(carroCards);
            carroCards.append(divFoto,divDescricao);
            divFoto.append(img);
            divDescricao.append(p,h5,pDescricao,strong,br,button);
            
                //Atribuindo os valores dos cards Suvs//
            img.src=carro.img;
            p.innerText=carro.tag;
            h5.innerText=carro.nameItem;
            pDescricao.innerText=carro.description;
            strong.innerText=`R$ ${(carro.value).toLocaleString('pt-BR')}`;
            button.innerText=carro.addCart;

            

        }
        if(carro.tag.includes("Esportivos")){
            
                //Organizando família dos cards//
            sectionEsportivos.append(carroCards);
            carroCards.append(divFoto,divDescricao);
            divFoto.append(img);
            divDescricao.append(p,h5,pDescricao,strong,br,button);
            

                //Atribuindo os valores dos cards ESportivos//
            img.src=carro.img;
            p.innerText=carro.tag;
            h5.innerText=carro.nameItem;
            pDescricao.innerText=carro.description;
            strong.innerText=`R$ ${(carro.value).toLocaleString('pt-BR')}`; 
            button.innerText=carro.addCart;
            
            

        }
         //Verificando IDS//
        function getId(e){
            searchId(e.target.id);
        }
        button.addEventListener("click",(e)=>getId(e));
    
        
    
    })
};
porshe(carros);
        //Adicionando o evento "Adicionar ao carrinho"//
function searchId(id){
    let produtosAtual=carros.filter((item)=> item.id == id ? item : null);

        //Adicionando itens selecionado ao carrinho//
    compras.push(produtosAtual[0]);

        
    let div=document.createElement("div");
    div.classList="item_adicionado"
    opa.append(div);

            //Criando os elementos do carrinho//
    let fotoDoCarro=document.createElement("img");
    let titulo=document.createElement("p");
    let precoDocarro=document.createElement("p");
    let botao=document.createElement("button");
    let seus_produtos=document.querySelector(".seus_produtos");
   
            //Atribuindo seus valores//
    fotoDoCarro.src=produtosAtual[0].img;
    fotoDoCarro.classList="fotosDoCarrinho"
    titulo.innerText=produtosAtual[0].nameItem;
    precoDocarro.innerText=`R$ ${(produtosAtual[0].value).toLocaleString('pt-BR')}`;
    botao.classList="botaoRemover";
    
    botao.id=produtosAtual[0].id;
    botao.addEventListener("click", removerCompra);

    botao.innerText="Remover item";
    div.append(fotoDoCarro,titulo,precoDocarro,botao);

            //Tirando o nome//
    seus_produtos.innerHTML="";

            //Contar quantidade de itens e o valor total//
    quantidade.innerText=compras.length;
        let valor=produtosAtual[0].value;

        valorTotal+=valor
        soma.innerText=`R$ ${(valorTotal).toLocaleString('pt-BR')},00`;      
}

        //Remover itens//
function removerCompra(event){
    let idDoBOtao=event.target.id;
    //console.log(idDoBOtao)
    compras=compras.filter((item)=> item.id != idDoBOtao);
    opa.innerHTML="";
    for(let i=0;i<compras.length;i++){
        let div=document.createElement("div");
        let fotoDoCarro=document.createElement("img");
        let titulo=document.createElement("p");
        let precoDocarro=document.createElement("p");
        let botao=document.createElement("button");
    
        //Atribuindo seus valores//
        fotoDoCarro.src=compras[i].img;
        fotoDoCarro.classList="fotosDoCarrinho"
        titulo.innerText=compras[i].nameItem;
        precoDocarro.innerText=`R$ ${(compras[i].value).toLocaleString('pt-BR')}`;
        botao.classList="botaoRemover";
        botao.id=compras[i].id;
        botao.innerText="Remover item";
        div.append(fotoDoCarro,titulo,precoDocarro,botao);
        
        div.classList="item_adicionado"
        opa.append(div);

        botao.addEventListener("click",removerCompra);
        
    }
     //Quantidade e valor//
    quantidade.innerText=compras.length;
    let valor=0;
    valorTotal=0;
    if(compras.length==0){
        valorTotal=0;
        soma.innerText=`R$ ${(valorTotal).toLocaleString('pt-BR')},00`; 
    }
    else{
        for(let i=0;i<compras.length;i++){    
            valor=compras[i].value;
            valorTotal+=valor;
            soma.innerText=`R$ ${(valorTotal).toLocaleString('pt-BR')},00`; 
        }
    }
}