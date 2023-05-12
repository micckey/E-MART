import React from "react";

const Newproduct = () => {
    return (
        <div>
            <div className="container">
                <div className="createProducts">
                    <div className="titleBar">
                        <div className="titleItem">
                            <h1>Add Product</h1>
                        </div>
                        <div className="titleItem">
                            <button className="btn" >
                                Cancel
                            </button>
                        </div>
                    </div>
                    <div className="cardWrapper">
                        <div className="left">
                            <div className="card">
                                <p>Name</p>
                                <input type="text" />
                                <p>Description (Optional)</p>
                                <textarea cols="10" rows="5" ></textarea>

                                <div className="media">
                                    <ul className="imageList">
                                        <li className="imageItem">
                                            <div className="imgItem">
                                                <img alt="" width='117px' height='100px' />
                                            </div>
                                        </li>
                                        <li className="imageItem">
                                            <form className="itemForm">
                                                <label className="formLabel">Add Image</label>
                                                <input type="file" className="formInput" />
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="card">
                                <p>Category</p>
                                <input type="text" />
                                <hr />

                                <p>Stock</p>
                                <input type="text" />
                                <hr />

                                <p>Price</p>
                                <input type="text" />
                                <hr />

                            </div>
                        </div>

                        <button className="btn " >
                            Save
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newproduct