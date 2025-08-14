/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** The type of reviews to filter by. Defaults to anime. */
export enum TopReviewsTypeEnum {
  Anime = 'anime',
  Manga = 'manga',
}

/** Top items filter types */
export enum TopMangaFilter {
  Publishing = 'publishing',
  Upcoming = 'upcoming',
  Bypopularity = 'bypopularity',
  Favorite = 'favorite',
}

/** Top items filter types */
export enum TopAnimeFilter {
  Airing = 'airing',
  Upcoming = 'upcoming',
  Bypopularity = 'bypopularity',
  Favorite = 'favorite',
}

/** Search query sort direction */
export enum SearchQuerySort {
  Desc = 'desc',
  Asc = 'asc',
}

/** Producers Search Query Order By */
export enum ProducersQueryOrderby {
  MalId = 'mal_id',
  Count = 'count',
  Favorites = 'favorites',
  Established = 'established',
}

/** Available People order_by properties */
export enum PeopleSearchQueryOrderby {
  MalId = 'mal_id',
  Name = 'name',
  Birthday = 'birthday',
  Favorites = 'favorites',
}

/** Available Manga types */
export enum MangaSearchQueryType {
  Manga = 'manga',
  Novel = 'novel',
  Lightnovel = 'lightnovel',
  Oneshot = 'oneshot',
  Doujin = 'doujin',
  Manhwa = 'manhwa',
  Manhua = 'manhua',
}

/** Available Manga statuses */
export enum MangaSearchQueryStatus {
  Publishing = 'publishing',
  Complete = 'complete',
  Hiatus = 'hiatus',
  Discontinued = 'discontinued',
  Upcoming = 'upcoming',
}

/** Available Manga order_by properties */
export enum MangaSearchQueryOrderby {
  MalId = 'mal_id',
  Title = 'title',
  StartDate = 'start_date',
  EndDate = 'end_date',
  Chapters = 'chapters',
  Volumes = 'volumes',
  Score = 'score',
  ScoredBy = 'scored_by',
  Rank = 'rank',
  Popularity = 'popularity',
  Members = 'members',
  Favorites = 'favorites',
}

/** User's anime list status filter options */
export enum UserMangaListStatusFilter {
  All = 'all',
  Reading = 'reading',
  Completed = 'completed',
  Onhold = 'onhold',
  Dropped = 'dropped',
  Plantoread = 'plantoread',
}

/** Order by magazine data */
export enum MagazinesQueryOrderby {
  MalId = 'mal_id',
  Name = 'name',
  Count = 'count',
}

/** Filter genres by type */
export enum GenreQueryFilter {
  Genres = 'genres',
  ExplicitGenres = 'explicit_genres',
  Themes = 'themes',
  Demographics = 'demographics',
}

/** Users Search Query Gender. */
export enum UsersSearchQueryGender {
  Any = 'any',
  Male = 'male',
  Female = 'female',
  Nonbinary = 'nonbinary',
}

/** Club Search Query Type */
export enum ClubSearchQueryType {
  Public = 'public',
  Private = 'private',
  Secret = 'secret',
}

/** Club Search Query OrderBy */
export enum ClubSearchQueryOrderby {
  MalId = 'mal_id',
  Name = 'name',
  MembersCount = 'members_count',
  Created = 'created',
}

/** Club Search Query Category */
export enum ClubSearchQueryCategory {
  Anime = 'anime',
  Manga = 'manga',
  ActorsAndArtists = 'actors_and_artists',
  Characters = 'characters',
  CitiesAndNeighborhoods = 'cities_and_neighborhoods',
  Companies = 'companies',
  Conventions = 'conventions',
  Games = 'games',
  Japan = 'japan',
  Music = 'music',
  Other = 'other',
  Schools = 'schools',
}

/** Available Character order_by properties */
export enum CharactersSearchQueryOrderby {
  MalId = 'mal_id',
  Name = 'name',
  Favorites = 'favorites',
}

/** Available Anime types */
export enum AnimeSearchQueryType {
  Tv = 'tv',
  Movie = 'movie',
  Ova = 'ova',
  Special = 'special',
  Ona = 'ona',
  Music = 'music',
  Cm = 'cm',
  Pv = 'pv',
  TvSpecial = 'tv_special',
}

/** Available Anime statuses */
export enum AnimeSearchQueryStatus {
  Airing = 'airing',
  Complete = 'complete',
  Upcoming = 'upcoming',
}

/** Available Anime audience ratings<br><br><b>Ratings</b><br><ul><li>G - All Ages</li><li>PG - Children</li><li>PG-13 - Teens 13 or older</li><li>R - 17+ (violence & profanity)</li><li>R+ - Mild Nudity</li><li>Rx - Hentai</li></ul> */
export enum AnimeSearchQueryRating {
  G = 'g',
  Pg = 'pg',
  Pg13 = 'pg13',
  R17 = 'r17',
  R = 'r',
  Rx = 'rx',
}

/** Available Anime order_by properties */
export enum AnimeSearchQueryOrderby {
  MalId = 'mal_id',
  Title = 'title',
  StartDate = 'start_date',
  EndDate = 'end_date',
  Episodes = 'episodes',
  Score = 'score',
  ScoredBy = 'scored_by',
  Rank = 'rank',
  Popularity = 'popularity',
  Members = 'members',
  Favorites = 'favorites',
}

/** User's anime list status filter options */
export enum UserAnimeListStatusFilter {
  All = 'all',
  Watching = 'watching',
  Completed = 'completed',
  Onhold = 'onhold',
  Dropped = 'dropped',
  Plantowatch = 'plantowatch',
}

/** Anime Episodes Resource */
export type AnimeEpisodes = {
  data?: {
    /** MyAnimeList ID */
    mal_id?: number;
    /** MyAnimeList URL. This is the URL of the episode's video. If there is no video url, this will be null. */
    url?: string | null;
    /** Title */
    title?: string;
    /** Title Japanese */
    title_japanese?: string | null;
    /** title_romanji */
    title_romanji?: string | null;
    /** Aired Date ISO8601 */
    aired?: string | null;
    /**
     * Aggregated episode score (1.00 - 5.00) based on MyAnimeList user voting
     * @min 1
     * @max 5
     */
    score?: float | null;
    /** Filler episode */
    filler?: boolean;
    /** Recap episode */
    recap?: boolean;
    /** Episode discussion forum URL */
    forum_url?: string | null;
  }[];
} & Pagination;

/** Anime News Resource */
export type AnimeNews = Pagination & News;

/** Anime Videos Episodes Resource */
export type AnimeVideosEpisodes = {
  data?: {
    /** MyAnimeList ID or Episode Number */
    mal_id?: number;
    /** Episode Title */
    title?: string;
    /** Episode Subtitle */
    episode?: string;
    /** Episode Page URL */
    url?: string;
    images?: CommonImages;
  }[];
} & Pagination;

/** Character Pictures */
export interface CharacterPictures {
  data?: {
    /** Default JPG Image Size URL */
    image_url?: string | null;
    /** Large JPG Image Size URL */
    large_image_url?: string | null;
  }[];
}

/** Club Member */
export interface ClubMember {
  data?: {
    /** User's username */
    username?: string;
    /** User URL */
    url?: string;
    images?: UserImages;
  }[];
}

/** Manga News Resource */
export type MangaNews = Pagination & News;

/** Manga Pictures */
export interface MangaPictures {
  data?: MangaImages[];
}

/** Character Pictures */
export interface PersonPictures {
  data?: PeopleImages[];
}

/** Random Resources */
export interface Random {
  data?: (Anime | Manga | Character | Person)[];
}

/** Anime resources currently airing */
export type Schedules = {
  data?: Anime[];
} & PaginationPlus;

/** User Results */
export type UsersSearch = {
  data?: {
    /** MyAnimeList URL */
    url?: string;
    /** MyAnimeList Username */
    username?: string;
    images?: UserImages;
    /** Last Online Date ISO8601 */
    last_online?: string;
  }[];
} & Pagination;

/** List of available seasons */
export interface Seasons {
  data?: {
    /** Year */
    year?: number;
    /** List of available seasons */
    seasons?: string[];
  }[];
}

/** Anime & Manga Reviews Resource */
export interface ReviewsCollection {
  data?: (AnimeReview | MangaReview)[];
}

/** User Friends */
export type UserFriends = {
  data?: ({
    user?: UserMeta;
  } & {
    /** Last Online Date ISO8601 format */
    last_online?: string;
    /** Friends Since Date ISO8601 format */
    friends_since?: string;
  })[];
} & Pagination;

/** User Clubs */
export type UserClubs = {
  data?: {
    /** MyAnimeList ID */
    mal_id?: number;
    /** Club Name */
    name?: string;
    /** Club URL */
    url?: string;
  }[];
} & Pagination;

/** Watch Episodes */
export type WatchEpisodes = {
  data?: {
    entry?: AnimeMeta;
    /** Recent Episodes (max 2 listed) */
    episodes?: {
      /** MyAnimeList ID */
      mal_id?: string;
      /** MyAnimeList URL */
      url?: string;
      /** Episode Title */
      title?: string;
      /** For MyAnimeList Premium Users */
      premium?: boolean;
    }[];
    /** Region Locked Episode */
    region_locked?: boolean;
  }[];
} & Pagination;

/** Watch Promos */
export type WatchPromos = Pagination & {
  data?: {
    /** Promo Title */
    title?: string;
    entry?: AnimeMeta;
    /** Youtube Details */
    trailer?: Trailer;
  }[];
};

/** Anime Characters Resource */
export interface AnimeCharacters {
  data?: {
    /** Character details */
    character?: {
      /** MyAnimeList ID */
      mal_id?: number;
      /** MyAnimeList URL */
      url?: string;
      images?: CharacterImages;
      /** Character Name */
      name?: string;
    };
    /** Character's Role */
    role?: string;
    voice_actors?: {
      person?: {
        mal_id?: number;
        url?: string;
        images?: PeopleImages;
        name?: string;
      };
      language?: string;
    }[];
  }[];
}

/** Anime Collection Resource */
export type AnimeSearch = {
  data?: Anime[];
} & PaginationPlus;

/** Anime Episode Resource */
export interface AnimeEpisode {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList URL */
  url?: string;
  /** Title */
  title?: string;
  /** Title Japanese */
  title_japanese?: string | null;
  /** title_romanji */
  title_romanji?: string | null;
  /** Episode duration in seconds */
  duration?: number | null;
  /** Aired Date ISO8601 */
  aired?: string | null;
  /** Filler episode */
  filler?: boolean;
  /** Recap episode */
  recap?: boolean;
  /** Episode Synopsis */
  synopsis?: string | null;
}

