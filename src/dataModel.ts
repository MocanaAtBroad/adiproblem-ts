import {HierarchicalItem, isHierarchicalItem} from "./hierarchicalItem";

interface FullModel {
    full_hierarchy: HierarchicalItem;
    ref_hierarchy: string[];
    item_map: Record<string, string>;
}

export function isFullModel(obj: any): obj is FullModel {
    return typeof obj === 'object'
        && isHierarchicalItem(obj.full_hierarchy)
        && Array.isArray(obj.ref_hierarchy)
        && obj.ref_hierarchy.every((val: any) => typeof val === 'string')
        && typeof obj.item_map === 'object' && Object.values(obj.item_map).every((val: any) =>  typeof val === 'string');
}