export enum BlogEndpoints {
    getArticle = '/items/Blog_Article?filter[Slug][_eq]={slug}&fields=*,Categories.Blog_Category_id.*,Image.id,Image.title,Meta_Title,Meta_Description',
}