/** Full anime Resource */
export interface AnimeFull {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList URL */
  url?: string;
  images?: AnimeImages;
  /** Youtube Details */
  trailer?: TrailerBase;
  /** Whether the entry is pending approval on MAL or not */
  approved?: boolean;
  /** All titles */
  titles?: Title[];
  /**
   * Title
   * @deprecated
   */
  title?: string;
  /**
   * English Title
   * @deprecated
   */
  title_english?: string | null;
  /**
   * Japanese Title
   * @deprecated
   */
  title_japanese?: string | null;
  /**
   * Other Titles
   * @deprecated
   */
  title_synonyms?: string[];
  /** Anime Type */
  type?: 'TV' | 'OVA' | 'Movie' | 'Special' | 'ONA' | 'Music' | null;
  /** Original Material/Source adapted from */
  source?: string | null;
  /** Episode count */
  episodes?: number | null;
  /** Airing status */
  status?: 'Finished Airing' | 'Currently Airing' | 'Not yet aired' | null;
  /** Airing boolean */
  airing?: boolean;
  /** Date range */
  aired?: Daterange;
  /** Parsed raw duration */
  duration?: string | null;
  /** Anime audience rating */
  rating?:
    | 'G - All Ages'
    | 'PG - Children'
    | 'PG-13 - Teens 13 or older'
    | 'R - 17+ (violence & profanity)'
    | 'R+ - Mild Nudity'
    | 'Rx - Hentai'
    | null;
  /**
   * Score
   * @format float
   */
  score?: number | null;
  /** Number of users */
  scored_by?: number | null;
  /** Ranking */
  rank?: number | null;
  /** Popularity */
  popularity?: number | null;
  /** Number of users who have added this entry to their list */
  members?: number | null;
  /** Number of users who have favorited this entry */
  favorites?: number | null;
  /** Synopsis */
  synopsis?: string | null;
  /** Background */
  background?: string | null;
  /** Season */
  season?: 'summer' | 'winter' | 'spring' | 'fall' | null;
  /** Year */
  year?: number | null;
  /** Broadcast Details */
  broadcast?: Broadcast;
  producers?: MalUrl[];
  licensors?: MalUrl[];
  studios?: MalUrl[];
  genres?: MalUrl[];
  explicit_genres?: MalUrl[];
  themes?: MalUrl[];
  demographics?: MalUrl[];
  relations?: {
    /** Relation type */
    relation?: string;
    entry?: MalUrl[];
  }[];
  theme?: {
    openings?: string[];
    endings?: string[];
  };
  external?: {
    name?: string;
    url?: string;
  }[];
  streaming?: {
    name?: string;
    url?: string;
  }[];
}

/** Anime Relations */
export interface AnimeRelations {
  data?: {
    /** Relation type */
    relation?: string;
    entry?: MalUrl[];
  }[];
}

/** Anime Resource */
export interface Anime {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList URL */
  url?: string;
  images?: AnimeImages;
  /** Youtube Details */
  trailer?: TrailerBase;
  /** Whether the entry is pending approval on MAL or not */
  approved?: boolean;
  /** All titles */
  titles?: Title[];
  /**
   * Title
   * @deprecated
   */
  title?: string;
  /**
   * English Title
   * @deprecated
   */
  title_english?: string | null;
  /**
   * Japanese Title
   * @deprecated
   */
  title_japanese?: string | null;
  /**
   * Other Titles
   * @deprecated
   */
  title_synonyms?: string[];
  /** Anime Type */
  type?: 'TV' | 'OVA' | 'Movie' | 'Special' | 'ONA' | 'Music' | null;
  /** Original Material/Source adapted from */
  source?: string | null;
  /** Episode count */
  episodes?: number | null;
  /** Airing status */
  status?: 'Finished Airing' | 'Currently Airing' | 'Not yet aired' | null;
  /** Airing boolean */
  airing?: boolean;
  /** Date range */
  aired?: Daterange;
  /** Parsed raw duration */
  duration?: string | null;
  /** Anime audience rating */
  rating?:
    | 'G - All Ages'
    | 'PG - Children'
    | 'PG-13 - Teens 13 or older'
    | 'R - 17+ (violence & profanity)'
    | 'R+ - Mild Nudity'
    | 'Rx - Hentai'
    | null;
  /**
   * Score
   * @format float
   */
  score?: number | null;
  /** Number of users */
  scored_by?: number | null;
  /** Ranking */
  rank?: number | null;
  /** Popularity */
  popularity?: number | null;
  /** Number of users who have added this entry to their list */
  members?: number | null;
  /** Number of users who have favorited this entry */
  favorites?: number | null;
  /** Synopsis */
  synopsis?: string | null;
  /** Background */
  background?: string | null;
  /** Season */
  season?: 'summer' | 'winter' | 'spring' | 'fall' | null;
  /** Year */
  year?: number | null;
  /** Broadcast Details */
  broadcast?: Broadcast;
  producers?: MalUrl[];
  licensors?: MalUrl[];
  studios?: MalUrl[];
  genres?: MalUrl[];
  explicit_genres?: MalUrl[];
  themes?: MalUrl[];
  demographics?: MalUrl[];
}

/** Anime Staff Resource */
export interface AnimeStaff {
  data?: {
    /** Person details */
    person?: {
      /** MyAnimeList ID */
      mal_id?: number;
      /** MyAnimeList URL */
      url?: string;
      images?: PeopleImages;
      /** Name */
      name?: string;
    };
    /** Staff Positions */
    positions?: string[];
  }[];
}

/** Anime Statistics Resource */
export interface AnimeStatistics {
  data?: {
    /** Number of users watching the resource */
    watching?: number;
    /** Number of users who have completed the resource */
    completed?: number;
    /** Number of users who have put the resource on hold */
    on_hold?: number;
    /** Number of users who have dropped the resource */
    dropped?: number;
    /** Number of users who have planned to watch the resource */
    plan_to_watch?: number;
    /** Total number of users who have the resource added to their lists */
    total?: number;
    scores?: {
      /** Scoring value */
      score?: number;
      /** Number of votes for this score */
      votes?: number;
      /**
       * Percentage of votes for this score
       * @format float
       */
      percentage?: number;
    }[];
  };
}

/** Anime Opening and Ending Themes */
export interface AnimeThemes {
  data?: {
    openings?: string[];
    endings?: string[];
  };
}

/** Anime Videos Resource */
export interface AnimeVideos {
  data?: {
    promo?: {
      /** Title */
      title?: string;
      /** Youtube Details */
      trailer?: Trailer;
    }[];
    episodes?: {
      /** MyAnimeList ID */
      mal_id?: number;
      /** MyAnimeList URL */
      url?: string;
      /** Title */
      title?: string;
      /** Episode */
      episode?: string;
      images?: CommonImages;
    }[];
    music_videos?: {
      /** Title */
      title?: string;
      /** Youtube Details */
      video?: Trailer;
      meta?: {
        title?: string | null;
        author?: string | null;
      };
    }[];
  };
}

/** Character casted in anime */
export interface CharacterAnime {
  data?: {
    /** Character's Role */
    role?: string;
    anime?: AnimeMeta;
  }[];
}

/** Characters Search Resource */
export type CharactersSearch = {
  data?: Character[];
} & PaginationPlus;

/** Character Resource */
export interface CharacterFull {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList URL */
  url?: string;
  images?: CharacterImages;
  /** Name */
  name?: string;
  /** Name */
  name_kanji?: string | null;
  /** Other Names */
  nicknames?: string[];
  /** Number of users who have favorited this entry */
  favorites?: number;
  /** Biography */
  about?: string | null;
  anime?: {
    /** Character's Role */
    role?: string;
    anime?: AnimeMeta;
  }[];
  manga?: {
    /** Character's Role */
    role?: string;
    manga?: MangaMeta;
  }[];
  voices?: {
    /** Character's Role */
    language?: string;
    person?: PersonMeta;
  }[];
}

/** Character casted in manga */
export interface CharacterManga {
  data?: {
    /** Character's Role */
    role?: string;
    manga?: MangaMeta;
  }[];
}

/** Character Resource */
export interface Character {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList URL */
  url?: string;
  images?: CharacterImages;
  /** Name */
  name?: string;
  /** Name */
  name_kanji?: string | null;
  /** Other Names */
  nicknames?: string[];
  /** Number of users who have favorited this entry */
  favorites?: number;
  /** Biography */
  about?: string | null;
}

/** Character voice actors */
export interface CharacterVoiceActors {
  data?: {
    /** Character's Role */
    language?: string;
    person?: PersonMeta;
  }[];
}

/** Clubs Search Resource */
export type ClubsSearch = {
  data?: Club[];
} & Pagination;

/** Club Relations */
export interface ClubRelations {
  data?: {
    anime?: MalUrl[];
    manga?: MalUrl[];
    characters?: MalUrl[];
  };
}

/** Club Resource */
export interface Club {
  /** MyAnimeList ID */
  mal_id?: number;
  /** Club name */
  name?: string;
  /** Club URL */
  url?: string;
  images?: CommonImages;
  /** Number of club members */
  members?: number;
  /** Club Category */
  category?:
    | 'actors & artists'
    | 'anime'
    | 'characters'
    | 'cities & neighborhoods'
    | 'companies'
    | 'conventions'
    | 'games'
    | 'japan'
    | 'manga'
    | 'music'
    | 'others'
    | 'schools';
  /** Date Created ISO8601 */
  created?: string;
  /** Club access */
  access?: 'public' | 'private' | 'secret';
}

/** Club Staff Resource */
export interface ClubStaff {
  data?: {
    /** User URL */
    url?: string;
    /** User's username */
    username?: string;
  }[];
}

/** Youtube Details */
export type Trailer = TrailerBase & TrailerImages;

/** Youtube Details */
export interface TrailerBase {
  /** YouTube ID */
  youtube_id?: string | null;
  /** YouTube URL */
  url?: string | null;
  /** Parsed Embed URL */
  embed_url?: string | null;
}

/** Youtube Images */
export interface TrailerImages {
  images?: {
    /** Default Image Size URL (120x90) */
    image_url?: string | null;
    /** Small Image Size URL (640x480) */
    small_image_url?: string | null;
    /** Medium Image Size URL (320x180) */
    medium_image_url?: string | null;
    /** Large Image Size URL (480x360) */
    large_image_url?: string | null;
    /** Maximum Image Size URL (1280x720) */
    maximum_image_url?: string | null;
  };
}

/** Date range */
export interface Daterange {
  /** Date ISO8601 */
  from?: string | null;
  /** Date ISO8601 */
  to?: string | null;
  /** Date Prop */
  prop?: {
    /** Date Prop From */
    from?: {
      /** Day */
      day?: number | null;
      /** Month */
      month?: number | null;
      /** Year */
      year?: number | null;
    };
    /** Date Prop To */
    to?: {
      /** Day */
      day?: number | null;
      /** Month */
      month?: number | null;
      /** Year */
      year?: number | null;
    };
    /** Raw parsed string */
    string?: string | null;
  };
}

/** Broadcast Details */
export interface Broadcast {
  /** Day of the week */
  day?: string | null;
  /** Time in 24 hour format */
  time?: string | null;
  /** Timezone (Tz Database format https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) */
  timezone?: string | null;
  /** Raw parsed broadcast string */
  string?: string | null;
}

