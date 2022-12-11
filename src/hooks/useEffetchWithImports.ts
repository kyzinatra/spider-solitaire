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
  const resolveRef = useRef(resolve);
  const importsRef = useRef(imports);
  const toast = useToast();
  resolveRef.current = resolve;
  importsRef.current = imports;

  useEffect(() => {
    let isMounted = true;
    const promises = importsRef.current();
    Promise.all(promises)
      .then(res => {
        if (isMounted) resolveRef.current(res);
      })
      .catch(e => {
        toast(e.message, "error", e.code);
      });

    return () => {
      isMounted = false;
    };
  }, [...(deps || []), toast]);
}

export async function ImportAync<T extends Import[] | []>(imports: T, callback: Resolve<T>) {
  const resolve = await Promise.all(imports);
  callback(resolve);
}
