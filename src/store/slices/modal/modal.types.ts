interface IModals {
   playbackDrawer: boolean;
}

export interface StateType {
   modals: IModals;
}
export interface ITriggerModalPayload {
   modal: keyof IModals;
   trigger: boolean;
}
