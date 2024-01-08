export interface FieldElementConfig {
    name: string;
    category: {
        [key: string]: CategoryItem[];
    };
}

export interface CategoryItem {
    label: string;
    value: number;
    increment: number;
    max?:number;
}

export interface AllianceInfo {
    name: string;
    color: string;
    score: number;
}