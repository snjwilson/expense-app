const currencies = ["INR", "USD", "EUR", "GBP"];

export const ExpenseCreator = () => {
  return (
    <section className="w-full lg:w-3/4 mx-auto py-4">
      <form className="p-5 text-2xl">
        <div className="grid grid-flow-row md:grid-flow-col lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <fieldset>
              <input
                className="p-5 text-2xl text-slate-800 w-full rounded-sm"
                placeholder="Input expense title here..."
                type="text"
              />
            </fieldset>
          </div>
          <div className="lg:col-span-1 grid grid-flow-col gap-5">
            <div className="">
              <fieldset>
                <input
                  className="p-5 text-2xl text-slate-800 w-full rounded-sm"
                  placeholder="Amount"
                  type="number"
                />
              </fieldset>
            </div>
            <div className="">
              <fieldset>
                <select
                  className="p-5 text-2xl text-slate-800 w-full rounded-sm"
                  placeholder="Currency"
                  type="number"
                >
                  <option>INR</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="mt-4 px-16 py-3 border-2 rounded-sm w-3/4 lg:w-1/2">
            Add Expense
          </button>
        </div>
      </form>
    </section>
  );
};