/** Parsed URL Data */
export interface MalUrl {
  /** MyAnimeList ID */
  mal_id?: number;
  /** Type of resource */
  type?: string;
  /** Resource Name/Title */
  name?: string;
  /** MyAnimeList URL */
  url?: string;
}

/** Parsed URL Data */
export interface MalUrl2 {
  /** MyAnimeList ID */
  mal_id?: number;
  /** Type of resource */
  type?: string;
  /** Resource Name/Title */
  title?: string;
  /** MyAnimeList URL */
  url?: string;
}

/** Entry Meta data */
export interface EntryMeta {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList URL */
  url?: string;
  /** Image URL */
  image_url?: string;
  /** Entry Name/Title */
  name?: string;
}

/** Related resources */
export interface Relation {
  /** Relation type */
  relation?: string;
  /** Related entries */
  entry?: MalUrl[];
}

export interface Pagination {
  pagination?: {
    last_visible_page?: number;
    has_next_page?: boolean;
  };
}

export interface PaginationPlus {
  pagination?: {
    last_visible_page?: number;
    has_next_page?: boolean;
    current_page?: number;
    items?: {
      count?: number;
      total?: number;
      per_page?: number;
    };
  };
}

export interface UserMeta {
  /** MyAnimeList Username */
  username?: string;
  /** MyAnimeList Profile URL */
  url?: string;
  images?: UserImages;
}

/** User Meta By ID */
export interface UserById {
  /** MyAnimeList URL */
  url?: string;
  /** MyAnimeList Username */
  username?: string;
}

export interface UserImages {
  /** Available images in JPG */
  jpg?: {
    /** Image URL JPG */
    image_url?: string | null;
  };
  /** Available images in WEBP */
  webp?: {
    /** Image URL WEBP */
    image_url?: string | null;
  };
}

export interface AnimeMeta {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList URL */
  url?: string;
  images?: AnimeImages;
  /** Entry title */
  title?: string;
}

export interface MangaMeta {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList URL */
  url?: string;
  images?: MangaImages;
  /** Entry title */
  title?: string;
}

export interface CharacterMeta {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList URL */
  url?: string;
  images?: CharacterImages;
  /** Entry name */
  name?: string;
}

export interface PersonMeta {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList URL */
  url?: string;
  images?: PeopleImages;
  /** Entry name */
  name?: string;
}

export interface AnimeImages {
  /** Available images in JPG */
  jpg?: {
    /** Image URL JPG */
    image_url?: string | null;
    /** Small Image URL JPG */
    small_image_url?: string | null;
    /** Image URL JPG */
    large_image_url?: string | null;
  };
  /** Available images in WEBP */
  webp?: {
    /** Image URL WEBP */
    image_url?: string | null;
    /** Small Image URL WEBP */
    small_image_url?: string | null;
    /** Image URL WEBP */
    large_image_url?: string | null;
  };
}

export interface MangaImages {
  /** Available images in JPG */
  jpg?: {
    /** Image URL JPG */
    image_url?: string | null;
    /** Small Image URL JPG */
    small_image_url?: string | null;
    /** Image URL JPG */
    large_image_url?: string | null;
  };
  /** Available images in WEBP */
  webp?: {
    /** Image URL WEBP */
    image_url?: string | null;
    /** Small Image URL WEBP */
    small_image_url?: string | null;
    /** Image URL WEBP */
    large_image_url?: string | null;
  };
}

export interface CharacterImages {
  /** Available images in JPG */
  jpg?: {
    /** Image URL JPG */
    image_url?: string | null;
    /** Small Image URL JPG */
    small_image_url?: string | null;
  };
  /** Available images in WEBP */
  webp?: {
    /** Image URL WEBP */
    image_url?: string | null;
    /** Small Image URL WEBP */
    small_image_url?: string | null;
  };
}

export interface PeopleImages {
  /** Available images in JPG */
  jpg?: {
    /** Image URL JPG */
    image_url?: string | null;
  };
}

export interface CommonImages {
  /** Available images in JPG */
  jpg?: {
    /** Image URL JPG */
    image_url?: string | null;
  };
}

export interface Title {
  /** Title type */
  type?: string;
  /** Title value */
  title?: string;
}

/** External links */
export interface ExternalLinks {
  data?: {
    name?: string;
    url?: string;
  }[];
}

/** Forum Resource */
export interface Forum {
  data?: {
    /** MyAnimeList ID */
    mal_id?: number;
    /** MyAnimeList URL */
    url?: string;
    /** Title */
    title?: string;
    /** Post Date ISO8601 */
    date?: string;
    /** Author MyAnimeList Username */
    author_username?: string;
    /** Author Profile URL */
    author_url?: string;
    /** Comment count */
    comments?: number;
    /** Last comment details */
    last_comment?: {
      /** Last comment URL */
      url?: string;
      /** Author MyAnimeList Username */
      author_username?: string;
      /** Author Profile URL */
      author_url?: string;
      /** Last comment date posted ISO8601 */
      date?: string | null;
    };
  }[];
}

/** Genres Collection Resource */
export interface Genres {
  data?: Genre[];
}

/** Genre Resource */
export interface Genre {
  /** MyAnimeList ID */
  mal_id?: number;
  /** Genre Name */
  name?: string;
  /** MyAnimeList URL */
  url?: string;
  /** Genre's entry count */
  count?: number;
}

/** Magazine Collection Resource */
export type Magazines = {
  data?: Magazine[];
} & Pagination;

/** Magazine Resource */
export interface Magazine {
  /** MyAnimeList ID */
  mal_id?: number;
  /** Magazine Name */
  name?: string;
  /** MyAnimeList URL */
  url?: string;
  /** Magazine's manga count */
  count?: number;
}

/** Manga Characters Resource */
export interface MangaCharacters {
  data?: {
    character?: CharacterMeta;
    /** Character's Role */
    role?: string;
  }[];
}

/** Manga Search Resource */
export type MangaSearch = {
  data?: Manga[];
} & PaginationPlus;

/** Manga Resource */
export interface MangaFull {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList URL */
  url?: string;
  images?: MangaImages;
  /** Whether the entry is pending approval on MAL or not */
  approved?: boolean;
  /** All Titles */
  titles?: Title[];
  /**
   * Title
   * @deprecated
   */
  title?: string;
  /**
   * English Title
   * @deprecated
   */
  title_english?: string | null;
  /**
   * Japanese Title
   * @deprecated
   */
  title_japanese?: string | null;
  /**
   * Other Titles
   * @deprecated
   */
  title_synonyms?: string[];
  /** Manga Type */
  type?:
    | 'Manga'
    | 'Novel'
    | 'Light Novel'
    | 'One-shot'
    | 'Doujinshi'
    | 'Manhua'
    | 'Manhwa'
    | 'OEL'
    | null;
  /** Chapter count */
  chapters?: number | null;
  /** Volume count */
  volumes?: number | null;
  /** Publishing status */
  status?:
    | 'Finished'
    | 'Publishing'
    | 'On Hiatus'
    | 'Discontinued'
    | 'Not yet published';
  /** Publishing boolean */
  publishing?: boolean;
  /** Date range */
  published?: Daterange;
  /**
   * Score
   * @format float
   */
  score?: number | null;
  /** Number of users */
  scored_by?: number | null;
  /** Ranking */
  rank?: number | null;
  /** Popularity */
  popularity?: number | null;
  /** Number of users who have added this entry to their list */
  members?: number | null;
  /** Number of users who have favorited this entry */
  favorites?: number | null;
  /** Synopsis */
  synopsis?: string | null;
  /** Background */
  background?: string | null;
  authors?: MalUrl[];
  serializations?: MalUrl[];
  genres?: MalUrl[];
  explicit_genres?: MalUrl[];
  themes?: MalUrl[];
  demographics?: MalUrl[];
  relations?: {
    /** Relation type */
    relation?: string;
    entry?: MalUrl[];
  }[];
  external?: {
    name?: string;
    url?: string;
  }[];
}

/** Manga Resource */
export interface Manga {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList URL */
  url?: string;
  images?: MangaImages;
  /** Whether the entry is pending approval on MAL or not */
  approved?: boolean;
  /** All Titles */
  titles?: Title[];
  /**
   * Title
   * @deprecated
   */
  title?: string;
  /**
   * English Title
   * @deprecated
   */
  title_english?: string | null;
  /**
   * Japanese Title
   * @deprecated
   */
  title_japanese?: string | null;
  /** Manga Type */
  type?:
    | 'Manga'
    | 'Novel'
    | 'Light Novel'
    | 'One-shot'
    | 'Doujinshi'
    | 'Manhua'
    | 'Manhwa'
    | 'OEL'
    | null;
  /** Chapter count */
  chapters?: number | null;
  /** Volume count */
  volumes?: number | null;
  /** Publishing status */
  status?:
    | 'Finished'
    | 'Publishing'
    | 'On Hiatus'
    | 'Discontinued'
    | 'Not yet published';
  /** Publishing boolean */
  publishing?: boolean;
  /** Date range */
  published?: Daterange;
  /**
   * Score
   * @format float
   */
  score?: number | null;
  /** Number of users */
  scored_by?: number | null;
  /** Ranking */
  rank?: number | null;
  /** Popularity */
  popularity?: number | null;
  /** Number of users who have added this entry to their list */
  members?: number | null;
  /** Number of users who have favorited this entry */
  favorites?: number | null;
  /** Synopsis */
  synopsis?: string | null;
  /** Background */
  background?: string | null;
  authors?: MalUrl[];
  serializations?: MalUrl[];
  genres?: MalUrl[];
  explicit_genres?: MalUrl[];
  themes?: MalUrl[];
  demographics?: MalUrl[];
}

/** Manga Statistics Resource */
export interface MangaStatistics {
  data?: {
    /** Number of users reading the resource */
    reading?: number;
    /** Number of users who have completed the resource */
    completed?: number;
    /** Number of users who have put the resource on hold */
    on_hold?: number;
    /** Number of users who have dropped the resource */
    dropped?: number;
    /** Number of users who have planned to read the resource */
    plan_to_read?: number;
    /** Total number of users who have the resource added to their lists */
    total?: number;
    scores?: {
      /** Scoring value */
      score?: number;
      /** Number of votes for this score */
      votes?: number;
      /**
       * Percentage of votes for this score
       * @format float
       */
      percentage?: number;
    }[];
  };
}

/** More Info Resource */
export interface Moreinfo {
  data?: {
    /** Additional information on the entry */
    moreinfo?: string | null;
  };
}

export interface News {
  data?: {
    /** MyAnimeList ID */
    mal_id?: number;
    /** MyAnimeList URL */
    url?: string;
    /** Title */
    title?: string;
    /** Post Date ISO8601 */
    date?: string;
    /** Author MyAnimeList Username */
    author_username?: string;
    /** Author Profile URL */
    author_url?: string;
    /** Forum topic URL */
    forum_url?: string;
    images?: CommonImages;
    /** Comment count */
    comments?: number;
    /** Excerpt */
    excerpt?: string;
  }[];
}

