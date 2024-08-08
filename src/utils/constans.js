export const TMDB_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWEwM2E3OGQ5NDdkNDU2ODdmN2FhYmY4YTY5NzQ2YSIsIm5iZiI6MTcyMjkyOTkwNy44MzkxNDksInN1YiI6IjY2OWJkOTkxMDZjZWZmODgzYjRmZDg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n-0g9popvU2LauPEn66pH61E0AktMN0rl8X0KGdwEF4",
  },
};


export const HEADER_LOGO = " https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"


export const MOVIE_CARDS = "https://image.tmdb.org/t/p/w500"

export const NOW_PLAYING_API = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'

export const BG_VIDEO_API = 'https://api.themoviedb.org/3/movie/'

export const POPULAR_API = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'


export const gptSearch = {
  Hindi: {
    SearchBox: "आप क्या देखना चाहते थे?",
    search: "खोज",
  },
  Spanish: {
    SearchBox: "¿Qué película quieres ver?",
    search: "buscar",
  },
  English: {
    SearchBox: "what do you want to watch",
    search: "Search",
  },
  Russian: {
    SearchBox: "что вы хотите смотреть",
    search: "поиск",
  },
};

export const select = ["Hindi", "Spanish", "English", "Russian"];



export const OPEN_AP_KEY = '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'
