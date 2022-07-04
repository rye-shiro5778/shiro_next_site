type Props = {};
export const Loading: React.VFC<Props> = ({}) => {
  return (
    <div className="flex justify-center relative">
      <div className="animate-spin h-10 w-10 border-2 opacity-90 border-slate-400 rounded-full border-t-transparent"></div>
    </div>
  );
};
