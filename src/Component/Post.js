import React from 'react';
function Post(props) {
  const { id, email,first_name,last_name,avatar } = props.data;
  return (
    <div className="post">
      <small>{id}</small>
      <h1>{email}</h1>
      <p>{first_name}</p>
      <p>{last_name}</p>
      <p><img src={avatar} alt="img" /></p>
      

    </div>
  );
}
export default Post;
