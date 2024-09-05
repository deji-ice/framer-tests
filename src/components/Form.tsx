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
    axios
      .patch("https://mongoose-tests.onrender.com/api/v1/user/send-otp", data)
      .then((res) => {
        console.log(res);
        toast.success("Email sent successfully");
      })
      .catch((err) => toast.error(`error: ${err}`));
  };

  console.log(watch("email"));

  return (
    <div className="flex items-center h-screen justify-center flex-col">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-8xl font-semibold font-cormorant">
          Don't want to miss anything?
        </h1>
        <p className=" w-[27rem] text-center mt-4 font-medium font-montserrat">
          Get weekly updates on the newest design stories, case studies and tips
          right in your mailbox.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mt-6 w-[30rem] pb-2  text-3xl font-montserrat"
        >
          <div className="flex border-b border-slate-500 relative">
            <input
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[com]{3}$/i,
              })}
              placeholder="email"
              name="email"
              className=" outline-none  w-[77%] py-1 placeholder:text-3xl text-base"
            />
            <button className="absolute bottom-0.5 right-0" type="submit">
              submit
            </button>
          </div>
          {errors.email && (
            <span className="text-red-500 text-sm mt-2">
              This field is required
            </span>
          )}
        </form>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Form;
