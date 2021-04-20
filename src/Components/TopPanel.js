import React, { useRef, useState } from "react";
import "./styles.css";
import {
  createPostAction,
  removePostAction,
  fetchPostsAction,
} from "../redux/actions";
import { useDispatch } from "react-redux";
import axios from "axios";

const TopPanel = () => {
  const [counter, setCounter] = useState(1);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const addPost = () => {
    const title = inputRef.current.value;

    if (title) {
      const newPost = {
        title: title,
        id: Date.now().toString(),
      };

      console.log(dispatch(createPostAction(newPost)));
    } else {
      alert("Post cannot be empty!!!");
    }
  };

  const fetchPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/?id=${counter}`)
      .then((result) => {
        let post = result.data.map((item) => {
          return { title: item.title, id: Date.now().toString() };
        });
        setCounter((prev) => ++prev);
        console.log(dispatch(fetchPostsAction(post)));
      });
  };

  return (
    <div className="top-panel">
      <div className="form-panel">
        <form onSubmit={addPost}>
          <input ref={inputRef} type="text" autoFocus={true} />
        </form>
      </div>
      <div className="button-panel">
        <button className="button" onClick={() => dispatch(addPost())}>
          Add
        </button>
        <button className="button" onClick={() => dispatch(fetchPosts())}>
          Fetch
        </button>
        <button className="button" onClick={() => dispatch(removePostAction())}>
          Remove All
        </button>
      </div>
    </div>
  );
};

export default TopPanel;
