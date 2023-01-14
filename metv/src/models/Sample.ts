import SeriesModel from "./Series"

export const sampleCategories = [
  {
    id: "1",
    name: "Horror",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Mystery",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    name: "Crime",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    name: "Action",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "5",
    name: "Comedy",
    image: "https://via.placeholder.com/150",
  },
]

export const sampleEpisodes = [
  {
    id: 1,
    name: "Episode 1",
    description: "Loream ipsum dolor",
    image: "https://via.placeholder.com/150",
    link: "https://google.com"
  },
  {
    id: 2,
    name: "Episode 2",
    description: "Loream ipsum dolor",
    image: "https://via.placeholder.com/150",
    link: "https://yahoo.com"
  },
  {
    id: 3,
    name: "Episode 3",
    description: "Loream ipsum dolor",
    image: "https://via.placeholder.com/150",
    link: "https://google.com"
  },
]

export const sampleSeries: SeriesModel[] = [
  {
    id: "1",
    name: "Lorem ipsum",
    categories: [
      {
        id: "5",
        name: "Comedy",
        image: "https://via.placeholder.com/150",
      },
      {
        id: "2",
        name: "Mystery",
        image: "https://via.placeholder.com/150",
      }
    ],
    isCompleted: false,
    aired: 5,
    total: 11,
    image: "https://via.placeholder.com/150",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue risus sed elit consectetur, vel efficitur enim pharetra. Nulla dignissim egestas volutpat. Donec risus turpis, sagittis at metus ac, elementum sollicitudin erat. Integer eget odio vitae nulla ultricies dictum. In consequat magna urna, porta viverra velit scelerisque commodo. Suspendisse congue tristique ex a aliquam. Vivamus hendrerit, felis semper convallis auctor, justo lectus posuere tellus, a congue ex odio at nisl.",
    episodes: sampleEpisodes,
  },
  {
    id: "2",
    name: "Lorem ipsum 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue risus sed elit consectetur, vel efficitur enim pharetra. Nulla dignissim egestas volutpat. Donec risus turpis, sagittis at metus ac, elementum sollicitudin erat. Integer eget odio vitae nulla ultricies dictum. In consequat magna urna, porta viverra velit scelerisque commodo. Suspendisse congue tristique ex a aliquam. Vivamus hendrerit, felis semper convallis auctor, justo lectus posuere tellus, a congue ex odio at nisl.",
    categories: [
      {
        id: "5",
        name: "Comedy",
        image: "https://via.placeholder.com/150",
      },
      {
        id: "2",
        name: "Mystery",
        image: "https://via.placeholder.com/150",
      }
    ],
    isCompleted: true,
    aired: 6,
    total: 6,
    image: "https://via.placeholder.com/150",
    episodes: sampleEpisodes,
  }
]