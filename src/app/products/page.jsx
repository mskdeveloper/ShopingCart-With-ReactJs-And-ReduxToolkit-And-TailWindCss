import React from "react";
import { products } from "@/../public/data/data.json";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4 max-[774px]:my-8 max-[774px]:px-3">
      {/* Page Tilte */}
      <h1
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 max-[774px]:text-xl 
      max-[774px]:mb-4 max-[774px]:top-0 max-[774px]:z-10 max-[774px]:pt-4"
      >
        Products
      </h1>

      <div className="flex flex-col md:flex-row gap-6 max-[774px]:gap-4">
        {/* Filter Section*/}
        <div className="min-[774px]: block w-full md:w-1/4 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Filter Options
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-gray-700">Category</h4>
              {["Furniture", "Lighting", "Decor"].map((cat) => (
                <label key={cat} className="block mt-2">
                  <input type="checkbox" className="mr-2" />
                  {cat}
                </label>
              ))}
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-700">Price Range</h4>
              {["$0 - $100", "$100 - $300", "$300+"].map((range) => (
                <label key={range} className="block mt-2">
                  <input type="checkbox" className="mr-2" />
                  {range}
                </label>
              ))}
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-700">Availablity</h4>
              {["In Stock", "Out Of Stock"].map((avail) => (
                <label key={avail} className="block mt-2">
                  <input type="checkbox" className="mr-2" />
                  {avail}
                </label>
              ))}
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-700">Material</h4>
              {["Wood", "metal", "Fabric", "leather", "Glass", "Rattan"].map(
                (mat) => (
                  <label key={mat} className="block mt-2">
                    <input type="checkbox" className="mr-2" />
                    {mat}
                  </label>
                )
              )}
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-700">Room Type</h4>
              {[
                "Living Room",
                "Bedroom",
                "Dining Room",
                "Office",
                "Kids Room",
                "Kitchen",
              ].map((room) => (
                <label key={room} className="block mt-2">
                  <input type="checkbox" className="mr-2" />
                  {room}
                </label>
              ))}
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-700">Style</h4>
              {[
                "Modern",
                "Traditional",
                "Mid Century",
                "Bohemian",
                "Rustic",
                "Minimalistic",
                "Industrial",
                "scandinavian",
              ].map((Style) => (
                <label key={Style} className="block mt-2">
                  <input type="checkbox" className="mr-2" />
                  {Style}
                </label>
              ))}
            </div>
          </div>
        </div>
        {/* Product List And Sort By Button */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6 max-[774px]:mb-4">
            <h2 className="text-xl font-semibold text-gray-800 max-[774px]:text-base">
              Product List (12)
            </h2>
            <div className="hidden min-[774px]:flex items-center gap-3">
              <span className="text-gray-700 font-medium">Sort By:</span>
              <select className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a91f64]">
                <option value="default">Newest</option>
                <option value="price-low">Price: Low To High</option>
                <option value="price-high">Price:High To Low</option>
                <option value="name">Name: A To Z</option>
              </select>
            </div>
          </div>
          {/* Products Card Section */}
          <div className="grid grid-cols-1 gap-6 max-[774px]:gap-3 min-[774px]:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="max-[774px]:h-[240px] max-[774px]:[&>div]:h-[240px]
               max-[774px]:[&>div>div>first-child]:h-[160px] max-[774px]:[&>div>h3]:text-base
               max-[774px]:[&>div>h3]:py-2 max-[774px]:[&>div>span]:text-lg max-[774px]:[&>div>div>svg]:text-lg"
              >
                <ProductCard
                  id={product.id}
                  image={product.image}
                  text={product.text}
                  price={`$${product.price}`}
                  instock={product.instock}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
