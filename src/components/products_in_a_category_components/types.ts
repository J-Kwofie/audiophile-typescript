export type categoryProps = {
    categoryName?: string
}

  export type indexProps = {
  }
  
  export type productsInCategory ={
    style:number,
    categoryName?: string,
    productInCategory:{
      slug: string,
      price: number,
      product_id:number,
      category_desktop_image_url:string,
      category_mobile_image_url:string,
      category_tablet_image_url:string,
      description:string,
      name:string,
      new:boolean,
     }
  
  }