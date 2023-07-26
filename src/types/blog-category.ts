export interface BlogCategory {
    id: number;
    url: string;
    name: string;
    parent?: BlogCategory;
}

export interface BlogCategoryDetail extends BlogCategory {
    description: string | null;
}
