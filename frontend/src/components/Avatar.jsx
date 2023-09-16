export const Avatar = ({ src }) => {
  return (
    <div className="p-4">
      <img className="bg-slate-300 w-12 h-12 rounded-full border-2" src={src} />
    </div>
  );
};
