import { PaisBordersEnum } from "../enums/PaisBordersEnum";

export class Pais {

    private name: PaisNameType;
    private independent: boolean;
    private unMember: boolean;
    private capital: string;
    private region: string;
    private subregion: string;
    private languages: string[];
    private latlng: PaisLatLngType;
    private borders: PaisBordersEnum[];
    private area: number;
    private population: number;
    private timezones: string[];
    private flags: PaisFlagType;

    constructor(
        name: PaisNameType,
        independent: boolean,
        unMember: boolean,
        capital: string,
        region: string,
        subregion: string,
        languages: string[],
        latlng: PaisLatLngType,
        borders: PaisBordersEnum[],
        area: number,
        population: number,
        timezones: string[],
        flags: PaisFlagType
    ) {
        this.name = name;
        this.independent = independent;
        this.unMember = unMember;
        this.capital = capital;
        this.region = region;
        this.subregion = subregion;
        this.languages = languages;
        this.latlng = latlng;
        this.borders = borders;
        this.area = area;
        this.population = population;
        this.timezones = timezones;
        this.flags = flags;
    }
    
    public toJson(): object {
        return {
            name: this.name,
            independent: this.independent,
            unMember: this.unMember,
            capital: this.capital,
            region: this.region,
            subregion: this.subregion,
            languages: this.languages,
            latlng: this.latlng,
            borders: this.borders,
            area: this.area,
            population: this.population,
            timezones: this.timezones,
            flags: this.flags
        };
    }

    public get getName(): PaisNameType {
        return this.name;
    }

    public get getIndependent(): boolean {
        return this.independent;
    }

    public get getUnMember(): boolean {
        return this.unMember;
    }

    public get getCapital(): string {
        return this.capital;
    }

    public get getRegion(): string {
        return this.region;
    }

    public get getSubregion(): string {
        return this.subregion;
    }

    public get getLanguages(): string[] {
        return this.languages;
    }

    public get getLatlng(): PaisLatLngType {
        return this.latlng;
    }

    public get getBorders(): PaisBordersEnum[] {
        return this.borders;
    }

    public get getArea(): number {
        return this.area;
    }

    public get getPopulation(): number {
        return this.population;
    }

    public get getTimezones(): string[] {
        return this.timezones;
    }

    public get getFlags(): PaisFlagType {
        return this.flags;
    }

    public set setName(name: PaisNameType) {
        this.name = name;
    }

    public set setIndependent(independent: boolean) {
        this.independent = independent;
    }

    public set setUnMember(unMember: boolean) {
        this.unMember = unMember;
    }

    public set setCapital(capital: string) {
        this.capital = capital;
    }
  
    public set setRegion(region: string) {
        this.region = region;
    }

    public set setSubregion(subregion: string) {
        this.subregion = subregion;
    }

    public set setLanguages(languages: string[]) {
        this.languages = languages;
    }

    public set setLatlng(latlng: PaisLatLngType) {
        this.latlng = latlng;
    }

    public set setBorders(borders: PaisBordersEnum[]) {
        this.borders = borders;
    }

    public set setArea(area: number) {
        this.area = area;
    }

    public set setPopulation(population: number) {
        this.population = population;
    }

    public set setTimezones(timezones: string[]) {
        this.timezones = timezones;
    }

    public set setFlags(flags: PaisFlagType) {
        this.flags = flags;
    }

}
