import css from './Profile.module.css';

export const Profile = props => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;
  return (
    <div className={css.profile}>
      <div className={css.profile_description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats_item}>
          <span className={css.label}>Followers</span>
          <span className={css.followers}>{followers}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.label}>Likes</span>
          <span className={css.likes}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
