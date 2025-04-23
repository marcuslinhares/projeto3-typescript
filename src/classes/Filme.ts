export class Filme {

    private adult: boolean;
    private backdrop_path: string;
    private id: number;
    private original_language: string;
    private original_title: string;
    private overview: string;
    private popularity: number;
    private poster_path: string;
    private release_date: string;
    private title: string;
    private video: boolean;
    private vote_average: number;
    private vote_count: number;

    constructor(
        adult: boolean,
        backdrop_path: string,
        id: number,
        original_language: string,
        original_title: string,
        overview: string,
        popularity: number,
        poster_path: string,
        release_date: string,
        title: string,
        video: boolean,
        vote_average: number,
        vote_count: number
    ) {
        this.adult = adult;
        this.backdrop_path = backdrop_path;
        this.id = id;
        this.original_language = original_language;
        this.original_title = original_title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.release_date = release_date;
        this.title = title;
        this.video = video;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
    }

    public toJson(): object {
        return {
            adult: this.adult,
            backdrop_path: this.backdrop_path,
            id: this.id,
            original_language: this.original_language,
            original_title: this.original_title,
            overview: this.overview,
            popularity: this.popularity,
            poster_path: this.poster_path,
            release_date: this.release_date,
            title: this.title,
            video: this.video,
            vote_average: this.vote_average,
            vote_count: this.vote_count,
        };
    }

    public get getAdult(): boolean {
        return this.adult;
    }

    public get getBackdropPath(): string {
        return this.backdrop_path;
    }

    public get getId(): number {
        return this.id;
    }

    public get getOriginalLanguage(): string {
        return this.original_language;
    }

    public get getOriginalTitle(): string {
        return this.original_title;
    }

    public get getOverview(): string {
        return this.overview;
    }

    public get getPopularity(): number {
        return this.popularity;
    }

    public get getPosterPath(): string {
        return this.poster_path;
    }

    public get getReleaseDate(): string {
        return this.release_date;
    }

    public get getTitle(): string {
        return this.title;
    }

    public get getVideo(): boolean {
        return this.video;
    }

    public get getVoteAverage(): number {
        return this.vote_average;
    }

    public get getVoteCount(): number {
        return this.vote_count;
    }

    public set setAdult(adult: boolean) {
        this.adult = adult;
    }

    public set setBackdropPath(backdrop_path: string) {
        this.backdrop_path = backdrop_path;
    }

    public set setId(id: number) {
        this.id = id;
    }

    public set setOriginalLanguage(original_language: string) {
        this.original_language = original_language;
    }

    public set setOriginalTitle(original_title: string) {
        this.original_title = original_title;
    }

    public set setOverview(overview: string) {
        this.overview = overview;
    }

    public set setPopularity(popularity: number) {
        this.popularity = popularity;
    }

    public set setPosterPath(poster_path: string) {
        this.poster_path = poster_path;
    }

    public set setReleaseDate(release_date: string) {
        this.release_date = release_date;
    }

    public set setTitle(title: string) {
        this.title = title;
    }

    public set setVideo(video: boolean) {
        this.video = video;
    }

    public set setVoteAverage(vote_average: number) {
        this.vote_average = vote_average;
    }

    public set setVoteCount(vote_count: number) {
        this.vote_count = vote_count;
    }
}
