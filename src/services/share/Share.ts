import { Share } from "react-native";

export interface ShareOptions {
    title: string,
    message?: string
    url?: string,
    subject: string
  };



export const openShareDialog = (shareOptions:ShareOptions) => Share.share(shareOptions);