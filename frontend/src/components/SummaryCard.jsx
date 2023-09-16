export const SummaryCard = ({ header, currency, amount }) => {
  return (
    <div className="border-2 rounded-sm p-3 text-xl text-center">
      <h3 className="text-2xl">{header.toUpperCase()}</h3>
      <h2 className="text-4xl">
        {currency} {amount}
      </h2>
    </div>
  );
};
