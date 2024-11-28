import Workbench2 from "../../components/sales/WorkBench2";

const PendingTask = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-3/4">
        <main className="w-[1150px] p-4 flex-1 ">
          <Workbench2 />
        </main>
      </div>
    </div>
  );
};

export default PendingTask;
