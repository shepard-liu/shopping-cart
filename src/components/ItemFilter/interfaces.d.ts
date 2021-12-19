

export interface ItemFilterProps {
    shops: Shop[];
    searchStr: string;
    filter: FilterType;
    onSelectGood: (which: Good) => void;
    onToggleShopSelectAll: (which: Shop, doSelectAll: boolean) => void;
    onChangeGoodAmount: (which: Good, newAmount: number) => void;
    onDeleteGood: (which: Good) => void;
}

export type FilterType = ('all' | 'selected' | 'unselected');