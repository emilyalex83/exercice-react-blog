function ProfileMenu() {
    const profile = {
      firstname: "Emily",
      lastname: "Alexandre",
    };
  
    return (
      <li>
        {profile.firstname} {profile.lastname}
      </li>
    );
  }
  
  export default ProfileMenu;