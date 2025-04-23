export class Pokemon {

    private id: number;
    private name: string;
    private base_experience: number;
    private height: number;
    private weight: number;
    private legendary: boolean;
    private firstAppearance: string;
    private abilities: string[];
    private stats: PokemonStat[];

    constructor(
        id: number,
        name: string,
        base_experience: number,
        height: number,
        weight: number,
        legendary: boolean,
        firstAppearance: string,
        abilities: string[],
        stats: PokemonStat[]
    ) {
        this.id = id;
        this.name = name;
        this.base_experience = base_experience;
        this.height = height;
        this.weight = weight;
        this.legendary = legendary;
        this.firstAppearance = firstAppearance;
        this.abilities = abilities;
        this.stats = stats;
    }

    public toJson(): object {
        return {
            id: this.id,
            name: this.name,
            base_experience: this.base_experience,
            height: this.height,
            weight: this.weight,
            legendary: this.legendary,
            firstAppearance: this.firstAppearance,
            abilities: this.abilities,
            stats: this.stats
        };
    }

    public get getId(): number {
        return this.id;
    }

    public get getName(): string {
        return this.name;
    }

    public get getBaseExperience(): number {
        return this.base_experience;
    }

    public get getHeight(): number {
        return this.height;
    }

    public get getWeight(): number {
        return this.weight;
    }

    public get isLegendary(): boolean {
        return this.legendary;
    }

    public get getFirstAppearance(): string {
        return this.firstAppearance;
    }

    public get getAbilities(): string[] {
        return this.abilities;
    }

    public get getStats(): PokemonStat[] {
        return this.stats;
    }

    public set setId(id: number) {
        this.id = id;
    }

    public set setName(name: string) {
        this.name = name;
    }

    public set setBaseExperience(exp: number) {
        this.base_experience = exp;
    }

    public set setHeight(height: number) {
        this.height = height;
    }

    public set setWeight(weight: number) {
        this.weight = weight;
    }

    public set setLegendary(legendary: boolean) {
        this.legendary = legendary;
    }

    public set setFirstAppearance(date: string) {
        this.firstAppearance = date;
    }

    public set setAbilities(abilities: string[]) {
        this.abilities = abilities;
    }

    public set setStats(stats: PokemonStat[]) {
        this.stats = stats;
    }
}