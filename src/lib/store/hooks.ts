import { TypedUseSelectorHook, useDispatch,useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

// useDispatch + types == customHook
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector =  useSelector.withTypes<RootState>()

// export const hahaUseAppSelector : TypedUseSelectorHook<RootState> = useSelector
