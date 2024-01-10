import styled from 'styled-components';

export const FriendItem = styled.li`
  background-color: #fff;
  width: 100%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  display: flex;
  padding: 10px 0;
  align-items: center;
  gap: 10px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.isonline ? 'green' : 'red')};
  border-radius: 50%;
  margin-left: 20px;
`;

export const Avatar = styled.img`
  border-radius: 5px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
