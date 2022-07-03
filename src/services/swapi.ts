export const swapi = {
    baseURL: "https://swapi.py4e.com/api",
    url: (endpoint?: string) => `${swapi.baseURL}${endpoint}`,
    endpoints: {
        getMovies: `/films`,
        getStarshipsByID: (ID: number) => `/starships/${ID}`,
        getMoviesByID: (ID: number) => `/films/${ID}`
    },
} as const


export interface MovieOT {
    title: string
    episode_id: number
    release_date: string
    starships: string[]
}

export interface StarshipOT {
    name: string,
    model: string,
    manufacturer: string,
    crew: string,
    passengers: string,
    films: string[],
    url:string
}


export interface Result<OT> {
    results: OT[]
    count: number,
    next: string | null,
    previous: string | null,
}