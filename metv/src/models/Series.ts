import Episode from "./Episode";

export default interface SeriesModel {
  id: string;
  name: string;
  total_episodes: number;
  image: string;
  description: string;
  episodes: Episode[];
}
