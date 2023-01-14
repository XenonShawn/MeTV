import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import SeriesModel from "../models/Series";

export default function Series() {
  const { category_id, series_id } = useParams();
  const [series, setSeries] = useState<SeriesModel>();
  const [current, setCurrent] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const temp = await (
        await fetch(`/api/${category_id}/${series_id}`)
      ).json();
      setSeries(temp);
    })();
  }, []);

  const handler = (e: KeyboardEvent) => {
    if (series?.episodes === undefined) return;
    switch (e.code) {
      case "ArrowDown":
        setCurrent((prev) => (prev + 1) % series.episodes.length);
        break;

      case "ArrowUp":
        setCurrent((prev) => {
          if (prev === 0) {
            return series.episodes.length - 1;
          } else {
            return prev - 1;
          }
        });
        break;

      case "Enter":
        setCurrent((prev) => {
          window.location.href = series.episodes[prev].link;
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
      <img
        src={series?.image}
        alt={series?.image}
        className="w-full h-[250px] object-cover mb-4"
      />
      <p className="text-[#858585] mb-4">{series?.description}</p>
      <h2 className="my-4">Episodes</h2>
      <div className="flex flex-col gap-4">
        {series?.episodes.map((ep, index) => (
          <div
            key={ep.id}
            className={`flex flex-row gap-6 ${
              index === current ? "border-black border-2" : ""
            }`}
            onClick={() => {
              window.location.href = ep.link;
              return null;
            }}
          >
            <div>
              <img src={ep.image} alt={ep.name} />
            </div>
            <div>
              <h3 className="mb-2">{ep.name}</h3>
              <p>{ep.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
