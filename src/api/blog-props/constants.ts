export enum BlogEndpoints {
    GetArticles = '/items/Blog_Article?fields=id,Slug,Date,Image.id,Image.title,Title,Short_Description,Categories.Blog_Category_id.*&limit={limit}&offset={offset}&sort=-Date&meta=filter_count',
    GetCategories = '/items/Blog_Category?fields=id,Slug,Name&filter[Slug][_neq]={slug}',
}
