export interface FilmModel {
  id: string
    title: string
    releaseDate: string
    characters: string[]
  }

  export interface FilmDataModel {
    episode_id: string
    title: string
    release_date: string
    characters: string[]
  }

  export interface CharactersModel{
    name: string
    gender: string
    birth_year: string
    mass: string
  }