import AuthStatus from "./AuthStatus";
import { ExpenseCreator } from "./ExpenseCreator";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { QuickStatistics } from "./QuickStatistics";

const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-black min-h-screen text-teal-50 tracking-widest px-6">
        <h1 className="text-3xl text-center pt-5 tracking-widest">
          Hi Sanjay! Good Evening!
        </h1>
        <ExpenseCreator />
        <QuickStatistics />
      </main>
      <Footer />
    </>
  );
};

export default Home;
