import { configureStore } from "@reduxjs/toolkit";
import NFTReducer from "./slice/NFTSlice";
import profileReducer from "./slice/profileSlice";
import essayReducer from "./slice/countSlice";
import forgeReducer from "./slice/forgeEssaySlice";
import myEssayReducer from "./slice/myEssaySlice";
import myDraftReducer from "./slice/draftSlice";
import adminDashboardData from "./slice/adminSlice";
import marketPlace from "./slice/marketPlace/marketPlaceSlice";
import marketPlaceDetail from "./slice/marketPlace/nftDetailsMPSlice";

export const store = configureStore({
	reducer: {
		profile: profileReducer,
		myNFT: NFTReducer,
		essay: essayReducer,
		forge: forgeReducer,
		myEssays: myEssayReducer,
		myDrafts: myDraftReducer,
		adminDashboardData,
		marketPlace,
		marketPlaceDetail,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
