export function getAllGoodsCount(shops: Shop[] | Shop) {
    let sum = 0;
    if (!Array.isArray(shops)) shops = [shops];
    shops.forEach((shop) => {
        sum += shop.goods.length;
    });
    return sum;
}

export function getActiveGoodsCount(shops: Shop[] | Shop) {
    let sum = 0;
    let selectedSum = 0;
    if (!Array.isArray(shops))
        shops = [shops];
    shops.forEach(shop => {
        const [shopGoodsSum, shopSelectedSum] = getShopGoodsCount(shop);
        sum += shopGoodsSum;
        selectedSum += shopSelectedSum;
    });
    return [sum, selectedSum];
}

function getShopGoodsCount(shop: Shop) {
    let sum = 0;
    let selectedSum = 0;
    shop.goods.forEach(good => {
        if (good.stockAmount > 0) {
            ++sum;
            if (good.isSelected)
                selectedSum++;
        }
    });
    return [sum, selectedSum];
}

export function isSelectableGood(good: Good) {
    return isActiveGood(good) && good.amount <= good.stockAmount ? true : false;
}

export function isBuyableGood(good: Good) {
    return isActiveSelectedGood(good) && good.amount <= good.stockAmount;
}

export function isActiveSelectedGood(good: Good) {
    return isActiveGood(good) && good.isSelected ? true : false;
}

export function isActiveGood(good: Good) {
    return good.stockAmount > 0 ? true : false;
}

export function setAndCopyGood(good: Good, newProps: Partial<Good>) {
    return Object.assign({}, good, newProps);
}

export function setAndCopyShop(shop: Shop, newProps: Partial<Shop>) {
    return Object.assign({}, shop, newProps);
}