/** Person anime staff positions */
export interface PersonAnime {
  data?: {
    /** Person's position */
    position?: string;
    anime?: AnimeMeta;
  }[];
}

/** People Search */
export type PeopleSearch = {
  data?: Person[];
} & PaginationPlus;

/** Person Resource */
export interface PersonFull {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList URL */
  url?: string;
  /** Person's website URL */
  website_url?: string | null;
  images?: PeopleImages;
  /** Name */
  name?: string;
  /** Given Name */
  given_name?: string | null;
  /** Family Name */
  family_name?: string | null;
  /** Other Names */
  alternate_names?: string[];
  /** Birthday Date ISO8601 */
  birthday?: string | null;
  /** Number of users who have favorited this entry */
  favorites?: number;
  /** Biography */
  about?: string | null;
  anime?: {
    /** Person's position */
    position?: string;
    anime?: AnimeMeta;
  }[];
  manga?: {
    /** Person's position */
    position?: string;
    manga?: MangaMeta;
  }[];
  voices?: {
    /** Person's Character's role in the anime */
    role?: string;
    anime?: AnimeMeta;
    character?: CharacterMeta;
  }[];
}

/** Person's mangaography */
export interface PersonManga {
  data?: {
    /** Person's position */
    position?: string;
    manga?: MangaMeta;
  }[];
}

/** Person Resource */
export interface Person {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList URL */
  url?: string;
  /** Person's website URL */
  website_url?: string | null;
  images?: PeopleImages;
  /** Name */
  name?: string;
  /** Given Name */
  given_name?: string | null;
  /** Family Name */
  family_name?: string | null;
  /** Other Names */
  alternate_names?: string[];
  /** Birthday Date ISO8601 */
  birthday?: string | null;
  /** Number of users who have favorited this entry */
  favorites?: number;
  /** Biography */
  about?: string | null;
}

/** Person's voice acting roles */
export interface PersonVoiceActingRoles {
  data?: {
    /** Person's Character's role in the anime */
    role?: string;
    anime?: AnimeMeta;
    character?: CharacterMeta;
  }[];
}

/** Pictures Resource */
export interface Pictures {
  data?: {
    images?: AnimeImages;
  }[];
}

/** Pictures Resource */
export interface PicturesVariants {
  data?: {
    images?: CommonImages;
  }[];
}

/** Producers Collection Resource */
export type Producers = {
  data?: Producer[];
} & Pagination;

/** Producers Resource */
export interface ProducerFull {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList URL */
  url?: string;
  /** All titles */
  titles?: Title[];
  images?: CommonImages;
  /** Producers's member favorites count */
  favorites?: number;
  /** Producers's anime count */
  count?: number;
  /** Established Date ISO8601 */
  established?: string | null;
  /** About the Producer */
  about?: string | null;
  external?: {
    name?: string;
    url?: string;
  }[];
}

/** Producers Resource */
export interface Producer {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList URL */
  url?: string;
  /** All titles */
  titles?: Title[];
  images?: CommonImages;
  /** Producers's member favorites count */
  favorites?: number;
  /** Producers's anime count */
  count?: number;
  /** Established Date ISO8601 */
  established?: string | null;
  /** About the Producer */
  about?: string | null;
}

export interface UserAbout {
  data?: {
    /** User About. NOTE: About information is customizable by users through BBCode on MyAnimeList. This means users can add multimedia content, different text sizes, etc. Due to this freeform, Jikan returns parsed HTML. Validate on your end! */
    about?: string | null;
  }[];
}

export interface UserFavorites {
  /** Favorite Anime */
  anime?: ({
    type?: string;
    start_year?: number;
  } & AnimeMeta)[];
  /** Favorite Manga */
  manga?: ({
    type?: string;
    start_year?: number;
  } & MangaMeta)[];
  /** Favorite Characters */
  characters?: (CharacterMeta & MalUrl2)[];
  /** Favorite People */
  people?: CharacterMeta[];
}

/** Transform the resource into an array. */
export interface UserProfileFull {
  /** MyAnimeList ID */
  mal_id?: number | null;
  /** MyAnimeList Username */
  username?: string;
  /** MyAnimeList URL */
  url?: string;
  images?: UserImages;
  /** Last Online Date ISO8601 */
  last_online?: string | null;
  /** User Gender */
  gender?: string | null;
  /** Birthday Date ISO8601 */
  birthday?: string | null;
  /** Location */
  location?: string | null;
  /** Joined Date ISO8601 */
  joined?: string | null;
  statistics?: {
    /** Anime Statistics */
    anime?: {
      /**
       * Number of days spent watching Anime
       * @format float
       */
      days_watched?: number;
      /**
       * Mean Score
       * @format float
       */
      mean_score?: number;
      /** Anime Watching */
      watching?: number;
      /** Anime Completed */
      completed?: number;
      /** Anime On-Hold */
      on_hold?: number;
      /** Anime Dropped */
      dropped?: number;
      /** Anime Planned to Watch */
      plan_to_watch?: number;
      /** Total Anime entries on User list */
      total_entries?: number;
      /** Anime re-watched */
      rewatched?: number;
      /** Number of Anime Episodes Watched */
      episodes_watched?: number;
    };
    /** Manga Statistics */
    manga?: {
      /**
       * Number of days spent reading Manga
       * @format float
       */
      days_read?: number;
      /**
       * Mean Score
       * @format float
       */
      mean_score?: number;
      /** Manga Reading */
      reading?: number;
      /** Manga Completed */
      completed?: number;
      /** Manga On-Hold */
      on_hold?: number;
      /** Manga Dropped */
      dropped?: number;
      /** Manga Planned to Read */
      plan_to_read?: number;
      /** Total Manga entries on User list */
      total_entries?: number;
      /** Manga re-read */
      reread?: number;
      /** Number of Manga Chapters Read */
      chapters_read?: number;
      /** Number of Manga Volumes Read */
      volumes_read?: number;
    };
  };
  external?: {
    name?: string;
    url?: string;
  }[];
}

export interface UserHistory {
  data?: History[];
}

/** Transform the resource into an array. */
export interface History {
  /** Parsed URL Data */
  entry?: MalUrl;
  /** Number of episodes/chapters watched/read */
  increment?: number;
  /** Date ISO8601 */
  date?: string;
}

export interface UserUpdates {
  data?: {
    /** Last updated Anime */
    anime?: ({
      entry?: AnimeMeta;
    } & {
      score?: number | null;
      status?: string;
      episodes_seen?: number | null;
      episodes_total?: number | null;
      /** ISO8601 format */
      date?: string;
    })[];
    /** Last updated Manga */
    manga?: ({
      entry?: MangaMeta;
    } & {
      score?: number | null;
      status?: string;
      chapters_read?: number | null;
      chapters_total?: number | null;
      volumes_read?: number | null;
      volumes_total?: number | null;
      /** ISO8601 format */
      date?: string;
    })[];
  };
}

export interface UserProfile {
  /** MyAnimeList ID */
  mal_id?: number | null;
  /** MyAnimeList Username */
  username?: string;
  /** MyAnimeList URL */
  url?: string;
  images?: UserImages;
  /** Last Online Date ISO8601 */
  last_online?: string | null;
  /** User Gender */
  gender?: string | null;
  /** Birthday Date ISO8601 */
  birthday?: string | null;
  /** Location */
  location?: string | null;
  /** Joined Date ISO8601 */
  joined?: string | null;
}

/** Transform the resource into an array. */
export interface UsersTemp {
  data?: {
    /** MyAnimeList ID */
    mal_id?: number;
    /** MyAnimeList Username */
    username?: string;
    /** MyAnimeList URL */
    url?: string;
    /** Images */
    images?: {
      /** Available images in JPG */
      jpg?: {
        /** Image URL JPG (225x335) */
        image_url?: string;
      };
      /** Available images in WEBP */
      webp?: {
        /** Image URL WEBP (225x335) */
        image_url?: string;
      };
    };
    /** Last Online Date ISO8601 */
    last_online?: string;
    /** User Gender */
    gender?: string;
    /** Birthday Date ISO8601 */
    birthday?: string;
    /** Location */
    location?: string;
    /** Joined Date ISO8601 */
    joined?: string;
    /** Anime Stats */
    anime_stats?: {
      /**
       * Number of days spent watching Anime
       * @format float
       */
      days_watched?: number;
      /**
       * Mean Score
       * @format float
       */
      mean_score?: number;
      /** Anime Watching */
      watching?: number;
      /** Anime Completed */
      completed?: number;
      /** Anime On-Hold */
      on_hold?: number;
      /** Anime Dropped */
      dropped?: number;
      /** Anime Planned to Watch */
      plan_to_watch?: number;
      /** Total Anime entries on User list */
      total_entries?: number;
      /** Anime re-watched */
      rewatched?: number;
      /** Number of Anime Episodes Watched */
      episodes_watched?: number;
    };
    /** Manga Stats */
    manga_stats?: {
      /**
       * Number of days spent reading Manga
       * @format float
       */
      days_read?: number;
      /**
       * Mean Score
       * @format float
       */
      mean_score?: number;
      /** Manga Reading */
      reading?: number;
      /** Manga Completed */
      completed?: number;
      /** Manga On-Hold */
      on_hold?: number;
      /** Manga Dropped */
      dropped?: number;
      /** Manga Planned to Read */
      plan_to_read?: number;
      /** Total Manga entries on User list */
      total_entries?: number;
      /** Manga re-read */
      reread?: number;
      /** Number of Manga Chapters Read */
      chapters_read?: number;
      /** Number of Manga Volumes Read */
      volumes_read?: number;
    };
    /** Favorite entries */
    favorites?: {
      /** Favorite Anime */
      anime?: EntryMeta[];
      /** Favorite Manga */
      manga?: EntryMeta[];
      /** Favorite Characters */
      characters?: EntryMeta[];
      /** Favorite People */
      people?: EntryMeta[];
    };
    /** User About. NOTE: About information is customizable by users through BBCode on MyAnimeList. This means users can add multimedia content, different text sizes, etc. Due to this freeform, Jikan returns parsed HTML. Validate on your end! */
    about?: string;
  }[];
}

export interface UserStatistics {
  data?: {
    /** Anime Statistics */
    anime?: {
      /**
       * Number of days spent watching Anime
       * @format float
       */
      days_watched?: number;
      /**
       * Mean Score
       * @format float
       */
      mean_score?: number;
      /** Anime Watching */
      watching?: number;
      /** Anime Completed */
      completed?: number;
      /** Anime On-Hold */
      on_hold?: number;
      /** Anime Dropped */
      dropped?: number;
      /** Anime Planned to Watch */
      plan_to_watch?: number;
      /** Total Anime entries on User list */
      total_entries?: number;
      /** Anime re-watched */
      rewatched?: number;
      /** Number of Anime Episodes Watched */
      episodes_watched?: number;
    };
    /** Manga Statistics */
    manga?: {
      /**
       * Number of days spent reading Manga
       * @format float
       */
      days_read?: number;
      /**
       * Mean Score
       * @format float
       */
      mean_score?: number;
      /** Manga Reading */
      reading?: number;
      /** Manga Completed */
      completed?: number;
      /** Manga On-Hold */
      on_hold?: number;
      /** Manga Dropped */
      dropped?: number;
      /** Manga Planned to Read */
      plan_to_read?: number;
      /** Total Manga entries on User list */
      total_entries?: number;
      /** Manga re-read */
      reread?: number;
      /** Number of Manga Chapters Read */
      chapters_read?: number;
      /** Number of Manga Volumes Read */
      volumes_read?: number;
    };
  };
}

