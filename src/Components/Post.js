const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem
        minima officiis laboriosam vero enim eaque eum saepe. Veritatis ut cum
        laborum beatae mollitia voluptates inventore quasi autem perspiciatis
        suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        optio consequuntur, sit maxime sed eveniet itaque laudantium iste ab
        nihil totam reiciendis numquam odit consequatur? Libero exercitationem
        amet blanditiis odio.
      </p>
    </div>
  );
};
export default Post;
