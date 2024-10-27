import TowerObject from "./TowerObject";

const SideBar = () => {
  return (
    <div className="flex flex-col bg-white h-full w-60 overflow-y-auto fixed">
      <ul className="space-y-2 mt-20">
        <TowerObject name="Tower A" />
        <TowerObject name="Tower B" />
        <TowerObject name="Tower C" />
        <TowerObject name="Tower D" />
        <TowerObject name="Tower E" />
        <TowerObject name="Tower F" />
        <TowerObject name="Tower G" />
        <TowerObject name="Tower H" />
        <TowerObject name="Tower I" />
        <TowerObject name="Tower J" />
      </ul>
    </div>
  );
};

export default SideBar;
