
export type productsInCategory ={
    style:number,
    categoryName?: string,
    productInCategory:{
      slug: string,
      price: number,
      product_id:number,
      desktop_image_url:string,
      tablet_image_url:string,
      mobile_image_url:string,
      description:string,
      name:string,
      new:boolean,
      feature:string
     }
  
  }
  export type productDetailsStyledProps = {
    by_image:string[]
  }