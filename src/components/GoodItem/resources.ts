
import './GoodItem.scss';

export const CSS = {
    goodItem: "good-item",
    goodItemWarn: "good-item-warn",
    goodItemError: "good-item-error",
    checkAndImage: "good-item--check-and-image",
    checkbox: "good-item--check-and-image--checkbox",
    image: "good-item--check-and-image--image",
    itemImage: "good-item--image--item-image",
    info: "good-item--info",
    name: "good-item--info--name",
    description: "good-item--info--description",
    subName: "good-item--sub-name",
    unitPrice: "good-item--unit-price",
    unitPriceText: "good-item--unit-price--text",
    amount: "good-item--amount",
    amountInputGroup: "good-item--amount--input-group",
    amountDecrementBtn: "good-item--amount--input-group--decrement-btn",
    amountIncrementBtn: "good-item--amount--input-group--increment-btn",
    amountInputBox: "good-item--amount--input-group--input-box",
    amountStockInfo: "good-item--amount--stock-info",
    amountStockInfoWarnRemainingStock: "good-item--amount--stock-info--warn-remaining-stock",
    amountStockInfoWarnNoneLeft: "good-item--amount--stock-info--warn-none-left",
    amountStockInfoSufficient: "good-item--amount--stock-info--sufficient",
    subtotal: "good-item--subtotal",
    subtotalText: "good-item--subtotal--text",
    action: "good-item--action",
    deleteBtn: "good-item--action--delete-btn",
    
    popover: "good-item--popover",
    popoverContent: "good-item--popover--text",
};

export const messages = {
    remainingStock: "还剩",
    count: "件",
    noneLeft: "无货",
    stockSufficient: "库存充足",
    delete: "删除",
    confirmDeleteModalTitle: "确定删除以下商品吗？",
    confirmDelete: "确定删除",
    cancelDelete: "取消",
};

export const assets = {
    rmbSign: require('../../assets/rmb.svg')
}