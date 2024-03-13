import "./InfoTable.css";
const InfoTable = () => {
  return (
    <div className="info-table">
      <ul>
        <li>
          Total Flat Space <span>185 m2</span>
        </li>
        <li>
          Floor number <span>26th</span>
        </li>
        <li>
          Number of rooms <span>4</span>
        </li>
        <li>
          Parking Available <span>Yes</span>
        </li>
        <li>
          Payment Process <span>Bank</span>
        </li>
      </ul>
    </div>
  );
};

export default InfoTable;
