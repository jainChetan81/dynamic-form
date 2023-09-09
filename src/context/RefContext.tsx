"use client"
import {
	createContext,
	useCallback,
	useContext,
	useRef,
	ReactNode,
	SetStateAction,
	Dispatch,
	useSyncExternalStore,
} from "react";
import { Z_Form } from "@/@types";


export function genericFastContext<TStore>() {
	type TStoreHook = {
		get: () => TStore;
		set: Dispatch<SetStateAction<TStore>>;
		subscribe: (callback: () => void) => () => void;
	};

	function useStoreData(data: TStore): TStoreHook {
		const store = useRef<TStore>(data);

		const get = useCallback(() => store.current, []);

		const set = useCallback(
			(value: SetStateAction<TStore> | Function) => {
				if (typeof value !== "function") store.current = value;
				// @ts-expect-error I can't figure this one out
				else store.current = value(store.current);
				subscribers.current.forEach((callback) => callback());
			},
			[]
		);

		const subscribers = useRef(new Set<() => void>());

		const subscribe = useCallback((callback: () => void) => {
			subscribers.current.add(callback);
			return () => subscribers.current.delete(callback);
		}, []);

		return { get, set, subscribe };
	}

	type UseStoreDataType = ReturnType<typeof useStoreData>;

	const StoreContext = createContext<UseStoreDataType | null>(null);

	function StoreProvider({ children, data }: { children: ReactNode; data: TStore }) {
		const store = useStoreData(data);
		return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
	}

	function useStore<SelectorOutput>(
		selector: (store: TStore) => SelectorOutput
	): [SelectorOutput, Dispatch<SetStateAction<TStore>>] {
		const store = useContext(StoreContext);
		if (!store) throw new Error("StoreContext is not defined");
		const state = useSyncExternalStore(store.subscribe, () => selector(store.get()), () =>
			selector(store.get())
		);
		return [state, store.set];
	}

	return { StoreProvider, useStore };
}

const { StoreProvider, useStore } = genericFastContext<Z_Form>();
export { StoreProvider, useStore };
