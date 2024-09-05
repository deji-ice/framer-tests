const Form = () => {
  return (
    <div className="flex items-center h-screen justify-center flex-col">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-4xl">Don't want to miss anything?</h1>
        <p>
          Get weekly updates on the newest design stories, case studies and tips
          right in your mailbox.
        </p>
        <form action="" className="flex">
          <input type="text" placeholder="email"  className="border-b border-slate-500"/>
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
