class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");


        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newImage = document.createElement("img");
        newImage.src = this.getAttribute("photo") || "assets/foto-default.png"
        newImage.alt = "Foto da Noticia"
        cardRight.appendChild(newImage);

        componentRoot.appendChild(cardRight);
        componentRoot.appendChild(cardLeft);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 60%;
            border: 1px solid gray;
            box-shadow: 8px 9px 29px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 8px 9px 29px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 8px 9px 29px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > span {
            font-weight: 400;
        }
        
        .card__left > h1 {
            margin-top: 15px;
            font-size: 25px;
        }
        
        .card__left > p {
            color: rgb(70, 70, 70)
        
        }
        
        `
        return style;
    }

}

customElements.define("card-news", CardNews);