/** Recommendations */
export type Recommendations = {
  data?: {
    /** MAL IDs of recommendations is both of the MAL ID's with a `-` delimiter */
    mal_id?: string;
    /** Array of 2 entries that are being recommended to each other */
    entry?: (AnimeMeta | MangaMeta)[];
    /** Recommendation context provided by the user */
    content?: string;
    /** User Meta By ID */
    user?: UserById;
  }[];
} & Pagination;

/** Entry Recommendations Resource */
export interface EntryRecommendations {
  data?: {
    /** Recommendation MyAnimeList URL */
    url?: string;
    /** Number of users who have recommended this entry */
    votes?: number;
  };
}

export interface MangaReview {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList review URL */
  url?: string;
  /** Entry type */
  type?: string;
  /** User reaction count on the review */
  reactions?: {
    /** Overall reaction count */
    overall?: number;
    /** Nice reaction count */
    nice?: number;
    /** Love it reaction count */
    love_it?: number;
    /** Funny reaction count */
    funny?: number;
    /** Confusing reaction count */
    confusing?: number;
    /** Informative reaction count */
    informative?: number;
    /** Well written reaction count */
    well_written?: number;
    /** Creative reaction count */
    creative?: number;
  };
  /** Review created date ISO8601 */
  date?: string;
  /** Review content */
  review?: string;
  /** Number of user votes on the Review */
  score?: number;
  /** Review tags */
  tags?: string[];
  /** The review contains spoiler */
  is_spoiler?: boolean;
  /** The review was made before the entry was completed */
  is_preliminary?: boolean;
}

export interface AnimeReview {
  /** MyAnimeList ID */
  mal_id?: number;
  /** MyAnimeList review URL */
  url?: string;
  /** Entry type */
  type?: string;
  /** User reaction count on the review */
  reactions?: {
    /** Overall reaction count */
    overall?: number;
    /** Nice reaction count */
    nice?: number;
    /** Love it reaction count */
    love_it?: number;
    /** Funny reaction count */
    funny?: number;
    /** Confusing reaction count */
    confusing?: number;
    /** Informative reaction count */
    informative?: number;
    /** Well written reaction count */
    well_written?: number;
    /** Creative reaction count */
    creative?: number;
  };
  /** Review created date ISO8601 */
  date?: string;
  /** Review content */
  review?: string;
  /** Number of user votes on the Review */
  score?: number;
  /** Review tags */
  tags?: string[];
  /** The review contains spoiler */
  is_spoiler?: boolean;
  /** The review was made before the entry was completed */
  is_preliminary?: boolean;
  /** Number of episodes watched */
  episodes_watched?: number;
}

/** Anime Reviews Resource */
export type AnimeReviews = {
  data?: ({
    user?: UserMeta;
  } & AnimeReview)[];
} & Pagination;

/** Manga Reviews Resource */
export type MangaReviews = {
  data?: ({
    user?: UserMeta;
  } & MangaReview)[];
} & Pagination;

/** Streaming links */
export interface StreamingLinks {
  data?: {
    name?: string;
    url?: string;
  }[];
}

/** Anime User Updates Resource */
export type AnimeUserupdates = {
  data?: {
    user?: UserMeta;
    /** User Score */
    score?: number | null;
    /** User list status */
    status?: string;
    /** Number of episodes seen */
    episodes_seen?: number | null;
    /** Total number of episodes */
    episodes_total?: number | null;
    /** Last updated date ISO8601 */
    date?: string;
  }[];
} & Pagination;

