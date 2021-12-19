interface Good {
    id: string;             // 商品标识
    name: string,           // 商品名称
    subname?: string,        // 商品子类名
    description: string,    // 商品描述
    shopName: string,       // 店铺名称
    shopId: string,         // 店铺标识      
    unitPrice: number,      // 单价
    imageUrl: string,       // 商品图片
    amount: number,         // 数量
    stockAmount: number,    // 库存数量
    isSelected: boolean,    // 是否被选中
}

interface Shop {
    id: string;     // 店铺标识
    goods: Good[];  // 店铺商品
    name: string;   // 店铺名称
} 