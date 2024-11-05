const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Sadaf</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          fugiat, recusandae cumque quod tenetur optio impedit voluptatum est
          exercitationem eum, dolores nihil architecto libero accusamus in,
          perspiciatis nesciunt saepe sapiente? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Assumenda fugiat, recusandae cumque
          quod tenetur optio impedit voluptatum est exercitationem eum, dolores
          nihil architecto libero accusamus in, perspiciatis nesciunt saepe
          sapiente? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Assumenda fugiat, recusandae cumque quod tenetur optio impedit
          voluptatum est exercitationem eum, dolores nihil architecto libero
          accusamus in, perspiciatis nesciunt saepe sapiente? Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Assumenda fugiat, recusandae
          cumque quod tenetur optio impedit voluptatum est exercitationem eum,
          dolores nihil architecto libero accusamus in, perspiciatis nesciunt
          saepe sapiente? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Assumenda fugiat, recusandae cumque quod tenetur optio impedit
          voluptatum est exercitationem eum, dolores nihil architecto libero
          accusamus in, perspiciatis nesciunt saepe sapiente?
        </p>
      </div>
    </div>
  );
};
export default SinglePost;