/** Manga User Updates Resource */
export type MangaUserupdates = {
  data?: {
    user?: UserMeta;
    /** User Score */
    score?: number | null;
    /** User list status */
    status?: string;
    /** Number of volumes read */
    volumes_read?: number;
    /** Total number of volumes */
    volumes_total?: number;
    /** Number of chapters read */
    chapters_read?: number;
    /** Total number of chapters */
    chapters_total?: number;
    /** Last updated date ISO8601 */
    date?: string;
  }[];
} & Pagination;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  JsonApi = 'application/vnd.api+json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'https://api.jikan.moe/v4';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Jikan API
 * @version 4.0.0
 * @license MIT (https://github.com/jikan-me/jikan-rest/blob/master/LICENSE)
 * @termsOfService https://jikan.moe/terms
 * @baseUrl https://api.jikan.moe/v4
 * @externalDocs https://jikan.moe
 * @contact API Support (Discord) (http://discord.jikan.moe)
 *
 * [Jikan](https://jikan.moe) is an **Unofficial** MyAnimeList API.
 * It scrapes the website to satisfy the need for a complete API - which MyAnimeList lacks.
 *
 * # Information
 *
 * ⚡ Jikan is powered by its awesome backers - 🙏 [Become a backer](https://www.patreon.com/jikan)
 *
 * ## Rate Limiting
 *
 * | Duration | Requests |
 * |----|----|
 * | Daily | **Unlimited** |
 * | Per Minute | 60 requests |
 * | Per Second | 3 requests |
 *
 * Note: It's still possible to get rate limited from MyAnimeList.net instead.
 *
 *
 * ## JSON Notes
 * - Any property (except arrays or objects) whose value does not exist or is undetermined, will be `null`.
 * - Any array or object property whose value does not exist or is undetermined, will be empty.
 * - Any `score` property whose value does not exist or is undetermined, will be `0`.
 * - All dates and timestamps are returned in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format and in UTC timezone
 *
 * ## Caching
 * By **CACHING**, we refer to the data parsed from MyAnimeList which is stored temporarily on our servers to provide better API performance.
 *
 * All requests are cached for **24 hours**.
 *
 * The following response headers will detail cache information.
 *
 * | Header | Remarks |
 * | ---- | ---- |
 * | `Expires` | Cache expiry date |
 * | `Last-Modified` | Cache set date |
 * | `X-Request-Fingerprint` | Unique request fingerprint (only for cachable requests, not queries) |
 *
 *
 * Note: `X-Request-Fingerprint` will only be available on single resource requests and their child endpoints. e.g `/anime/1`, `/anime/1/relations`.
 * They won't be available on pages which perform queries, like /anime, or /top/anime, etc.
 *
 * ## Allowed HTTP(s) requests
 *
 * **Jikan REST API does not provide authenticated requests for MyAnimeList.** This means you can not use it to update your anime/manga list.
 * Only GET requests are supported which return READ-ONLY data.
 *
 * ## HTTP Responses
 *
 * All error responses are accompanied by a JSON Error response.
 *
 * | Exception | HTTP Status | Remarks |
 * | ---- | ---- | ---- |
 * | N/A | `200 - OK` | The request was successful |
 * | N/A | `304 - Not Modified` | You have the latest data (Cache Validation response) |
 * | `BadRequestException`,`ValidationException` | `400 - Bad Request` | You've made an invalid request. Recheck documentation |
 * | `BadResponseException` | `404 - Not Found` | The resource was not found or MyAnimeList responded with a `404` |
 * | `BadRequestException` | `405 - Method Not Allowed` | Requested Method is not supported for resource. Only `GET` requests are allowed |
 * | `RateLimitException` | `429 - Too Many Request` | You are being rate limited by Jikan or MyAnimeList is rate-limiting our servers (specified in the error response) |
 * | `UpstreamException`,`ParserException`,etc. | `500 - Internal Server Error` | Something didn't work. Try again later. If you see an error response with a `report_url` URL, please click on it to open an auto-generated GitHub issue |
 * | `ServiceUnavailableException` | `503 - Service Unavailable` | In most cases this is intentionally done if the service is down for maintenance. |
 *
 * ## JSON Error Response
 *
 * ```json
 *  {
 *      "status": 500,
 *      "type": "InternalException",
 *      "message": "Exception Message",
 *      "error": "Exception Trace",
 *      "report_url": "https://github.com..."
 *   }
 * ```
 *
 * | Property | Remarks |
 * | ---- | ---- |
 * | `status` | Returned HTTP Status Code |
 * | `type` | Thrown Exception |
 * | `message` | Human-readable error message |
 * | `error` | Error response and trace from the API |
 * | `report_url` | Clicking this would redirect you to a generated GitHub issue |
 *
 *
 * ## Cache Validation
 *
 * - All requests return a `ETag` header which is an MD5 hash of the response
 * - You can use this hash to verify if there's new or updated content by suppliying it as the value for the `If-None-Match` in your next request header
 * - You will get a HTTP `304 - Not Modified` response if the content has not changed
 * - If the content has changed, you'll get a HTTP `200 - OK` response with the updated JSON response
 *
 * ![Cache Validation](https://i.imgur.com/925ozVn.png 'Cache Validation')
 *
 * ## Disclaimer
 *
 * - Jikan is not affiliated with MyAnimeList.net.
 * - Jikan is a free, open-source API. Please use it responsibly.
 *
 * ----
 *
 * By using the API, you are agreeing to Jikan's [terms of use](https://jikan.moe/terms) policy.
 *
 * [v3 Documentation](https://jikan.docs.apiary.io/) - [Wrappers/SDKs](https://github.com/jikan-me/jikan#wrappers) - [Report an issue](https://github.com/jikan-me/jikan-rest/issues/new) - [Host your own server](https://github.com/jikan-me/jikan-rest)
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  anime = {
    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeFullById
     * @request GET:/anime/{id}/full
     */
    getAnimeFullById: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Full anime Resource */
          data?: AnimeFull;
        },
        void
      >({
        path: `/anime/${id}/full`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeById
     * @request GET:/anime/{id}
     */
    getAnimeById: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Anime Resource */
          data?: Anime;
        },
        void
      >({
        path: `/anime/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeCharacters
     * @request GET:/anime/{id}/characters
     */
    getAnimeCharacters: (id: number, params: RequestParams = {}) =>
      this.request<AnimeCharacters, void>({
        path: `/anime/${id}/characters`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeStaff
     * @request GET:/anime/{id}/staff
     */
    getAnimeStaff: (id: number, params: RequestParams = {}) =>
      this.request<AnimeStaff, void>({
        path: `/anime/${id}/staff`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeEpisodes
     * @request GET:/anime/{id}/episodes
     */
    getAnimeEpisodes: (
      id: number,
      query?: {
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<AnimeEpisodes, void>({
        path: `/anime/${id}/episodes`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeEpisodeById
     * @request GET:/anime/{id}/episodes/{episode}
     */
    getAnimeEpisodeById: (
      id: number,
      episode: number,
      params: RequestParams = {}
    ) =>
      this.request<
        {
          /** Anime Episode Resource */
          data?: AnimeEpisode;
        },
        void
      >({
        path: `/anime/${id}/episodes/${episode}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeNews
     * @request GET:/anime/{id}/news
     */
    getAnimeNews: (
      id: number,
      query?: {
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<AnimeNews, void>({
        path: `/anime/${id}/news`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeForum
     * @request GET:/anime/{id}/forum
     */
    getAnimeForum: (
      id: number,
      query?: {
        /** Filter topics */
        filter?: 'all' | 'episode' | 'other';
      },
      params: RequestParams = {}
    ) =>
      this.request<Forum, void>({
        path: `/anime/${id}/forum`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeVideos
     * @request GET:/anime/{id}/videos
     */
    getAnimeVideos: (id: number, params: RequestParams = {}) =>
      this.request<AnimeVideos, void>({
        path: `/anime/${id}/videos`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeVideosEpisodes
     * @request GET:/anime/{id}/videos/episodes
     */
    getAnimeVideosEpisodes: (
      id: number,
      query?: {
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<AnimeVideosEpisodes, void>({
        path: `/anime/${id}/videos/episodes`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimePictures
     * @request GET:/anime/{id}/pictures
     */
    getAnimePictures: (id: number, params: RequestParams = {}) =>
      this.request<PicturesVariants, void>({
        path: `/anime/${id}/pictures`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeStatistics
     * @request GET:/anime/{id}/statistics
     */
    getAnimeStatistics: (id: number, params: RequestParams = {}) =>
      this.request<AnimeStatistics, void>({
        path: `/anime/${id}/statistics`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeMoreInfo
     * @request GET:/anime/{id}/moreinfo
     */
    getAnimeMoreInfo: (id: number, params: RequestParams = {}) =>
      this.request<Moreinfo, void>({
        path: `/anime/${id}/moreinfo`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeRecommendations
     * @request GET:/anime/{id}/recommendations
     */
    getAnimeRecommendations: (id: number, params: RequestParams = {}) =>
      this.request<EntryRecommendations, void>({
        path: `/anime/${id}/recommendations`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeUserUpdates
     * @request GET:/anime/{id}/userupdates
     */
    getAnimeUserUpdates: (
      id: number,
      query?: {
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<AnimeUserupdates, void>({
        path: `/anime/${id}/userupdates`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeReviews
     * @request GET:/anime/{id}/reviews
     */
    getAnimeReviews: (
      id: number,
      query?: {
        page?: number;
        /** Any reviews left during an ongoing anime/manga, those reviews are tagged as preliminary. NOTE: Preliminary reviews are not returned by default so if the entry is airing/publishing you need to add this otherwise you will get an empty list. e.g usage: `?preliminary=true` */
        preliminary?: boolean;
        /** Any reviews that are tagged as a spoiler. Spoiler reviews are not returned by default. e.g usage: `?spoiler=true` */
        spoilers?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<AnimeReviews, void>({
        path: `/anime/${id}/reviews`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeRelations
     * @request GET:/anime/{id}/relations
     */
    getAnimeRelations: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          data?: Relation[];
        },
        any
      >({
        path: `/anime/${id}/relations`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeThemes
     * @request GET:/anime/{id}/themes
     */
    getAnimeThemes: (id: number, params: RequestParams = {}) =>
      this.request<AnimeThemes, void>({
        path: `/anime/${id}/themes`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeExternal
     * @request GET:/anime/{id}/external
     */
    getAnimeExternal: (id: number, params: RequestParams = {}) =>
      this.request<ExternalLinks, void>({
        path: `/anime/${id}/external`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeStreaming
     * @request GET:/anime/{id}/streaming
     */
    getAnimeStreaming: (id: number, params: RequestParams = {}) =>
      this.request<ExternalLinks, void>({
        path: `/anime/${id}/streaming`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags anime
     * @name GetAnimeSearch
     * @request GET:/anime
     */
    getAnimeSearch: (
      query?: {
        /** This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved` */
        unapproved?: boolean;
        page?: number;
        limit?: number;
        q?: string;
        /** Available Anime types */
        type?: AnimeSearchQueryType;
        score?: number;
        /** Set a minimum score for results. */
        min_score?: number;
        /** Set a maximum score for results */
        max_score?: number;
        /** Available Anime statuses */
        status?: AnimeSearchQueryStatus;
        /** Available Anime audience ratings<br><br><b>Ratings</b><br><ul><li>G - All Ages</li><li>PG - Children</li><li>PG-13 - Teens 13 or older</li><li>R - 17+ (violence & profanity)</li><li>R+ - Mild Nudity</li><li>Rx - Hentai</li></ul> */
        rating?: AnimeSearchQueryRating;
        /** Filter out Adult entries */
        sfw?: boolean;
        /** Filter by genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3 */
        genres?: string;
        /** Exclude genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3 */
        genres_exclude?: string;
        /** Available Anime order_by properties */
        order_by?: AnimeSearchQueryOrderby;
        /** Search query sort direction */
        sort?: SearchQuerySort;
        /** Return entries starting with the given letter */
        letter?: string;
        /** Filter by producer(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3 */
        producers?: string;
        /** Filter by starting date. Format: YYYY-MM-DD. e.g `2022`, `2005-05`, `2005-01-01` */
        start_date?: string;
        /** Filter by ending date. Format: YYYY-MM-DD. e.g `2022`, `2005-05`, `2005-01-01` */
        end_date?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<AnimeSearch, void>({
        path: `/anime`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  characters = {
    /**
     * No description
     *
     * @tags characters
     * @name GetCharacterFullById
     * @request GET:/characters/{id}/full
     */
    getCharacterFullById: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Character Resource */
          data?: CharacterFull;
        },
        void
      >({
        path: `/characters/${id}/full`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags characters
     * @name GetCharacterById
     * @request GET:/characters/{id}
     */
    getCharacterById: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Character Resource */
          data?: Character;
        },
        void
      >({
        path: `/characters/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags characters
     * @name GetCharacterAnime
     * @request GET:/characters/{id}/anime
     */
    getCharacterAnime: (id: number, params: RequestParams = {}) =>
      this.request<CharacterAnime, void>({
        path: `/characters/${id}/anime`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags characters
     * @name GetCharacterManga
     * @request GET:/characters/{id}/manga
     */
    getCharacterManga: (id: number, params: RequestParams = {}) =>
      this.request<CharacterManga, void>({
        path: `/characters/${id}/manga`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags characters
     * @name GetCharacterVoiceActors
     * @request GET:/characters/{id}/voices
     */
    getCharacterVoiceActors: (id: number, params: RequestParams = {}) =>
      this.request<CharacterVoiceActors, void>({
        path: `/characters/${id}/voices`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags characters
     * @name GetCharacterPictures
     * @request GET:/characters/{id}/pictures
     */
    getCharacterPictures: (id: number, params: RequestParams = {}) =>
      this.request<CharacterPictures, void>({
        path: `/characters/${id}/pictures`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags characters
     * @name GetCharactersSearch
     * @request GET:/characters
     */
    getCharactersSearch: (
      query?: {
        page?: number;
        limit?: number;
        q?: string;
        /** Available Character order_by properties */
        order_by?: CharactersSearchQueryOrderby;
        /** Search query sort direction */
        sort?: SearchQuerySort;
        /** Return entries starting with the given letter */
        letter?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CharactersSearch, void>({
        path: `/characters`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  clubs = {
    /**
     * No description
     *
     * @tags clubs
     * @name GetClubsById
     * @request GET:/clubs/{id}
     */
    getClubsById: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Club Resource */
          data?: Club;
        },
        void
      >({
        path: `/clubs/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags clubs
     * @name GetClubMembers
     * @request GET:/clubs/{id}/members
     */
    getClubMembers: (
      id: number,
      query?: {
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Pagination & ClubMember, void>({
        path: `/clubs/${id}/members`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags clubs
     * @name GetClubStaff
     * @request GET:/clubs/{id}/staff
     */
    getClubStaff: (id: number, params: RequestParams = {}) =>
      this.request<ClubStaff, void>({
        path: `/clubs/${id}/staff`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags clubs
     * @name GetClubRelations
     * @request GET:/clubs/{id}/relations
     */
    getClubRelations: (id: number, params: RequestParams = {}) =>
      this.request<ClubRelations, void>({
        path: `/clubs/${id}/relations`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags clubs
     * @name GetClubsSearch
     * @request GET:/clubs
     */
    getClubsSearch: (
      query?: {
        page?: number;
        limit?: number;
        q?: string;
        /** Club Search Query Type */
        type?: ClubSearchQueryType;
        /** Club Search Query Category */
        category?: ClubSearchQueryCategory;
        /** Club Search Query OrderBy */
        order_by?: ClubSearchQueryOrderby;
        /** Search query sort direction */
        sort?: SearchQuerySort;
        /** Return entries starting with the given letter */
        letter?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ClubsSearch, void>({
        path: `/clubs`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  genres = {
    /**
     * No description
     *
     * @tags genres
     * @name GetAnimeGenres
     * @request GET:/genres/anime
     */
    getAnimeGenres: (
      query?: {
        /** Filter genres by type */
        filter?: GenreQueryFilter;
      },
      params: RequestParams = {}
    ) =>
      this.request<Genres, void>({
        path: `/genres/anime`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags genres
     * @name GetMangaGenres
     * @request GET:/genres/manga
     */
    getMangaGenres: (
      query?: {
        /** Filter genres by type */
        filter?: GenreQueryFilter;
      },
      params: RequestParams = {}
    ) =>
      this.request<Genres, void>({
        path: `/genres/manga`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  magazines = {
    /**
     * No description
     *
     * @tags magazines
     * @name GetMagazines
     * @request GET:/magazines
     */
    getMagazines: (
      query?: {
        page?: number;
        limit?: number;
        q?: string;
        /** Order by magazine data */
        order_by?: MagazinesQueryOrderby;
        /** Search query sort direction */
        sort?: SearchQuerySort;
        /** Return entries starting with the given letter */
        letter?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<Magazines, void>({
        path: `/magazines`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  manga = {
    /**
     * No description
     *
     * @tags manga
     * @name GetMangaFullById
     * @request GET:/manga/{id}/full
     */
    getMangaFullById: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Manga Resource */
          data?: MangaFull;
        },
        void
      >({
        path: `/manga/${id}/full`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags manga
     * @name GetMangaById
     * @request GET:/manga/{id}
     */
    getMangaById: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Manga Resource */
          data?: Manga;
        },
        void
      >({
        path: `/manga/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags manga
     * @name GetMangaCharacters
     * @request GET:/manga/{id}/characters
     */
    getMangaCharacters: (id: number, params: RequestParams = {}) =>
      this.request<MangaCharacters, void>({
        path: `/manga/${id}/characters`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags manga
     * @name GetMangaNews
     * @request GET:/manga/{id}/news
     */
    getMangaNews: (
      id: number,
      query?: {
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<MangaNews, void>({
        path: `/manga/${id}/news`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags manga
     * @name GetMangaTopics
     * @request GET:/manga/{id}/forum
     */
    getMangaTopics: (
      id: number,
      query?: {
        /** Filter topics */
        filter?: 'all' | 'episode' | 'other';
      },
      params: RequestParams = {}
    ) =>
      this.request<Forum, void>({
        path: `/manga/${id}/forum`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags manga
     * @name GetMangaPictures
     * @request GET:/manga/{id}/pictures
     */
    getMangaPictures: (id: number, params: RequestParams = {}) =>
      this.request<MangaPictures, void>({
        path: `/manga/${id}/pictures`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags manga
     * @name GetMangaStatistics
     * @request GET:/manga/{id}/statistics
     */
    getMangaStatistics: (id: number, params: RequestParams = {}) =>
      this.request<MangaStatistics, void>({
        path: `/manga/${id}/statistics`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags manga
     * @name GetMangaMoreInfo
     * @request GET:/manga/{id}/moreinfo
     */
    getMangaMoreInfo: (id: number, params: RequestParams = {}) =>
      this.request<Moreinfo, void>({
        path: `/manga/${id}/moreinfo`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags manga
     * @name GetMangaRecommendations
     * @request GET:/manga/{id}/recommendations
     */
    getMangaRecommendations: (id: number, params: RequestParams = {}) =>
      this.request<EntryRecommendations, void>({
        path: `/manga/${id}/recommendations`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags manga
     * @name GetMangaUserUpdates
     * @request GET:/manga/{id}/userupdates
     */
    getMangaUserUpdates: (
      id: number,
      query?: {
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<MangaUserupdates, void>({
        path: `/manga/${id}/userupdates`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags manga
     * @name GetMangaReviews
     * @request GET:/manga/{id}/reviews
     */
    getMangaReviews: (
      id: number,
      query?: {
        page?: number;
        /** Any reviews left during an ongoing anime/manga, those reviews are tagged as preliminary. NOTE: Preliminary reviews are not returned by default so if the entry is airing/publishing you need to add this otherwise you will get an empty list. e.g usage: `?preliminary=true` */
        preliminary?: boolean;
        /** Any reviews that are tagged as a spoiler. Spoiler reviews are not returned by default. e.g usage: `?spoiler=true` */
        spoilers?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<MangaReviews, void>({
        path: `/manga/${id}/reviews`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags manga
     * @name GetMangaRelations
     * @request GET:/manga/{id}/relations
     */
    getMangaRelations: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          data?: Relation[];
        },
        void
      >({
        path: `/manga/${id}/relations`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags manga
     * @name GetMangaExternal
     * @request GET:/manga/{id}/external
     */
    getMangaExternal: (id: number, params: RequestParams = {}) =>
      this.request<ExternalLinks, void>({
        path: `/manga/${id}/external`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags manga
     * @name GetMangaSearch
     * @request GET:/manga
     */
    getMangaSearch: (
      query?: {
        /** This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved` */
        unapproved?: boolean;
        page?: number;
        limit?: number;
        q?: string;
        /** Available Manga types */
        type?: MangaSearchQueryType;
        score?: number;
        /** Set a minimum score for results. */
        min_score?: number;
        /** Set a maximum score for results */
        max_score?: number;
        /** Available Manga statuses */
        status?: MangaSearchQueryStatus;
        /** Filter out Adult entries */
        sfw?: boolean;
        /** Filter by genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3 */
        genres?: string;
        /** Exclude genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3 */
        genres_exclude?: string;
        /** Available Manga order_by properties */
        order_by?: MangaSearchQueryOrderby;
        /** Search query sort direction */
        sort?: SearchQuerySort;
        /** Return entries starting with the given letter */
        letter?: string;
        /** Filter by magazine(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3 */
        magazines?: string;
        /** Filter by starting date. Format: YYYY-MM-DD. e.g `2022`, `2005-05`, `2005-01-01` */
        start_date?: string;
        /** Filter by ending date. Format: YYYY-MM-DD. e.g `2022`, `2005-05`, `2005-01-01` */
        end_date?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<MangaSearch, void>({
        path: `/manga`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  people = {
    /**
     * No description
     *
     * @tags people
     * @name GetPersonFullById
     * @request GET:/people/{id}/full
     */
    getPersonFullById: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Person Resource */
          data?: PersonFull;
        },
        void
      >({
        path: `/people/${id}/full`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags people
     * @name GetPersonById
     * @request GET:/people/{id}
     */
    getPersonById: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Person Resource */
          data?: Person;
        },
        void
      >({
        path: `/people/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags people
     * @name GetPersonAnime
     * @request GET:/people/{id}/anime
     */
    getPersonAnime: (id: number, params: RequestParams = {}) =>
      this.request<PersonAnime, void>({
        path: `/people/${id}/anime`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags people
     * @name GetPersonVoices
     * @request GET:/people/{id}/voices
     */
    getPersonVoices: (id: number, params: RequestParams = {}) =>
      this.request<PersonVoiceActingRoles, void>({
        path: `/people/${id}/voices`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags people
     * @name GetPersonManga
     * @request GET:/people/{id}/manga
     */
    getPersonManga: (id: number, params: RequestParams = {}) =>
      this.request<PersonManga, void>({
        path: `/people/${id}/manga`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags people
     * @name GetPersonPictures
     * @request GET:/people/{id}/pictures
     */
    getPersonPictures: (id: number, params: RequestParams = {}) =>
      this.request<PersonPictures, void>({
        path: `/people/${id}/pictures`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags people
     * @name GetPeopleSearch
     * @request GET:/people
     */
    getPeopleSearch: (
      query?: {
        page?: number;
        limit?: number;
        q?: string;
        /** Available People order_by properties */
        order_by?: PeopleSearchQueryOrderby;
        /** Search query sort direction */
        sort?: SearchQuerySort;
        /** Return entries starting with the given letter */
        letter?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PeopleSearch, void>({
        path: `/people`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  producers = {
    /**
     * No description
     *
     * @tags producers
     * @name GetProducerById
     * @request GET:/producers/{id}
     */
    getProducerById: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Producers Resource */
          data?: Producer;
        },
        void
      >({
        path: `/producers/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags producers
     * @name GetProducerFullById
     * @request GET:/producers/{id}/full
     */
    getProducerFullById: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Producers Resource */
          data?: ProducerFull;
        },
        void
      >({
        path: `/producers/${id}/full`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags producers
     * @name GetProducerExternal
     * @request GET:/producers/{id}/external
     */
    getProducerExternal: (id: number, params: RequestParams = {}) =>
      this.request<ExternalLinks, void>({
        path: `/producers/${id}/external`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags producers
     * @name GetProducers
     * @request GET:/producers
     */
    getProducers: (
      query?: {
        page?: number;
        limit?: number;
        q?: string;
        /** Producers Search Query Order By */
        order_by?: ProducersQueryOrderby;
        /** Search query sort direction */
        sort?: SearchQuerySort;
        /** Return entries starting with the given letter */
        letter?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<Producers, void>({
        path: `/producers`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  random = {
    /**
     * No description
     *
     * @tags random
     * @name GetRandomAnime
     * @request GET:/random/anime
     */
    getRandomAnime: (params: RequestParams = {}) =>
      this.request<
        {
          /** Anime Resource */
          data?: Anime;
        },
        void
      >({
        path: `/random/anime`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags random
     * @name GetRandomManga
     * @request GET:/random/manga
     */
    getRandomManga: (params: RequestParams = {}) =>
      this.request<
        {
          /** Manga Resource */
          data?: Manga;
        },
        void
      >({
        path: `/random/manga`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags random
     * @name GetRandomCharacters
     * @request GET:/random/characters
     */
    getRandomCharacters: (params: RequestParams = {}) =>
      this.request<
        {
          /** Character Resource */
          data?: Character;
        },
        void
      >({
        path: `/random/characters`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags random
     * @name GetRandomPeople
     * @request GET:/random/people
     */
    getRandomPeople: (params: RequestParams = {}) =>
      this.request<
        {
          /** Person Resource */
          data?: Person;
        },
        void
      >({
        path: `/random/people`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags random
     * @name GetRandomUsers
     * @request GET:/random/users
     */
    getRandomUsers: (params: RequestParams = {}) =>
      this.request<
        {
          data?: UserProfile;
        },
        void
      >({
        path: `/random/users`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  recommendations = {
    /**
     * No description
     *
     * @tags recommendations
     * @name GetRecentAnimeRecommendations
     * @request GET:/recommendations/anime
     */
    getRecentAnimeRecommendations: (
      query?: {
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Recommendations, void>({
        path: `/recommendations/anime`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags recommendations
     * @name GetRecentMangaRecommendations
     * @request GET:/recommendations/manga
     */
    getRecentMangaRecommendations: (
      query?: {
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Recommendations, void>({
        path: `/recommendations/manga`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  reviews = {
    /**
     * No description
     *
     * @tags reviews
     * @name GetRecentAnimeReviews
     * @request GET:/reviews/anime
     */
    getRecentAnimeReviews: (
      query?: {
        page?: number;
        /** Any reviews left during an ongoing anime/manga, those reviews are tagged as preliminary. NOTE: Preliminary reviews are not returned by default so if the entry is airing/publishing you need to add this otherwise you will get an empty list. e.g usage: `?preliminary=true` */
        preliminary?: boolean;
        /** Any reviews that are tagged as a spoiler. Spoiler reviews are not returned by default. e.g usage: `?spoiler=true` */
        spoilers?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/reviews/anime`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags reviews
     * @name GetRecentMangaReviews
     * @request GET:/reviews/manga
     */
    getRecentMangaReviews: (
      query?: {
        page?: number;
        /** Any reviews left during an ongoing anime/manga, those reviews are tagged as preliminary. NOTE: Preliminary reviews are not returned by default so if the entry is airing/publishing you need to add this otherwise you will get an empty list. e.g usage: `?preliminary=true` */
        preliminary?: boolean;
        /** Any reviews that are tagged as a spoiler. Spoiler reviews are not returned by default. e.g usage: `?spoiler=true` */
        spoilers?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/reviews/manga`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  schedules = {
    /**
     * No description
     *
     * @tags schedules
     * @name GetSchedules
     * @request GET:/schedules
     */
    getSchedules: (
      query?: {
        /** Filter by day */
        filter?:
          | 'monday'
          | 'tuesday'
          | 'wednesday'
          | 'thursday'
          | 'friday'
          | 'saturday'
          | 'sunday'
          | 'unknown'
          | 'other';
        /** When supplied, it will filter entries with the `Kids` Genre Demographic. When supplied as `kids=true`, it will return only Kid entries and when supplied as `kids=false`, it will filter out any Kid entries. Defaults to `false`. */
        kids?: 'true' | 'false';
        /** 'Safe For Work'. When supplied, it will filter entries with the `Hentai` Genre. When supplied as `sfw=true`, it will return only SFW entries and when supplied as `sfw=false`, it will filter out any Hentai entries. Defaults to `false`. */
        sfw?: 'true' | 'false';
        /** This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved` */
        unapproved?: boolean;
        page?: number;
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Schedules, void>({
        path: `/schedules`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags users
     * @name GetUsersSearch
     * @request GET:/users
     */
    getUsersSearch: (
      query?: {
        page?: number;
        limit?: number;
        q?: string;
        /** Users Search Query Gender. */
        gender?: UsersSearchQueryGender;
        location?: string;
        maxAge?: number;
        minAge?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<UsersSearch, void>({
        path: `/users`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUserById
     * @request GET:/users/userbyid/{id}
     */
    getUserById: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** User Meta By ID */
          data?: UserById;
        },
        void
      >({
        path: `/users/userbyid/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUserFullProfile
     * @request GET:/users/{username}/full
     */
    getUserFullProfile: (username: string, params: RequestParams = {}) =>
      this.request<
        {
          /** Transform the resource into an array. */
          data?: UserProfileFull;
        },
        void
      >({
        path: `/users/${username}/full`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUserProfile
     * @request GET:/users/{username}
     */
    getUserProfile: (username: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: UserProfile;
        },
        void
      >({
        path: `/users/${username}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUserStatistics
     * @request GET:/users/{username}/statistics
     */
    getUserStatistics: (username: string, params: RequestParams = {}) =>
      this.request<UserStatistics, void>({
        path: `/users/${username}/statistics`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUserFavorites
     * @request GET:/users/{username}/favorites
     */
    getUserFavorites: (username: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: UserFavorites;
        },
        void
      >({
        path: `/users/${username}/favorites`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUserUpdates
     * @request GET:/users/{username}/userupdates
     */
    getUserUpdates: (username: string, params: RequestParams = {}) =>
      this.request<UserUpdates, void>({
        path: `/users/${username}/userupdates`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUserAbout
     * @request GET:/users/{username}/about
     */
    getUserAbout: (username: string, params: RequestParams = {}) =>
      this.request<UserAbout, void>({
        path: `/users/${username}/about`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUserHistory
     * @request GET:/users/{username}/history
     */
    getUserHistory: (
      username: string,
      query?: {
        type?: 'anime' | 'manga';
      },
      params: RequestParams = {}
    ) =>
      this.request<UserHistory, void>({
        path: `/users/${username}/history`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUserFriends
     * @request GET:/users/{username}/friends
     */
    getUserFriends: (
      username: string,
      query?: {
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<UserFriends, void>({
        path: `/users/${username}/friends`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description User Anime lists have been discontinued since May 1st, 2022. <a href='https://docs.google.com/document/d/1-6H-agSnqa8Mfmw802UYfGQrceIEnAaEh4uCXAPiX5A'>Read more</a>
     *
     * @tags users
     * @name GetUserAnimelist
     * @request GET:/users/{username}/animelist
     * @deprecated
     */
    getUserAnimelist: (
      username: string,
      query?: {
        /** User's anime list status filter options */
        status?: UserAnimeListStatusFilter;
      },
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/users/${username}/animelist`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description User Manga lists have been discontinued since May 1st, 2022. <a href='https://docs.google.com/document/d/1-6H-agSnqa8Mfmw802UYfGQrceIEnAaEh4uCXAPiX5A'>Read more</a>
     *
     * @tags users
     * @name GetUserMangaList
     * @request GET:/users/{username}/mangalist
     * @deprecated
     */
    getUserMangaList: (
      username: string,
      query?: {
        /** User's anime list status filter options */
        status?: UserMangaListStatusFilter;
      },
      params: RequestParams = {}
    ) =>
      this.request<any, void>({
        path: `/users/${username}/mangalist`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUserReviews
     * @request GET:/users/{username}/reviews
     */
    getUserReviews: (
      username: string,
      query?: {
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          data?: {
            data?: (
              | ({
                  user?: UserMeta;
                } & {
                  anime?: AnimeMeta;
                } & AnimeReview)
              | ({
                  user?: UserMeta;
                } & {
                  manga?: MangaMeta;
                } & MangaReview)
            )[];
          } & Pagination;
        },
        void
      >({
        path: `/users/${username}/reviews`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUserRecommendations
     * @request GET:/users/{username}/recommendations
     */
    getUserRecommendations: (
      username: string,
      query?: {
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Recommendations, void>({
        path: `/users/${username}/recommendations`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUserClubs
     * @request GET:/users/{username}/clubs
     */
    getUserClubs: (
      username: string,
      query?: {
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<UserClubs, void>({
        path: `/users/${username}/clubs`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUserExternal
     * @request GET:/users/{username}/external
     */
    getUserExternal: (username: string, params: RequestParams = {}) =>
      this.request<ExternalLinks, void>({
        path: `/users/${username}/external`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  seasons = {
    /**
     * No description
     *
     * @tags seasons
     * @name GetSeasonNow
     * @request GET:/seasons/now
     */
    getSeasonNow: (
      query?: {
        /** Entry types */
        filter?: 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music';
        /** 'Safe For Work'. This is a flag. When supplied it will filter out entries according to the SFW Policy. You do not need to pass a value to it. e.g usage: `?sfw` */
        sfw?: boolean;
        /** This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved` */
        unapproved?: boolean;
        /** This is a flag. When supplied it will include entries which are continuing from previous seasons. MAL includes these items on the seasons view in the &#8243;TV (continuing)&#8243; section. (Example: https://myanimelist.net/anime/season/2024/winter) <br />Example usage: `?continuing` */
        continuing?: boolean;
        page?: number;
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<AnimeSearch, void>({
        path: `/seasons/now`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags seasons
     * @name GetSeason
     * @request GET:/seasons/{year}/{season}
     */
    getSeason: (
      year: number,
      season: string,
      query?: {
        /** Entry types */
        filter?: 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music';
        /** 'Safe For Work'. This is a flag. When supplied it will filter out entries according to the SFW Policy. You do not need to pass a value to it. e.g usage: `?sfw` */
        sfw?: boolean;
        /** This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved` */
        unapproved?: boolean;
        /** This is a flag. When supplied it will include entries which are continuing from previous seasons. MAL includes these items on the seasons view in the &#8243;TV (continuing)&#8243; section. (Example: https://myanimelist.net/anime/season/2024/winter) <br />Example usage: `?continuing` */
        continuing?: boolean;
        page?: number;
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<AnimeSearch, void>({
        path: `/seasons/${year}/${season}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags seasons
     * @name GetSeasonsList
     * @request GET:/seasons
     */
    getSeasonsList: (params: RequestParams = {}) =>
      this.request<Seasons, void>({
        path: `/seasons`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags seasons
     * @name GetSeasonUpcoming
     * @request GET:/seasons/upcoming
     */
    getSeasonUpcoming: (
      query?: {
        /** Entry types */
        filter?: 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music';
        /** 'Safe For Work'. This is a flag. When supplied it will filter out entries according to the SFW Policy. You do not need to pass a value to it. e.g usage: `?sfw` */
        sfw?: boolean;
        /** This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved` */
        unapproved?: boolean;
        /** This is a flag. When supplied it will include entries which are continuing from previous seasons. MAL includes these items on the seasons view in the &#8243;TV (continuing)&#8243; section. (Example: https://myanimelist.net/anime/season/2024/winter) <br />Example usage: `?continuing` */
        continuing?: boolean;
        page?: number;
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<AnimeSearch, void>({
        path: `/seasons/upcoming`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  top = {
    /**
     * No description
     *
     * @tags top
     * @name GetTopAnime
     * @request GET:/top/anime
     */
    getTopAnime: (
      query?: {
        /** Available Anime types */
        type?: AnimeSearchQueryType;
        /** Top items filter types */
        filter?: TopAnimeFilter;
        /** Available Anime audience ratings<br><br><b>Ratings</b><br><ul><li>G - All Ages</li><li>PG - Children</li><li>PG-13 - Teens 13 or older</li><li>R - 17+ (violence & profanity)</li><li>R+ - Mild Nudity</li><li>Rx - Hentai</li></ul> */
        rating?: AnimeSearchQueryRating;
        /** Filter out Adult entries */
        sfw?: boolean;
        page?: number;
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<AnimeSearch, void>({
        path: `/top/anime`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags top
     * @name GetTopManga
     * @request GET:/top/manga
     */
    getTopManga: (
      query?: {
        /** Available Manga types */
        type?: MangaSearchQueryType;
        /** Top items filter types */
        filter?: TopMangaFilter;
        page?: number;
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<MangaSearch, void>({
        path: `/top/manga`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags top
     * @name GetTopPeople
     * @request GET:/top/people
     */
    getTopPeople: (
      query?: {
        page?: number;
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<PeopleSearch, void>({
        path: `/top/people`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags top
     * @name GetTopCharacters
     * @request GET:/top/characters
     */
    getTopCharacters: (
      query?: {
        page?: number;
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<CharactersSearch, void>({
        path: `/top/characters`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags top
     * @name GetTopReviews
     * @request GET:/top/reviews
     */
    getTopReviews: (
      query?: {
        page?: number;
        /** The type of reviews to filter by. Defaults to anime. */
        type?: TopReviewsTypeEnum;
        /** Whether the results include preliminary reviews or not. Defaults to true. */
        preliminary?: boolean;
        /** Whether the results include reviews with spoilers or not. Defaults to true. */
        spoilers?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          data?: {
            data?: (
              | ({
                  user?: UserMeta;
                } & {
                  anime?: AnimeMeta;
                } & AnimeReview)
              | ({
                  user?: UserMeta;
                } & {
                  manga?: MangaMeta;
                } & MangaReview)
            )[];
          } & Pagination;
        },
        void
      >({
        path: `/top/reviews`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  watch = {
    /**
     * No description
     *
     * @tags watch
     * @name GetWatchRecentEpisodes
     * @request GET:/watch/episodes
     */
    getWatchRecentEpisodes: (params: RequestParams = {}) =>
      this.request<WatchEpisodes, void>({
        path: `/watch/episodes`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags watch
     * @name GetWatchPopularEpisodes
     * @request GET:/watch/episodes/popular
     */
    getWatchPopularEpisodes: (params: RequestParams = {}) =>
      this.request<WatchEpisodes, void>({
        path: `/watch/episodes/popular`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags watch
     * @name GetWatchRecentPromos
     * @request GET:/watch/promos
     */
    getWatchRecentPromos: (
      query?: {
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<WatchPromos, void>({
        path: `/watch/promos`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags watch
     * @name GetWatchPopularPromos
     * @request GET:/watch/promos/popular
     */
    getWatchPopularPromos: (params: RequestParams = {}) =>
      this.request<WatchPromos, void>({
        path: `/watch/promos/popular`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
}
