

export interface GoodItemProps {
    good: Good;
    onSelect: () => void;
    onChangeAmount: (newAmount: number) => void;
    onDelete: () => void;
}