import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Category from "../models/Category";
import SeriesModel from "../models/Series";

export default function Categories() {
  // TODO: Use this id to get the appropriate resources
  const { category_id } = useParams();
  const [series, setSeries] = useState<SeriesModel[]>([]);
  const [category, setCategory] = useState<Category>();
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const temp = await (await fetch(`/api/${category_id}`)).json();
      console.log(temp);
      setSeries(temp);
      setCategory(await (await fetch(`/api/categories/${category_id}`)).json());
    })();
  }, []);

  const handler = (e: KeyboardEvent) => {
    if (!series) return;
    switch (e.code) {
      case "ArrowDown":
        setCurrent((prev) => (prev + 1) % series.length);
        break;

      case "ArrowUp":
        setCurrent((prev) => {
          if (prev === 0) {
            return series.length;
          } else {
            return prev - 1;
          }
        });
        break;

      case "Enter":
        setCurrent((prev) => {
          navigate(`/${category_id}/${series[prev].id}`);
          return prev;
        });
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handler, { passive: true });
    return () => window.removeEventListener("keydown", handler);
  }, [series]);

  return (
    <div className="container">
      <Header></Header>
      <h1 className="mb-4">{category?.name}</h1>
      <div className="flex flex-col flex-wrap gap-16">
        {series.map((s, index) => (
          <div
            className={`flex flex-row w-full gap-x-8 ${
              index === current ? "border-black border-2" : ""
            }`}
            onClick={() => navigate(`/${category_id}/${s.id}`)}
          >
            <img
              src={s.image}
              alt={s.name}
              className="rounded-sm shadow-md hover:shadow-lg w-[25%]"
            />
            <div>
              <h2>{s.name}</h2>
              <p>Episodes {s.total_episodes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
