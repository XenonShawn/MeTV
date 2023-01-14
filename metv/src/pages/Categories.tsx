import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header"
import Category from "../models/Category"
import { sampleCategories, sampleSeries } from "../models/Sample"
import SeriesModel from "../models/Series"

export default function Categories() {
  // TODO: Use this id to get the appropriate resources
  const { id } = useParams()
  const [series, setSeries] = useState<SeriesModel[]>([])
  const [category, setCategory] = useState<Category>()
  const [current, setCurrent] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    // TODO: Read from API
    console.log(123);
    fetch("http://localhost:8000/categories").then((res) => res.json()).then((data) => {
      console.log(data);  
    setCategory(data);})
    setSeries(sampleSeries)
    // setCategory(sampleCategories[0])
  }, [])

  const handler = (e: KeyboardEvent) => {
    if (!series) return
    switch (e.code) {
      case "ArrowDown":
        setCurrent(prev => {
          if (prev === series.length) {
            return 1
          } else {
            return prev + 1
          }
        })
        break;

      case "ArrowUp":
        setCurrent(prev => {
          if (prev === 1) {
            return series.length
          } else {
            return prev - 1
          }
        })
        break;

      case "Enter":
        setCurrent(prev => {
          navigate(`/series/${series[prev - 1].id}`)
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
      <h1 className="mb-4">{category?.name}</h1>
      <div className="flex flex-col flex-wrap gap-16">
        {series.map(s => (
          <div className={`flex flex-row w-full gap-x-8 ${s.id === current.toString() ? "border-black border-2" : ""}`} onClick={() => navigate(`/series/${s.id}`)}>
            <img src={s.image} alt={s.name} className="rounded-sm shadow-md hover:shadow-lg w-[25%]" />
            <div>
              <h2>{s.name}</h2>
              <p>{s.isCompleted ? "Completed" : "Airing"}</p>
              <p>Episodes {s.aired}/{s.total}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}