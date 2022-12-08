export interface WalletAttributes {
    name: string;
    imageId: number;
    currency: string;
    initialBalance: number;
    isTotalExcluded: boolean;
    _id?: string;
    userId?: string;
}