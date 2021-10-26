declare class Collection {
    name: any;
    storage: any;
    cache: any[];
    path: string;
    cacheable: boolean;
    primaryKey: any;
    constructor(db: any, name: string, opts: DBOpts);
    _initCache(): void;
    _filter(filter: any | null, opts: {
        type: any;
        multi: any;
    }): any;
    inset(data: any, opts?: any): any;
    /**
     *
     * find('')
     * find(['', ''])
     *
     */
    find(query?: any, opts?: {
        skip?: any;
        limit?: any;
        sort?: any;
        _filterType?: string;
    }): any;
    findOne(query: any, opts?: {
        skip?: any;
        limit?: any;
        sort?: any;
        _filterType?: any;
    } | undefined): any;
    remove(query: {}, opts?: {
        multi?: any;
        mulit?: any;
    } | undefined): number;
    update(query: any, values: {
        [x: string]: any;
    }, opts?: {
        multi?: any;
        mulit?: any;
        _filterType?: string;
    }): any;
    drop(): boolean;
    count(): any;
}
interface DBOpts {
    storage: Storage | null;
    database: string;
    primaryKey?: string;
    sep?: string;
}
declare class StorageDB {
    storage: Storage | null;
    database: string;
    primaryKey?: string;
    sep?: string;
    constructor(opts: DBOpts);
    get(name: string, opts?: DBOpts): Collection;
    collection(name: string, opts?: DBOpts): Collection;
    size(): number;
}
export default StorageDB;
