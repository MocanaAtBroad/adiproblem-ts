'use strict';

import {isFullModel} from "./dataModel";
import {HierarchicalItem} from "./hierarchicalItem";

const fs = require('fs');

const DEFAULT_FILE = 'example.json';

function findHierarchyItemById(id: string, hierarchicalItem: HierarchicalItem): HierarchicalItem | null {
    let currentItem: HierarchicalItem | null = hierarchicalItem;
    while (currentItem != null && currentItem.id !== id) {
        currentItem = currentItem.children.length > 0 ? currentItem.children[0] : null;
    }
    return currentItem;
}

function printHierarchicalItems(hierarchicalItem: HierarchicalItem | null, idToString: Record<string, string>): void {
    if (hierarchicalItem == null) {
        console.error('Oops! We got a HierarchicalItem!');
    }
    let currentItem: HierarchicalItem | null = hierarchicalItem;
    let level = 1;
    const filler = '-';
    while (currentItem != null) {
        console.log(`${filler.repeat(level)} ${idToString[currentItem.id]}`);
        currentItem = currentItem.children.length > 0 ? currentItem.children[0] : null;
        ++level;
    }
}


const filePathToRead = process.argv.length > 2 ? process.argv[process.argv.length - 1] : DEFAULT_FILE;
let jsonFileContents = fs.readFileSync(filePathToRead);
let fullModelRaw: any = JSON.parse(jsonFileContents);

if (isFullModel(fullModelRaw)) {
    fullModelRaw.ref_hierarchy.forEach(idValue => {
        const currentHierarchyItem = findHierarchyItemById(idValue, fullModelRaw.full_hierarchy);
        printHierarchicalItems(currentHierarchyItem, fullModelRaw.item_map);
    });
} else {
    console.error("The JSON file did not match expected structure");
}


