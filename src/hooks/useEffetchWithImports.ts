import { DependencyList, useEffect, useRef } from "react";
import { useToast } from "./useToast";

type Import = Promise<any>;
type AwaitedImports<T extends Import[]> = { [P in keyof T]: Awaited<T[P]> };

type Resolve<T extends Import[]> = (result: AwaitedImports<T>) => void;

export function useEffectWithImports<T extends Import[] | []>(
  resolve: Resolve<T>,
  imports: () => T,
  deps?: DependencyList
) {
  const toast = useToast();

  useEffect(() => {
    let isMounted = true;
    const promises = imports();
    Promise.all(promises)
      .then(res => {
        if (isMounted) resolve(res);
      })
      .catch(e => {
        toast(e.message, "error", e.code);
        console.error(e);
      });

    return () => {
      isMounted = false;
    };
  }, [...(deps || [])]);
}

export async function ImportAync<T extends Import[] | []>(imports: T, callback: Resolve<T>) {
  const resolve = await Promise.all(imports);
  return callback(resolve);
}
