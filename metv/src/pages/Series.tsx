import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { sampleSeries } from "../models/Sample";
import SeriesModel from "../models/Series";

export default function Series() {
  const { id } = useParams()
  const [series, setSeries] = useState<SeriesModel>();
  const [current, setCurrent] = useState<number>(1);
  const navigate = useNavigate()

  useEffect(() => {
    // TODO: Retrieve a specific series from API
    setSeries(sampleSeries[0])
  }, [])

  const handler = (e: KeyboardEvent) => {
    if (!series) return
    switch (e.code) {
      case "ArrowDown":
        setCurrent(prev => {
          if (prev === series.episodes.length) {
            return 1
          } else {
            return prev + 1
          }
        })
        break;

      case "ArrowUp":
        setCurrent(prev => {
          if (prev === 1) {
            return series.episodes.length
          } else {
            return prev - 1
          }
        })
        break;

      case "Enter":
        setCurrent(prev => {
          window.location.href = series.episodes[prev - 1].link
          return prev
        })
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handler, { passive: true })
    return () => window.removeEventListener("keydown", handler)
  }, [series])

  return (
    <div className="container">
      <Header></Header>
      <img src={series?.image} alt={series?.image} className="w-full h-[250px] object-cover mb-4" />
      <div className="flex justify-between items-center mb-4">
        <h1>{series?.name}</h1>
        <p>Episodes {series?.aired} / {series?.total}</p>
      </div>
      <p className="text-[#858585] mb-4">{series?.description}</p>
      <div className="flex flex-wrap gap-4">
        {series?.categories.map(c => <span key={c.id} onClick={() => navigate(`/categories/${c.id}`)} className="px-4 py-2 bg-slate-300 rounded-lg hover:cursor-pointer">{c.name}</span>)}
      </div>
      <h2 className="my-4">Episodes</h2>
      <div className="flex flex-col gap-4">
        {series?.episodes.map(ep => (
          <div key={ep.id} className={`flex flex-row gap-6 ${ep.id === current ? "border-black border-2" : ""}`} onClick={() => {
            window.location.href = ep.link
            return null
          }}>
            <img src={ep.image} alt={ep.name} />
            <div>
              <h3 className="mb-2">{ep.name}</h3>
              <p>{ep.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}