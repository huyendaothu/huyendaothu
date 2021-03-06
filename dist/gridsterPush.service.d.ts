import { GridsterItemComponentInterface } from './gridsterItemComponent.interface';
export declare class GridsterPush {
    fromSouth: string;
    fromNorth: string;
    fromEast: string;
    fromWest: string;
    private pushedItems;
    private pushedItemsTemp;
    private pushedItemsTempPath;
    private pushedItemsPath;
    private gridsterItem;
    private gridster;
    private pushedItemsOrder;
    private tryPattern;
    constructor(gridsterItem: GridsterItemComponentInterface);
    destroy(): void;
    pushItems(direction: string, disable?: boolean): boolean;
    restoreTempItems(): void;
    restoreItems(): void;
    setPushedItems(): void;
    checkPushBack(): void;
    private push(gridsterItem, direction);
    private trySouth(gridsterItemCollide, gridsterItem);
    private tryNorth(gridsterItemCollide, gridsterItem);
    private tryEast(gridsterItemCollide, gridsterItem);
    private tryWest(gridsterItemCollide, gridsterItem);
    private addToTempPushed(gridsterItem);
    private removeFromTempPushed(gridsterItem);
    private addToPushed(gridsterItem);
    private removeFromPushed(i);
    private removeFromPushedItem(gridsterItem);
    private checkPushedItem(pushedItem, i);
}
