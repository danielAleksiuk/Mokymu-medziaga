export type Task = {
    _id: string;
    title: string;
    reps: number;
    level: number;
}

export type User = {
    email: string,
    password: string,
    token?: string
}
