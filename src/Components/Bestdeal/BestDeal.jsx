import "./BestDealStyle.css";
import { FaCalendar } from "react-icons/fa";
import dealmg1 from "../../assets/images/deals/deal-01.jpg";
import dealmg2 from "../../assets/images/deals/deal-02.jpg";
import dealmg3 from "../../assets/images/deals/deal-03.jpg";
import InfoTable from "../InfoDetails/InfoTable/InfoTable";

const BestDeal = () => {
  return (
    <div className="section best-deal">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-heading">
              <h6>| Best Deal</h6>
              <h2>Find Your Best Deal Right Now!</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tabs-content">
              <div className="row">
                <div className="nav-wrapper ">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="appartment-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#appartment"
                        type="button"
                        role="tab"
                        aria-controls="appartment"
                        aria-selected="true"
                      >
                        Appartment
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="villa-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#villa"
                        type="button"
                        role="tab"
                        aria-controls="villa"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        Villa House
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="penthouse-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#penthouse"
                        type="button"
                        role="tab"
                        aria-controls="penthouse"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        Penthouse
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="appartment"
                    role="tabpanel"
                    aria-labelledby="appartment-tab"
                  >
                    <div className="row">
                      <div className="col-lg-3">
                        <InfoTable />
                      </div>
                      <div className="col-lg-6">
                        <img src={dealmg1} alt="" />
                      </div>
                      <div className="col-lg-3">
                        <h4>Extra Info About Property</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, do eiusmod tempor pack incididunt ut labore et
                          dolore magna aliqua quised ipsum suspendisse.
                          <br />
                          <br />
                          When you need free CSS templates, you can simply type
                          TemplateMo in any search engine website. In addition,
                          you can type TemplateMo Portfolio, TemplateMo One Page
                          Layouts, etc.
                        </p>
                        <div className="icon-button">
                          <a href="#">
                            <i className="celender">
                              <FaCalendar />
                            </i>
                            Schedule a visit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="villa"
                    role="tabpanel"
                    aria-labelledby="villa-tab"
                  >
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="info-table">
                          <ul>
                            <li>
                              Total Flat Space <span>250 m2</span>
                            </li>
                            <li>
                              Floor number <span>26th</span>
                            </li>
                            <li>
                              Number of rooms <span>5</span>
                            </li>
                            <li>
                              Parking Available <span>Yes</span>
                            </li>
                            <li>
                              Payment Process <span>Bank</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <img src={dealmg2} alt="" />
                      </div>
                      <div className="col-lg-3">
                        <h4>Detail Info About Villa</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, do eiusmod tempor pack incididunt ut labore et
                          dolore magna aliqua quised ipsum suspendisse. <br />
                          <br />
                          Swag fanny pack lyft blog twee. JOMO ethical copper
                          mug, succulents typewriter shaman DIY kitsch twee
                          taiyaki fixie hella venmo after messenger poutine next
                          level humblebrag swag franzen.
                        </p>
                        <div className="icon-button">
                          <a href="#">
                            <i className="celender">
                              <FaCalendar />
                            </i>
                            Schedule a visit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="penthouse"
                    role="tabpanel"
                    aria-labelledby="penthouse-tab"
                  >
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="info-table">
                          <ul>
                            <li>
                              Total Flat Space <span>320 m2</span>
                            </li>
                            <li>
                              Floor number <span>34th</span>
                            </li>
                            <li>
                              Number of rooms <span>6</span>
                            </li>
                            <li>
                              Parking Available <span>Yes</span>
                            </li>
                            <li>
                              Payment Process <span>Bank</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <img src={dealmg3} alt="" />
                      </div>
                      <div className="col-lg-3">
                        <h4>Extra Info About Penthouse</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, do eiusmod tempor pack incididunt ut labore et
                          dolore magna aliqua quised ipsum suspendisse. <br />
                          <br />
                          Swag fanny pack lyft blog twee. JOMO ethical copper
                          mug, succulents typewriter shaman DIY kitsch twee
                          taiyaki fixie hella venmo after messenger poutine next
                          level humblebrag swag franzen.
                        </p>
                        <div className="icon-button">
                          <a href="#" className="icon-button">
                            <i className="celender">
                              <FaCalendar />
                            </i>
                            Schedule a visit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
