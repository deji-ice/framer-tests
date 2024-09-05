const Form = () => {
  
  return (
    <div className="flex items-center h-screen justify-center flex-col">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-8xl font-semibold font-cormorant  ">
          Don't want to miss anything?
        </h1>
        <p className=" w-[27rem] text-center mt-4 font-medium font-montserrat">
          Get weekly updates on the newest design stories, case studies and tips
          right in your mailbox.
        </p>
        <form
          action=""
          className="flex mt-6 w-[30rem] border-b border-slate-500 pb-2 relative text-3xl font-montserrat"
        >
          <input
            type="text"
            placeholder="email"
            className=" outline-none  w-[20rem] placeholder:text-3xl text-base"
          />
          <button className="absolute bottom-0.5 right-0">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
