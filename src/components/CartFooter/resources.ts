
import './CartFooter.scss';

export const CSS = {
    cartFooter: "cart-footer",
    totalText: "cart-footer--total-text",
    total: "cart-footer--total",
    rmbSign: "cart-footer--total--rmb-sign",
    totalPrice: "cart-footer--total--price",
    orderBtn: "cart-footer--order-btn",
}

export const messages = {
    total: "总计:",
    order: "去结算",

    orderModal: {
        cantAfford: { title: "别买了", content: "买不起。" },
        noWay: { title: "没有后端怎么买", content: "买不了，这个订单和钱不知道给谁。" },
        noneSelected: { title: "啥也没选", content: "买些什么呢？要不都选上吧。" }
    },

    ok: '好的',
    cancel: '不好'
}