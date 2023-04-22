import React from "react";
import Product from "./Product";

export default function BestProducts() {
  return (
    <div className="products-left" id="view">
      <h1>Nos meilleurs produits</h1>
      <div className="products-list">
        <Product
          name="Pomme de terre"
          price={1.74}
          img="https://post.healthline.com/wp-content/uploads/2020/09/AN440-Potatoes-732x549-thumb-732x549.jpg"
          unit="kg"
          id={40}
          description="Cultivées par Lucas B."
          distance="5,9km"
        />
        <Product
          name="Artichauds"
          price={1.99}
          img="https://images-prod.healthline.com/hlcmsresource/images/AN_images/artichoke-benefits-1296x728-feature.jpg"
          unit="pièce"
          id={41}
          description="Cultivées par Nathan A."
          distance="583,1km"
        />
        <Product
          name="Betteraves"
          price={3.99}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwmgTSVXABXX_TSuADe2gm0WwUh93Xt_hJg&usqp=CAU"
          unit="kg"
          id={42}
          description="Cultivées par Romain P."
          distance="187,2km"
        />
        <Product
          name="Radis"
          price={2.99}
          img="https://foodwise.org/wp-content/uploads/2021/11/radishes_multicolor-1024x683.jpg"
          unit="kg"
          id={43}
          description="Cultivés par Alexandre M."
          distance="7,6km"
        />
        <Product
          name="Tomates"
          price={2.49}
          img="https://images.immediate.co.uk/production/volatile/sites/10/2018/02/b68af5fc-6bfb-44aa-bbd9-9e6f3d02fb62-e58cd3b.jpg"
          unit="kg"
          id={44}
          description="Cultivées par Antoine R."
          distance="2,4km"
        />
        <Product
          name="Œufs de poules"
          price={0.39}
          img="https://www.bienmanger.com/tinyMceData/images/contents/851/content_lg.jpg"
          unit="pièce"
          id={45}
          description="Cultivées par Alexandre A."
          distance="12,8km"
        />
        <Product
          name="Pommes"
          price={0.89}
          img="https://img.passeportsante.net/1200x675/2021-05-03/i102145-pomme-nu.webp"
          unit="kg"
          id={46}
          description="Cultivées par Julien R."
          distance="34,1km"
        />
        <Product
          name="Ramboutans"
          price={6.89}
          img="https://lafermedeleo.eu/_media/img/medium/ramboutan-3.jpg"
          unit="kg"
          id={47}
          description="Cultivées par Kevan C."
          distance="6 752,6km"
        />
        <Product
          name="Vanille"
          price={2.39}
          img="https://www.tastingtable.com/img/gallery/why-you-should-char-your-vanilla-pods/l-intro-1660307382.jpg"
          unit="gousse"
          id={48}
          description="Cultivées par Ajanra R."
          distance="8 702,2km"
        />
      </div>
    </div>
  );
}
