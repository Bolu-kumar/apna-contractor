const BookingComponent = () => {
  return (
    <div className="container-fluid my-5 px-0">
      <div
        className="container position-relative wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-light text-center p-5">
              <h1 className="mb-4">Book For A Service</h1>
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <select
                      className="form-select border-0"
                      style={{ height: "55px" }}
                    >
                      <option selected>Select A Service</option>
                      <option value="1">Service 1</option>
                      <option value="2">Service 2</option>
                      <option value="3">Service 3</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div
                      className="date"
                      id="date1"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control border-0 datetimepicker-input"
                        placeholder="Service Date"
                        data-target="#date1"
                        data-toggle="datetimepicker"
                        style={{ height: "55px" }}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-0"
                      placeholder="Special Request"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingComponent;
