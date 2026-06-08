// Import real package via @fm-real alias (vite SSR only) to avoid
// circular resolution when framer-motion is aliased to this file.
import * as framerMotion from "@fm-real";
import { forwardRef, createElement } from "react";

const isSSR = typeof window === "undefined";

function createMotionComponent(Tag: keyof typeof framerMotion.motion) {
  const MotionComponent = framerMotion.motion[Tag] as any;
  return forwardRef<HTMLElement, any>(function SSRMotion(props, ref) {
    const { initial, ...rest } = props;
    return createElement(MotionComponent, {
      ...rest,
      ref,
      initial: isSSR ? false : initial,
    });
  });
}

export {
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "@fm-real";

export const motion = new Proxy(framerMotion.motion, {
  get(target, prop: string) {
    const val = target[prop as keyof typeof target];
    if (val && typeof val === "function") {
      return createMotionComponent(prop as keyof typeof framerMotion.motion);
    }
    return val;
  },
}) as typeof framerMotion.motion;
