import { Avatar, FriendItem, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isonline }) => {
	return (
		<FriendItem>
			<Status isonline={isonline}></Status>
			<Avatar src={avatar} alt="User avatar" width="80" />
			<Name>{name}</Name>
		</FriendItem>
	);
};