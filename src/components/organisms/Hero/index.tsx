import { Induction } from "@/components/atoms/Others/Induction";
import dynamic from "next/dynamic";

const Rain = dynamic(
  async () => {
    const { Rain } = await import("@/art/p5/FlaksFall/Rain");
    return Rain;
  },
  {
    ssr: false,
    loading: () => <></>,
  }
);

const Hero: React.VFC = () => {
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
      <div className={`h-[100vh] scale-x-[98%]`}>
        <Rain key={2} cWidth={"windowWidth"} cHeight={"windowHeight"} />
        <div className="absolute left-[50%] top-[50%]  w-full z-[10] translate-x-[-50%] translate-y-[-50%]">
          <picture>
            <source
              srcSet="/logo2.png"
              className="mx-auto"
              type="image/webp"
              width={256}
              height={256}
            />
            <img
              src="/logo2.png"
              alt="logo"
              width={256}
              height={256}
              className="mx-auto"
            />
          </picture>
        </div>
      </div>
      <div className="absolute bottom-0 left-[47%] mb-4">
        <Induction />
      </div>
    </>
  );
};

export default Hero;
