import { OnInit, ViewChild, AfterViewInit, Directive, ElementRef } from '@angular/core';
import { Observable, BehaviorSubject, merge } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { untilDestroyed } from '@ngneat/until-destroy';
import { StatusHelper } from './status.helper';
import { ListRequest } from './list-request.model';
import { TableColumn } from './table-column.interface';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Directive()
export abstract class EntityComponent<T> implements OnInit, AfterViewInit {

    protected dateFormat = 'dd-MM-yyyy';
    public dataSource: MatTableDataSource<T> | null;
    data: T[] = [];
    pageSize = 60;
    page = 0;
    pageSizeOptions: number[] = [60, 120, 240];
    sortColumn = 'id';
    sortDirection = 'desc';
    searchString = '';
    totalRecords = 0;
    isLoading = true;
    filters: any[] = [];
    public selection = new SelectionModel<T>(true, []);
    public searchCtrl = new FormControl();
    labels = this.statusHelper.getLabels();
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild('searchValue') searchValue: ElementRef;

    public loadingData = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingData.asObservable();

    abstract getAll(request: ListRequest): Observable<HttpResponse<any>>;
    abstract mapDate(entity: T): void;
    abstract mapStatus(entity: T): void;
    abstract mapLabels(entity: T): void;

    constructor(protected statusHelper: StatusHelper) {}

    ngOnInit() {
        this.dataSource = new MatTableDataSource();
        this.initDatatable();
        this.searchCtrl.valueChanges.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            untilDestroyed(this)
        ).subscribe(value => this.onFilterChange(value));
    }

    ngAfterViewInit() {
        if (this.paginator) {
            this.paginator.page
                .pipe(
                    tap(() => {
                        this.pageSize = this.paginator.pageSize;
                        this.page = this.paginator.pageIndex;
                        this.refreshDatatable();
                    })
                )
                .subscribe();

            if (this.sort) {
                this.sort.sortChange.subscribe(() => {
                    this.paginator.pageIndex = 0;
                    this.page = this.paginator.pageIndex;
                    this.refreshDatatable();
                });
            }
        }
    }

    initDatatable() {
        this.refreshDatatable();
    }

    refreshDatatable() {
        this.isLoading = true;
        this.loadingData.next(false);
        this.data = [];
        const request = this.getListRequest();

        this.getAll(request).subscribe((response: HttpResponse<any>) => {
            if (response != null) {
                const entities = response.body.data;
                this.data = entities;
                this.loadingData.next(true);
                this.totalRecords = response.body.total;
                this.selection.clear();
                if (entities) {
                    entities.forEach(entity => {
                        this.mapLabels(entity);
                        this.mapDate(entity);
                        this.mapStatus(entity);
                    });
                }
                this.dataSource.data = entities || [];
            } else {
                this.dataSource.data = [];
            }
            this.isLoading = false;
        }, (error: any) => {
            this.isLoading = false;
        });
    }

    onFilterChange(value: string) {
        if (!this.dataSource) {
            return;
        }
        value = value.trim().toLowerCase();
        this.searchString = value;
        this.paginator.pageIndex = 0;
        this.page = this.paginator.pageIndex;
        this.refreshDatatable();
    }

    toggleColumnVisibility(column: TableColumn<T>, event: MouseEvent) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        if (!column.mandatory) {
            column.visible = !column.visible;
        }
    }

    isAllSelected(): boolean {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    trackByProperty<T>(index: number, column: TableColumn<T>): any {
        return column.property;
    }

    sortData(event: any) {
        this.sortColumn = event.active;
        this.sortDirection = event.direction;
        this.refreshDatatable();
    }

    getRowText(row: any, property: string): any {
        let data = row;
        const temp = property.split('.');
        temp.forEach((element) => {
            if (data[element] !== null) {
                data = data[element];
            }
        });
        return data;
    }

    handlePageBottom(event: PageEvent): void {
        this.paginator.pageSize = event.pageSize;
        this.paginator.pageIndex = event.pageIndex;
        this.page = event.pageIndex;
        this.pageSize = event.pageSize;
        this.refreshDatatable();
    }

    getListRequest(): ListRequest {
        return new ListRequest(this.page, this.pageSize, this.searchString, this.sortColumn, this.sortDirection, this.filters);
    }

    addFilter(column: any, value: any): void {
        this.filters.push({ column, value });
        this.refreshDatatable();
    }
}
