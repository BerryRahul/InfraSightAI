import TowerObject from "./TowerObject";

const SideBar = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col bg-white h-full w-60 overflow-y-auto fixed">
        <ul className="space-y-2">
          <TowerObject name="Tower 1" />
          <TowerObject name="Tower 2" />
          <TowerObject name="Tower 3" />
          <TowerObject name="Tower 4" />
          <TowerObject name="Tower 5" />
          <TowerObject name="Tower 6" />
          <TowerObject name="Tower 7" />
          <TowerObject name="Tower 8" />
          <TowerObject name="Tower 9" />
          <TowerObject name="Tower 10" />
          <TowerObject name="Tower 11" />
          <TowerObject name="Tower 12" />
          <TowerObject name="Tower 13" />
        </ul>
      </div>
      <div className="flex-grow ml-60"> </div>
    </div>
  );
};

export default SideBar;
