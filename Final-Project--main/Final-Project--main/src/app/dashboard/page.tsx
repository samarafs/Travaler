import UserUpdateForm from "@/components/usersettings/UpdateUserForm"



function page() {
  return (
    <div className="flex flex-col h-screen items-center justify-center text-white">
      <UserUpdateForm />
    </div>
  )
}

export default page