export enum BlogEndpoints {
    GetCategory = '/items/Blog_Category?filter[Slug][_eq]={slug}&fields=Description,Name,id,Slug',
    GetCategoryArticles = '/items/Blog_Article?filter[Categories][Blog_Category_id][Slug][_eq]={slug}&fields=id,Slug,Date,Image.id,Image.title,Title,Short_Description,Categories.Blog_Category_id.*&limit={limit}&offset={offset}&sort=-Date&meta=filter_count',
}
