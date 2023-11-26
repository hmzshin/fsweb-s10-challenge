import React, { useEffect } from "react";
import Post from "./Post";
import { useSelector } from "react-redux/es/hooks/useSelector";

const PostList = () => {
  let notlar = useSelector((store) => store.note);
  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {notlar.map((not) => (
        <Post item={not} key={not.id} />
      ))}
    </div>
  );
};

export default PostList;
