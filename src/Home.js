import React from "react";
import "./styles/Home.css";
import Product from "./Product";
import HomeCarousel from "./HomeCarousel";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <HomeCarousel />
        <div className="home_row">
          <Product
            id="12325"
            title="Maillot 2 pièces - Bikini - Noeuds à la taille - Rayé rose et bleu"
            price={19.99}
            img="./mayo/mayo25.jpg"
            rating={3.8}
          />
          <Product
            id="12326"
            title="Maillot 2 pièces - Bikini - Bijou strass à la taille et aux bretelles - Violet"
            price={34.99}
            img="./mayo/mayo26.jpg"
            rating={4.5}
          />
          <Product
            id="12317"
            title="Maillot 2 pièces - Bikini - Noeuds dans le dos et à la taille - Jaune fluo et dentelle bleu"
            price={34.99}
            img="./mayo/mayo17.jpg"
            rating={5}
          />
          <Product
            id="12327"
            title="Maillot 2 pièces - Bikini - Blanc et multicolore"
            price={29.99}
            img="./mayo/mayo27.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="12301"
            title="Maillot 2 pièces - Bikini - Rayé rose et blanc"
            price={19.99}
            img="./mayo/mayo1.jpg"
            rating={3.2}
          />
          <Product
            id="12321"
            title="Maillot 2 pièces - Bikini - Vert kaki"
            price={19.99}
            img="./mayo/mayo21.jpg"
            rating={5}
          />
          <Product
            id="12302"
            title="Maillot 2 pièces - Bikini - Noeuds à la taille - Bleu brillant"
            price={24.99}
            img="./mayo/mayo2.jpg"
            rating={5}
          />
          <Product
            id="12303"
            title="Maillot 2 pièces - Bikini - Perles et strass à la taille - Rouge"
            price={29.99}
            img="./mayo/mayo9.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="12305"
            title="Maillot 2 pièces - Bikini - Noeuds à la poitrine et à la taille - Blanc"
            price={29.99}
            img="./mayo/mayo4.jpg"
            rating={3.1}
          />
          <Product
            id="22306"
            title="Matelas gonflable pour la piscince - Avec appui-tête surélevé - Confort pour le bronzage assuré - Couleur dégradée: bleu, rose ou vert"
            price={17.49}
            img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT-iApSbuNeNK4ZWHUg9E2r6yG9I_NBtN9NrZPYzlgx1ZuIvhNCceBl8nM9-Cy453n08-tdVOQVf3N3e_RS7pnkI6DH7F-orVQA97AyTVJJQ0Kqy0aHzd97QQ&usqp=CAE"
            rating={5}
          />
          <Product
            id="12306"
            title="Maillot 2 pièces - Bikini - Attache métal doré à la poitrine et à la taille - Noir"
            price={19.99}
            img="./mayo/mayo5.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="12307"
            title="Maillot 2 pièces - Bikini - Attache métal argenté à la poitrine - Rose"
            price={9.99}
            img="./mayo/mayo6.jpg"
            rating={2.5}
          />
          <Product
            id="12308"
            title="Maillot 2 pièces - Bikini - Dentelle à la poitrine et à la taille - Bleu turquoise"
            price={29.99}
            img="./mayo/mayo7.jpg"
            rating={5}
          />
          <Product
            id="12309"
            title="Maillot 2 pièces - Bikini - Noeuds à la nuque et à la taille - Blanc, noir et rose - Imprimé florale"
            price={24.99}
            img="./mayo/mayo8.jpg"
            rating={4.5}
          />
          <Product
            id="12310"
            title="Maillot 2 pièces - Bikini - Brassière à la poitrine - Noeuds à la taille - Jaune, noir et brun - Imprimé tigré"
            price={59.99}
            img="./mayo/mayo10.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="12313"
            title="Maillot 2 pièces - Bikini - Noeuds à la taille - Violet et orange"
            price={34.99}
            img="./mayo/mayo13.jpg"
            rating={5}
          />
          <Product
            id="12314"
            title="Maillot 2 pièces - Bikini - Minimaliste - Vert d'eau"
            price={29.99}
            img="./mayo/mayo14.jpg"
            rating={4}
          />
          <Product
            id="12315"
            title="Maillot 2 pièces - Bikini - Noeuds à la taille - Fuschia"
            price={9.99}
            img="./mayo/mayo15.jpg"
            rating={2.9}
          />
          <Product
            id="12304"
            title="Maillot 2 pièces - Bikini - Noeuds à la taille - Blanc et noir - Imprimé floral"
            price={19.99}
            img="./mayo/mayo3.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="32312"
            title="Piscine en bois tropic avec parois en acier hors-sol - Dim: 6,34 x 3,99 H 1,22 m - Liner bleu en pvc - Échelle de sécurité 2 x 3 marches"
            price={4289.95}
            img="https://m1.lmcdn.fr/media/1/5d0bc846b7c505455395f414/.jpeg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="12316"
            title="Maillot 2 pièces - Bikini - Blanc, noir et rouge - Imprimé course"
            price={14.99}
            img="./mayo/mayo16.jpg"
            rating={3.6}
          />

          <Product
            id="12318"
            title="Maillot 2 pièces - Bikini - Rose, jaune et vert fluo"
            price={29.99}
            img="./mayo/mayo18.jpg"
            rating={4}
          />
          <Product
            id="12311"
            title="Mailllot 2 pièces - Bikini - Blanc et rouge - Imprimé graphique"
            price={9.99}
            img="./mayo/mayo11.jpg"
            rating={3}
          />
          <Product
            id="12312"
            title="Maillot 2 pièces - Bikini - Noir et rose"
            price={9.99}
            img="./mayo/mayo12.jpg"
            rating={2.5}
          />
        </div>

        <div className="home_row">
          <Product
            id="12334"
            title="Maillot 2 pièces - Bikini - Entrouvert au centre de la poitrine - Bordeaux"
            price={29.99}
            img="./mayo/mayo34.jpg"
            rating={4}
          />
          <Product
            id="12322"
            title="Maillot 2 pièces - Bikini - Bas effet jupe - Rose brillant"
            price={29.99}
            img="./mayo/mayo22.jpg"
            rating={4.6}
          />
          <Product
            id="12323"
            title="Maillot 2 pièces - Bikini - Jaune, orange et brun"
            price={9.99}
            img="./mayo/mayo23.jpg"
            rating={2.4}
          />
          <Product
            id="12324"
            title="Maillot 2 pièces - Bikini - Noeuds à la taille - Rouge et multicolore"
            price={19.99}
            img="./mayo/mayo24.jpg"
            rating={2.9}
          />
        </div>
        <div className="home_row">
          <Product
            id="12319"
            title="Maillot 2 pièces - Bikini - Noeuds à la taille - Blanc et noir"
            price={19.99}
            img="./mayo/mayo19.jpg"
            rating={3}
          />
          <Product
            id="42319"
            title="Crème solaire indice 50 - Pour profiter d'un bronzage en toute protection - Pour des conseils d'application, veuillez me contacter au 06...."
            price={12.75}
            img="https://cdn.shopify.com/s/files/1/0020/7598/3972/products/bedgeek-listing-images-01B_1000x1000.jpg?v=1600969479"
            rating={5}
          />
          <Product
            id="12320"
            title="Maillot 1 pièce - De bain - Deux ouvertures sur chaque côté - Bleu marine"
            price={29.99}
            img="./mayo/mayo20.jpg"
            rating={3.5}
          />
        </div>
        <div className="home_row">
          <Product
            id="12328"
            title="Maillot 2 pièces - Bikini - Noeuds à la nuque - Vert Lime"
            price={24.99}
            img="./mayo/mayo28.jpg"
            rating={5}
          />
          <Product
            id="12329"
            title="Maillot 2 pièces - Bikini - Noeud à la poitrine et à la taille - Noir"
            price={19.99}
            img="./mayo/mayo29.jpg"
            rating={3.6}
          />
          <Product
            id="12330"
            title="Maillot 2 pièces - Bikini - Noir et multicolore - Imprimé graphique"
            price={14.99}
            img="./mayo/mayo30.jpg"
            rating={4.7}
          />
          <Product
            id="12336"
            title="Maillot 2 pièces - Bikini - Cercle métal + chaine décorative à la poitrine - Jaune, noir et brun - Imprimé léopard"
            price={29.99}
            img="./mayo/mayo36.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="12331"
            title="Maillot 2 pièces - Bikini - Blanc et multicolore - Imprimé floral"
            price={14.99}
            img="./mayo/mayo31.jpg"
            rating={5}
          />
          <Product
            id="12332"
            title="Maillot 2 pièces - Bikini - Noeuds à la taille - Jaune - Imprimé floral"
            price={19.99}
            img="./mayo/mayo32.jpg"
            rating={3}
          />
          <Product
            id="12333"
            title="Maillot 1 pièce - Bikini - Assemblage original - Noir"
            price={34.99}
            img="./mayo/mayo33.jpg"
            rating={5}
          />
          <Product
            id="12335"
            title="Maillot 1 pièce - De bain - Noeuds à la nuque et dans le dos - Multicolore"
            price={19.99}
            img="./mayo/mayo35.jpg"
            rating={3.9}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
