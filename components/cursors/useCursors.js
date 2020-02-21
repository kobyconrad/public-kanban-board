export default function useCursors(room) {
  const [cursors, setMyCursor] = usePresence(room, "cursors");

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
  }, [room]);

  return Object.values(cursors);
}
