export interface HierarchicalItem {
    id: string;
    children: HierarchicalItem[];

}

export function isHierarchicalItem(obj: any): obj is HierarchicalItem {
    return typeof obj  === 'object' && typeof obj.id === 'string' && Array.isArray(obj.children)
    && (obj.children as Array<Object>).every(isHierarchicalItem);
}

