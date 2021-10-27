export interface Operators {
    $eq: (val: any, tar: any) => boolean;
    $gt: (val: number, tar: number) => boolean;
    $gte: (val: number, tar: number) => boolean;
    $in: (val: string | any[], tar: any) => boolean;
    $lt: (val: number, tar: number) => boolean;
    $lte: (val: number, tar: number) => boolean;
    $ne: (val: any, tar: any) => boolean;
    $nin: (val: string | any[], tar: any) => boolean;
    _checkExist: (op: string) => op is keyof Operators;
}
export interface DBOpts {
    storage: Storage | null;
    database: string;
    primaryKey?: string;
    sep?: string;
}
