import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITriggerModalPayload, StateType } from "./modal.types";

const initialState: StateType = {
   modals: {
      playbackDrawer: false,
      compactPlayer: false,
   },
};

export const modalSlice = createSlice({
   name: "modal",
   initialState,
   reducers: {
      triggerModal: (state: StateType, action: PayloadAction<ITriggerModalPayload>) => {
         state.modals = { ...state.modals, [action.payload.modal]: action.payload.trigger };
      },
   },
});

export const { triggerModal } = modalSlice.actions;

export default modalSlice.reducer;
