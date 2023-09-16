import { SummaryCard } from "./SummaryCard";

export const QuickStatistics = () => {
  return (
    <section className="grid w-full lg:w-4/6 mx-auto grid-rows-2 grid-flow-col gap-5 py-5">
      <SummaryCard header={"Today"} amount={2469} currency={"INR"} />
      <SummaryCard header={"Week"} amount={12369} currency={"INR"} />
      <SummaryCard header={"September"} amount={44234} currency={"INR"} />
      <SummaryCard header={"Year"} amount={436439} currency={"INR"} />
    </section>
  );
};
