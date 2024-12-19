import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListingCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
        setLoading(false);
      })

      .catch((err) => {
        console.error("Network response was not ok");
        setLoading(false);
      });
  }, []);

  const handleCategorySelect = (category) => {
    navigate({ category });
  };

  if (loading) {
    return <div>Loading categories...</div>;
  }

  return (
    <div>
      {categories.length > 0 ? (
        categories.map((category, index) => (
          <div
            key={index}
            className="border-b-[1px] flex gap-[10px] px-[4px] py-[12px] transition hover:scale-110 hover:-translate-y-1 duration-500"
          >
            <input
              className="cursor-pointer"
              type="checkbox"
              id={category}
              onClick={() => handleCategorySelect(category)}
            />
            <label className="cursor-pointer" htmlFor={category}>
              {" "}
              {category}{" "}
            </label>
          </div>
        ))
      ) : (
        <div>No categories available.</div>
      )}
    </div>
  );
};

export default ListingCategory;
