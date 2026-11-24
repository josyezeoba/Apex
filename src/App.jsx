import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#090d16] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
      <Header />
    </div>
  );
};
export default App;
