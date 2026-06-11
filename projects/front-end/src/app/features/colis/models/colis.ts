export interface Colis {
    id: number;
    name: string;
    weight: number;
    destination: string;
}

export type ColisList = Colis[];