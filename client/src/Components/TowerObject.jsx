

const TowerObject = (props) => {
  const {name} = props;
  return (
    <div className="border-b-2">
      {" "}
      <li>
        <a
          href="#"
          className="flex items-center p-4 border-l-4 border-white bg-gray-100 bg-opacity-50"
        >
          <span className="mx-4 font-medium">{props.name}</span>
        </a>
      </li>
    </div>
  );
};

export default TowerObject;
