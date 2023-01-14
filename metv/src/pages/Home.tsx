import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Category from "../models/Category";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handler = (e: KeyboardEvent) => {
    if (!categories) return;
    switch (e.code) {
      case "ArrowDown":
        setCurrent((prev) => (prev + 1) % categories.length);
        break;

      case "ArrowUp":
        setCurrent((prev) => {
          if (prev === 0) {
            return categories.length - 1;
          } else {
            return prev - 1;
          }
        });
        break;

      case "Enter":
        setCurrent((prev) => {
          navigate(`/${categories[prev].id}`);
          return prev;
        });
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handler, { passive: true });
    return () => window.removeEventListener("keydown", handler);
  }, [categories]);

  return (
    <div className="container">
      <Header></Header>
      <h1 className="mb-8">Categories</h1>
      <div className="flex flex-col gap-y-16 gap-x-16">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`flex flex-row items-center gap-6 ${
              index === current ? "border-black border-2" : ""
            }`}
            onClick={() => navigate(`/${category.id}`)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="shadow-md transition-all ease-in-out hover:shadow-lg"
            />
            <p className="p-4 font-bold text-3xl">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
