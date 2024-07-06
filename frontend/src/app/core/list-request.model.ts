export class ListRequest {
    constructor(public page: number, public size: number, public searchString: string,
        public sortColumn: string, public sortDirection: string, public filters: any[]) {}
}
