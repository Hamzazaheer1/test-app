const App = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">App</h1>
      <input
        type="text"
        placeholder="Search here...."
        className="h-[23px] small_text w-full rounded-[8px] border-[0.59px] border-[#707175] bg-[#F6F6F6] pl-[10px] pr-6 font-normal text-[#858585] focus:outline-none tablet:h-[36px] tablet:pr-10 tablet:text-[16px] tablet:leading-[16px] dark:border-[#989898] dark:bg-[#000] dark:text-[#E8E8E8]"
        // value={search}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default App;
