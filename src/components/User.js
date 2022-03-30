// function User(props) {
//   return (
//     <h1>
//       {props.isLoggedIn ? `${props.name} ${props.surName}` : "Giriş yapmadınız"}
//     </h1>
//   );
// }

import PropTypes from "prop-types";

function User({ name, surName, age, isLoggedIn, friends, address }) {
  if (!isLoggedIn) {
    return <div>Giriş yapmadınız.</div>;
  }

  return (
    <>
      <h1>
        {isLoggedIn ? `${name} ${surName} yaşı ${age}` : "Giriş yapmadınız"}
      </h1>
      {address.title} {address.zip}
      <br></br>
      <br></br>
      {friends &&
        friends.map((friend, index) => (
          <div key={index}>
            {index}-{friend}
          </div>
        ))}
    </>
  );
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  surName: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  friends: PropTypes.array,
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

//değer gönderilmemişsse default propsdakilerçalışır.
User.defaultProps = {
  isLoggedIn: false,
  name: "isimsiz",
};

export default User;
