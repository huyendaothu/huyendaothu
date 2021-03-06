import { GridsterSwap } from './gridsterSwap.service';
import { GridsterPush } from './gridsterPush.service';
import { GridsterItemComponentInterface } from './gridsterItemComponent.interface';
import { GridsterComponentInterface } from './gridster.interface';
export declare class GridsterDraggable {
    gridsterItem: GridsterItemComponentInterface;
    gridster: GridsterComponentInterface;
    lastMouse: {
        clientX: number;
        clientY: number;
    };
    offsetLeft: number;
    offsetTop: number;
    margin: number;
    diffTop: number;
    diffLeft: number;
    top: number;
    left: number;
    height: number;
    width: number;
    positionX: number;
    positionY: number;
    positionXBackup: number;
    positionYBackup: number;
    enabled: boolean;
    dragStartFunction: (event: any) => void;
    dragFunction: (event: any) => void;
    dragStopFunction: (event: any) => void;
    mousemove: Function;
    mouseup: Function;
    cancelOnBlur: Function;
    touchmove: Function;
    touchend: Function;
    touchcancel: Function;
    mousedown: Function;
    touchstart: Function;
    push: GridsterPush;
    swap: GridsterSwap;
    path: Array<{
        x: number;
        y: number;
    }>;
    constructor(gridsterItem: GridsterItemComponentInterface, gridster: GridsterComponentInterface);
    destroy(): void;
    dragStart(e: any): void;
    dragMove(e: any): void;
    calculateItemPositionFromMousePosition(e: any): void;
    dragStop(e: any): void;
    cancelDrag(): void;
    makeDrag(): void;
    calculateItemPosition(): void;
    toggle(): void;
    dragStartDelay(e: any): void;
}
