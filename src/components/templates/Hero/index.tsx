import { RandomBrush } from "@/art/p5/RandomWalk/RandomBrush";
import { Title } from "@/components/atoms/Typography/Title";

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
      <div className={`h-[100vh]`}>
        <RandomBrush
          key={3}
          cWidth={"windowWidth"}
          cHeight={"windowHeight"}
          num={150}
          maxFrameCount={280}
          color={{ r: 50, g: 256, b: 200 }}
        />
        <div className="absolute left-[50%] top-[50%]  w-full z-[100] translate-x-[-50%] translate-y-[-50%]">
          <Title className="text-6xl text-white text-center">
            Dive Into Creative ...
          </Title>
        </div>
      </div>
    </>
  );
};
