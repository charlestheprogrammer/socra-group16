import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Deal from "../components/Deal";

export default function Product() {
  const navigate = useNavigate();
  const { productName } = useParams();
  return (
    <main>
      <section>
        <h1>Promotions</h1>
        <div className="deals">
          <Deal
            name="Carotte"
            price={3.37}
            promotionPrice={2.92}
            image="https://cdn.foodaciously.com/static/stories/92b1a695-549f-4844-89e4-d14bbd83635b/carrots2-b8c3b42bd952e8e533cf78f7fb806f0b-1920-q60.jpg"
            unit="kg"
            id={1}
          />
          <Deal
            name="Pomme de terre"
            price={2.34}
            promotionPrice={1.74}
            image="https://post.healthline.com/wp-content/uploads/2020/09/AN440-Potatoes-732x549-thumb-732x549.jpg"
            unit="kg"
            id={2}
          />
          <Deal
            name="Pomme"
            price={1.99}
            promotionPrice={1.49}
            image="https://img.passeportsante.net/1200x675/2021-05-03/i102145-pomme-nu.webp"
            unit="kg"
            id={3}
          />
        </div>
      </section>
      <section>
        <div className="products">
          <div className="filters">
            <h5>Trier</h5>
            <div className="sort">
              <div>
                <input type="radio" name="sort" id="sort1" />
                <label htmlFor="sort1">Prix croissant</label>
              </div>
              <div>
                <input type="radio" name="sort" id="sort2" />
                <label htmlFor="sort2">Promotions d'abord</label>
              </div>
              <div>
                <input type="radio" name="sort" id="sort3" />
                <label htmlFor="sort3">Proximité avec moi </label>
              </div>
              <div>
                <input type="radio" name="sort" id="sort4" />
                <label htmlFor="sort4">Prix décroissant</label>
              </div>
            </div>
            <h5>Catégorie</h5>
            <div className="category" socra="product-navigation">
              <div>
                <input
                  type="radio"
                  name="category"
                  id="category1"
                  onClick={() => navigate("/product/vegetable")}
                />
                <label htmlFor="category1">Fruits & Légumes</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="category"
                  id="category2"
                  onClick={() => navigate("/product/chicken")}
                />
                <label htmlFor="category2">Volailles</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="category"
                  id="category3"
                  onClick={() => navigate("/product/red-meat")}
                />
                <label htmlFor="category3">Viande rouge</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="category"
                  id="category4"
                  onClick={() => navigate("/product/drink")}
                />
                <label htmlFor="category4">Boissons</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="category"
                  id="category5"
                  onClick={() => navigate("/product/wine")}
                />
                <label htmlFor="category5">Vin & Spiritieux</label>
              </div>
            </div>
          </div>
          <div className="products-left" id="view">
            <h1>Nos meilleurs {productName || "produits"}</h1>
            <div className="products-list">
              <div className="product" socra="product-card">
                <div className="img">
                  <img
                    src="https://post.healthline.com/wp-content/uploads/2020/09/AN440-Potatoes-732x549-thumb-732x549.jpg"
                    alt=""
                  />
                </div>
                <div className="price">
                  <span className="amount">1,74€</span>/kg
                </div>
                <h6>Pommes de terre</h6>
                <p>Cultivées par Lucas B. • 5,9km</p>
                <button>
                  Ajouter au panier <img src="/images/arrow_white.svg" alt="" />
                </button>
              </div>
              <div className="product" socra="product-card">
                <div className="img">
                  <img
                    src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/artichoke-benefits-1296x728-feature.jpg"
                    alt=""
                  />
                </div>
                <div className="price">
                  <span className="amount">1,99€</span>/pièce
                </div>
                <h6>Artichauds</h6>
                <p>Cultivés par Nathan A. • 23,1km</p>
                <button>
                  Ajouter au panier <img src="/images/arrow_white.svg" alt="" />
                </button>
              </div>
              <div className="product" socra="product-card">
                <div className="img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwmgTSVXABXX_TSuADe2gm0WwUh93Xt_hJg&usqp=CAU"
                    alt=""
                  />
                </div>
                <div className="price">
                  <span className="amount">3,99€</span>/kg
                </div>
                <h6>Betteraves</h6>
                <p>Cultivées par Romain P. • 187,2km</p>
                <button>
                  Ajouter au panier <img src="/images/arrow_white.svg" alt="" />
                </button>
              </div>
              <div className="product" socra="product-card">
                <div className="img">
                  <img
                    src="https://foodwise.org/wp-content/uploads/2021/11/radishes_multicolor-1024x683.jpg"
                    alt=""
                  />
                </div>
                <div className="price">
                  <span className="amount">2,99€</span>/kg
                </div>
                <h6>Radis</h6>
                <p>Cultivés par Alexandre M. • 7,6km</p>
                <button>
                  Ajouter au panier <img src="/images/arrow_white.svg" alt="" />
                </button>
              </div>
              <div className="product" socra="product-card">
                <div className="img">
                  <img
                    src="https://images.immediate.co.uk/production/volatile/sites/10/2018/02/b68af5fc-6bfb-44aa-bbd9-9e6f3d02fb62-e58cd3b.jpg"
                    alt=""
                  />
                </div>
                <div className="price">
                  <span className="amount">2,49€</span>/kg
                </div>
                <h6>Tomates</h6>
                <p>Cultivés par Antoine R. • 2,4km</p>
                <button>
                  Ajouter au panier <img src="/images/arrow_white.svg" alt="" />
                </button>
              </div>
              <div className="product" socra="product-card">
                <div className="img">
                  <img
                    src="https://www.bienmanger.com/tinyMceData/images/contents/851/content_lg.jpg"
                    alt=""
                  />
                </div>
                <div className="price">
                  <span className="amount">0,39€</span>/pièce
                </div>
                <h6>Œufs de poules</h6>
                <p>Cultivées par Alexandre A. • 12,8km</p>
                <button>
                  Ajouter au panier <img src="/images/arrow_white.svg" alt="" />
                </button>
              </div>
              <div className="product" socra="product-card">
                <div className="img">
                  <img
                    src="https://img.passeportsante.net/1200x675/2021-05-03/i102145-pomme-nu.webp"
                    alt=""
                  />
                </div>
                <div className="price">
                  <span className="amount">0,89€</span>/kg
                </div>
                <h6>Pommes</h6>
                <p>Cultivées par Julien R. • 34,1km</p>
                <button>
                  Ajouter au panier <img src="/images/arrow_white.svg" alt="" />
                </button>
              </div>
              <div className="product" socra="product-card">
                <div className="img">
                  <img
                    src="https://lafermedeleo.eu/_media/img/medium/ramboutan-3.jpg"
                    alt=""
                  />
                </div>
                <div className="price">
                  <span className="amount">6,89€</span>/kg
                </div>
                <h6>Ramboutans</h6>
                <p>Cultivés par Kevan C. • 6 752,6km</p>
                <button>
                  Ajouter au panier <img src="/images/arrow_white.svg" alt="" />
                </button>
              </div>
              <div className="product" socra="product-card">
                <div className="img">
                  <img
                    src="https://www.tastingtable.com/img/gallery/why-you-should-char-your-vanilla-pods/l-intro-1660307382.jpg"
                    alt=""
                  />
                </div>
                <div className="price">
                  <span className="amount">2,39€</span>/gousse
                </div>
                <h6>Vanille</h6>
                <p>Cultivée par Ajanra R. • 8 702,2km</p>
                <button>
                  Ajouter au panier <img src="/images/arrow_white.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
