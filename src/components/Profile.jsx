import s from'./Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
    <div>
      <img src={require("../img/background.jpg")} alt="background car" />
    </div>
    <div>ava + descr</div>
    <div className='posts'>
      My posts
      <div >New post</div>
      <div className={s.item}>post 1</div>
      <div className={s.item}>post 2</div>
    </div>
  </div>
  );
}

export default Profile;