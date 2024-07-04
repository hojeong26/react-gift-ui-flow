import styled from '@emotion/styled';

const Header = () => {
  const loginBtnText: string = localStorage.getItem('username') ? '내 계정' : '로그인';

  return (
    <HeaderContainer>
      <a href="/">
        <HomeLogo
          src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
          alt="Home Logo"
        ></HomeLogo>
      </a>
      <LoginBtn>{loginBtnText}</LoginBtn>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 10;
  height: 54px;
  a {
    outline: none;
  }
`;

const HomeLogo = styled.img`
  width: 60px;

  &:hover {
    cursor: pointer;
  }
`;

const LoginBtn = styled.span`
  font-size: 15px;
  color: black;
  &:hover {
    cursor: pointer;
  }
`;
