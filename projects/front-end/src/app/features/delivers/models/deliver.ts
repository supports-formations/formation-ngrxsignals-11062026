export interface Deliver {
    id: number;
    date: Date;
    colisIds: number[];
}

export const defaultDelivers: Deliver[] = [
    {
        id: 1,
        date: new Date(),
        colisIds: [1, 2, 3]
    },
    {
        id: 2,
        date: new Date(),
        colisIds: []
    }
];