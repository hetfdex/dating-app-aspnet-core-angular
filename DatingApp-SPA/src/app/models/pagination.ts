export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
    totalItems: number;
}

export class PaginatedResults<T> {
    result: T;

    pagination: Pagination;
}
