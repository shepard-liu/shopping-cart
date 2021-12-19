import { FilterType } from '../ItemFilter/interfaces';

export interface CartHeaderProps {
    onSelectAllChange: (doSelectAll: boolean) => void;
    onSearch: (str: string) => void;
    onChangeFilter: (filter: FilterType) => void;
    shops: Shop[]
}

export interface SelectOptionProps {
    leftStr?: string;
    searchStr?: string;
    rightStr?: string;
    fallback?: boolean;
}
