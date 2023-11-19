import React from 'react';
import { useParams } from 'react-router-dom';
// 프로필에서 사용 할 데이터
const profileData = {
  gildong: {
    name: '홍길동',
    description:
      'Backend Developer GildongHong'
  },
  Harper: {
    name: '이동인',
    description: 'Frontend Developer DonginLee'
  }
};

const Profile = () => {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
  //console.log(match.params);
  const { username } = useParams();
  console.log(username);
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;