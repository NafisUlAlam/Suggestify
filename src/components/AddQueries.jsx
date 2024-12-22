import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { toast } from "react-toastify";

const AddQueries = () => {
  const { user } = useContext(AuthContext);
  //console.log(user.photoURL);
  useDocumentTitle(`Add Query|Sports Hub`);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleAdd = (e) => {
    e.preventDefault();
    console.log(user.photoURL);
    const itemName = e.target.name.value;
    const itemBrand = e.target.brand.value;
    const itemPhoto = e.target.photo.value;
    const queryTitle = e.target.title.value;
    const boycottReasons = e.target.reasons.value;

    const originalPoster = e.target.user.value;
    const originalPosterEmail = e.target.email.value;
    const originalPosterImg = user.photoURL;
    const recommendationCount = 0;
    const timeOfPost = new Date().toISOString();
    const myQuery = {
      itemName,
      itemBrand,
      photo: itemPhoto,
      queryTitle,
      boycottReasons,

      originalPoster,
      originalPosterEmail,
      originalPosterImg,
      timeOfPost,
      recommendationCount,
    };
    console.log(myQuery);
    e.target.reset();
    fetch("http://localhost:5000/queries", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myQuery),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Successfully added the query!", {
            position: "top-center",
          });
        }
      })
      .catch((err) => toast.error(err, { position: "top-center" }));
  };
  return (
    <div className="min-h-screen ">
      <div className="card  w-full shrink-0 shadow-2xl md:p-8">
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center pt-4">
          Add Query
        </h2>
        <hr className="mt-4 text-black" />
        <form
          className="card-body grid grid-cols-1 md:grid-cols-2"
          onSubmit={(e) => handleAdd(e)}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              placeholder="item name"
              name="name"
              className="input input-bordered bg-blue-50"
              required
              ref={inputRef}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Item Brand</span>
            </label>
            <input
              type="text"
              placeholder="brand"
              name="brand"
              className="input input-bordered bg-blue-50"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered bg-blue-50"
              required
            />
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Query Title</span>
            </label>
            <input
              type="text"
              placeholder="title"
              name="title"
              className="input input-bordered bg-blue-50"
              required
            />
          </div>

          <div className="form-control relative md:col-span-2">
            <label className="label">
              <span className="label-text">Boycott Reasons</span>
            </label>
            <textarea
              placeholder="tell us why you do not like the product"
              type="text"
              name="reasons"
              className="textarea textarea-bordered bg-blue-50 p-4"
              rows={10}
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="user"
              className="input input-bordered bg-blue-50"
              value={user.displayName}
              required
              readOnly
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="text"
              name="email"
              className="input input-bordered bg-blue-50"
              value={user.email}
              readOnly
              required
            />
          </div>
          <button className="btn btn-accent md:col-span-2 my-8">
            Add Query
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQueries;
