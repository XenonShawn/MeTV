import Category from "./Category"
import Episode from "./Episode"

export default interface SeriesModel {
  id: string
  name: string
  categories: Category[]
  isCompleted: boolean
  total: number
  aired: number
  image: string
  description: string
  episodes: Episode[]
}