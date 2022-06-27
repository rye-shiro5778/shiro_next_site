import { RandomBrush } from "@/art/p5/RandomWalk/RandomBrush";

export const Hero: React.VFC = () => {
  //   const list = useMemo(
  //     () => [
  //       <SnowFall key={1} cWidth={"windowWidth"} cHeight={"windowHeight"} />,
  //       <Rain key={2} cWidth={"windowWidth"} cHeight={"windowHeight"} />,
  //       <RandomBrush
  //         key={3}
  //         cWidth={"windowWidth"}
  //         cHeight={"windowHeight"}
  //         num={150}
  //         maxFrameCount={280}
  //       />,
  //     ],
  //     []
  //   );
  //   const i = Math.floor(Math.random() * list.length);
  //   const [heroCanvas, setHeroCanvas] = useState(list[i]);

  //   useEffect(() => {
  //     setInterval(() => {
  //       const i = Math.floor(Math.random() * list.length);
  //       setHeroCanvas(list[i]);
  //     }, 6000);
  //   }, [list]);

  return (
    <>
      <div className={`h-[100vh] w-[100%] relative`}>
        <RandomBrush
          key={3}
          cWidth={"windowWidth"}
          cHeight={"windowHeight"}
          num={150}
          maxFrameCount={280}
        />
        ,
        {/* {heroCanvas}
         */}
        {/* <div className="absolute left-[40%] top-[40%] right-[50%] bottom-[50%] m-auto ">
          <Title className="text-6xl">Dive Into Creative ...</Title>
        </div> */}
      </div>
    </>
  );
};
