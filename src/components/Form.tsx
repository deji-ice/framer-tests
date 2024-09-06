import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  type FormData = {
    email: string;
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    toast.promise(
      axios
        .patch(import.meta.env.VITE_API_ENDPOINT, data)
        .then((response) => {
          console.log("Response Data:", response.data); // Access the success response data
          return response.data; // Return the data so it can be used in the success toast
        })
        .catch((error) => {
          console.error("Error Response:", error.response?.data); // Log the error response
          throw error.response?.data?.message || "Something went wrong"; // Throw custom error message for toast
        }),
      {
        loading: "Sending email...", // Loading message during the request
        success: (responseData) => <b>{`${responseData.message}`}</b>, // Customize success message with response data
        error: (errorMessage) => (
          <b>{`Could not send email: ${errorMessage}`}</b>
        ), // Customize error message with error data
      }
    );
  };

  console.log(watch("email")); // Log the email input value in real-time for debugging

  return (
    <div className="flex items-center h-screen bg-white justify-center flex-col">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-8xl font-semibold font-cormorant">
          Don't want to miss anything?
        </h1>
        <p className=" w-[27rem] text-center mt-4 font-medium font-montserrat">
          Get weekly updates on the newest design stories, case studies, and
          tips right in your mailbox.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mt-6 w-[30rem] pb-2 text-3xl font-montserrat"
        >
          <div className="flex border-b border-slate-500 relative">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[com]{3}$/i,
                  message: "Please enter a valid @ & .com email address",
                },
              })}
              placeholder="email"
              name="email"
              className="outline-none w-[77%] bg-transparent py-1 placeholder:text-3xl text-lg font-medium"
            />
            <button className="absolute bottom-0.5 right-0" type="submit">
              Submit
            </button>
          </div>
          {errors.email && (
            <span className="text-red-500 text-sm mt-2">
              {errors.email.message}
            </span>
          )}
        </form>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Form;
