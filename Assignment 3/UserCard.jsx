function UserCard({ name, email }) {
    return (
      <div className="bg-white shadow-md rounded-xl p-4 w-64 m-4">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    );
  }
  
  export default UserCard;
  