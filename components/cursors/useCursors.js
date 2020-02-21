import { usePresence } from "@roomservice/react";
import { useEffect } from "react";

export default function useCursors(room) {
  const [cursors, setMyCursor] = usePresence(room, "cursors");

  // KOBY: "useEffect" is a function that runs
  // once every time something changes in the "rerunOn"
  // array (or the second argument in the useEffect fn)
  //
  // It's useful for when you want to do stuff when
  // the component first appears on the page.
  //
  // https://reactjs.org/docs/hooks-effect.html
  const rerunOn = [room];
  useEffect(() => {
    const handleMouseMove = e => {
      setMyCursor({
        x: e.pageX,
        y: e.pageY
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, rerunOn);

  return Object.values(cursors);
}
