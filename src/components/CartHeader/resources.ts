
import './CartHeader.scss';

export const CSS = {
    cartHeader: "cart-header",

    header: "cart-header--header",

    filterBtns: 'cart-header--header--filter-btns',

    filterAll: "cart-header--header--filter-btns--all",
    filterSelected: "cart-header--header--filter-btns--selected",
    filterUnselected: "cart-header--header--filter-btns--unselected",

    goodsCount: "cart-header--header--goods-count",
    searchAutoComplete: "cart-header--header--search-auto-complete",
    search: "cart-header--header--search",

    option: 'cart-header--header--search--option',
    optionFallback: "cart-header--header--search--option--fallback",
    optionLeftStr: "cart-header--header--search--option--left-string",
    optionSearchStr: "cart-header--header--search--option--search-string",
    optionRightStr: "cart-header--header--search--option--right-string",

    listHeader: "cart-header--list-header",

    selectAll: 'cart-header--list-header--select-all',
    good: "cart-header--list-header--good",
    unitPrice: "cart-header--list-header--unit-price",
    amount: "cart-header--list-header--amount",
    subtotal: "cart-header--list-header--subtotal",
    action: "cart-header--list-header--action",
}

export const messages = {
    goodsCount: "商品数量",
    search: "搜索",
    searchPlaceholder: "输入以搜索您的购物车商品",
    selectAll: "全选",
    optionFallback: "...未能找到搜索的商品",
    good: "商品",
    unitPrice: "单价",
    amount: "数量",
    subtotal: "小计",
    action: "操作",
    filterBtns: {
        all: "全部商品",
        selected: "当前选中",
        unselected: "未选中",
    }
}