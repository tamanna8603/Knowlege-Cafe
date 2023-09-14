import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <header className=' flex justify-between items-center py-2 border-b-2'>
      <h1 className=' text-4xl font-bold'>React Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;