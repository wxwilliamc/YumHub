import { useGetMyUser, useUpdateMyUser } from '@/api/MyUserApi'
import UserProfileForm from '@/forms/user-profile-form/UserProfileForm'


const UserProfilePage = () => {

    const { updateUser, isLoading:updatingUser } = useUpdateMyUser();
    const { currentUser, isLoading:fetchingUser } = useGetMyUser();

    if(fetchingUser){
      return <span>Loading...</span>
    }

    if(!currentUser){
      return <span>Unable to load user profile</span>
    }

  return (
    <>
        <UserProfileForm onSave={updateUser} isLoading={updatingUser} currentUser={currentUser}/>
    </>
  )
}

export default UserProfilePage